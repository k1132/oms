export PATH := $(GOPATH)/bin:$(PATH)
export GO111MODULE=on
LDFLAGS := -s -w

# https://pkg.go.dev/modernc.org/sqlite
os-archs=darwin:amd64 darwin:arm64 freebsd:amd64 linux:386 linux:amd64 linux:arm linux:arm64 windows:amd64

all: build

build: app

app:
	@$(foreach n, $(os-archs),\
		os=$(shell echo "$(n)" | cut -d : -f 1);\
		arch=$(shell echo "$(n)" | cut -d : -f 2);\
		gomips=$(shell echo "$(n)" | cut -d : -f 3);\
		target_suffix=$${os}_$${arch};\
		echo "Build $${os}-$${arch}...";\
		env CGO_ENABLED=0 GOOS=$${os} GOARCH=$${arch} GOMIPS=$${gomips} packr build -trimpath -ldflags "$(LDFLAGS)" -o ./release/oms_$${target_suffix} cmd/omsd/main.go;\
		echo "Build $${os}-$${arch} done";\
	)
	@mv ./release/oms_windows_amd64 ./release/oms_windows_amd64.exe