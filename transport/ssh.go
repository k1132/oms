package transport

import (
	"errors"
	log "github.com/sirupsen/logrus"
	"golang.org/x/crypto/ssh"
	"golang.org/x/crypto/ssh/agent"
	"io"
	"net"
	"os"
	"strconv"
	"time"
)

const (
	DefaultTimeout = 30 * time.Second
)

type Config struct {
	User       string
	Host       string
	Port       int
	Password   string
	KeyBytes   []byte
	Passphrase string
}

type Client struct {
	SSHClient *ssh.Client
}

type Session struct {
	SSHSession *ssh.Session
	Stdin      io.WriteCloser
}

func (c *Client) NewSessionWithPty(cols, rows int) (*Session, error) {
	session, err := c.SSHClient.NewSession()
	if err != nil {
		return nil, err
	}
	stdin, err := session.StdinPipe()
	if err != nil {
		log.Debugf("get stdin pipe error, %v", err)
		return nil, err
	}
	modes := ssh.TerminalModes{
		ssh.ECHO:          1,     // disable echo
		ssh.TTY_OP_ISPEED: 14400, // input speed = 14.4kbaud
		ssh.TTY_OP_OSPEED: 14400, // output speed = 14.4kbaud
	}
	// Request pseudo terminal
	if err := session.RequestPty("xterm", rows, cols, modes); err != nil {
		return nil, err
	}
	return &Session{
		SSHSession: session,
		Stdin:      stdin,
	}, nil
}

func (c *Client) NewSession() (*Session, error) {
	session, err := c.SSHClient.NewSession()
	if err != nil {
		return nil, err
	}
	stdin, err := session.StdinPipe()
	if err != nil {
		log.Debugf("get stdin pipe error, %v", err)
		return nil, err
	}
	return &Session{
		SSHSession: session,
		Stdin:      stdin,
	}, nil
}

func (s *Session) Kill() error {
	// kill signal
	if _, err := s.Stdin.Write([]byte("0x09")); err != nil {
		return err
	}
	return nil
}

func (s *Session) Close() error {
	defer s.Kill()
	return s.SSHSession.Close()
}

func (s *Session) WindowChange(h, w int) error {
	return s.SSHSession.WindowChange(h, w)
}

func (s *Session) Wait() error {
	return s.SSHSession.Wait()
}

func (s *Session) Output(cmd string) ([]byte, error) {
	return s.SSHSession.Output(cmd)
}

// AuthWithAgent use already authed user
func AuthWithAgent() (ssh.AuthMethod, error) {
	sock := os.Getenv("SSH_AUTH_SOCK")
	if sock == "" {
		return nil, errors.New("agent disabled")
	}
	socks, err := net.Dial("unix", sock)
	if err != nil {
		return nil, err
	}
	// 1. 返回Signers函数的结果
	client := agent.NewClient(socks)
	signers, err := client.Signers()
	if err != nil {
		return nil, err
	}
	return ssh.PublicKeys(signers...), nil
}

// AuthWithPrivateKeyBytes 直接通过秘钥的bytes
func AuthWithPrivateKeyBytes(key []byte, password string) (ssh.AuthMethod, error) {
	var signer ssh.Signer
	var err error
	if password == "" {
		signer, err = ssh.ParsePrivateKey(key)
	} else {
		signer, err = ssh.ParsePrivateKeyWithPassphrase(key, []byte(password))
	}
	if err != nil {
		return nil, err
	}
	return ssh.PublicKeys(signer), nil
}

func NewClient(host string, port int, user string, password string, KeyBytes []byte) (client *Client, err error) {
	if user == "" {
		user = "root"
	}
	var config = &Config{
		Host:       host,
		Port:       port,
		User:       user,
		Password:   password,
		Passphrase: password,
	}
	if KeyBytes != nil {
		config.KeyBytes = KeyBytes
	}
	return New(config)
}

// New 创建SSH client
func New(cnf *Config) (client *Client, err error) {
	clientConfig := &ssh.ClientConfig{
		User:            cnf.User,
		Timeout:         DefaultTimeout,
		HostKeyCallback: ssh.InsecureIgnoreHostKey(), // 忽略public key的安全验证
	}

	if cnf.Port == 0 {
		cnf.Port = 22
	}

	// 1. private key bytes
	if cnf.KeyBytes != nil {
		if auth, err := AuthWithPrivateKeyBytes(cnf.KeyBytes, cnf.Password); err == nil {
			clientConfig.Auth = append(clientConfig.Auth, auth)
		}
	}
	// 2. 密码方式 放在key之后,这样密钥失败之后可以使用Password方式
	if cnf.Password != "" {
		clientConfig.Auth = append(clientConfig.Auth, ssh.Password(cnf.Password))
	}
	// 3. agent 模式放在最后,这样当前两者都不能使用时可以采用Agent模式
	if auth, err := AuthWithAgent(); err == nil {
		clientConfig.Auth = append(clientConfig.Auth, auth)
	}

	sshClient, err := ssh.Dial("tcp", net.JoinHostPort(cnf.Host, strconv.Itoa(cnf.Port)), clientConfig)

	if err != nil {
		return client, errors.New("Failed to dial ssh: " + err.Error())
	}

	return &Client{SSHClient: sshClient}, nil
}