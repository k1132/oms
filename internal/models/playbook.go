package models

import (
	"encoding/json"
	"os"
)

type PlayBook struct {
	Id       int     `json:"id"`
	Name     string  `gorm:"size:256" json:"name"`
	Steps    string  `gorm:"type:text" json:"-"`
	StepsObj []*Step `gorm:"-" json:"steps"`
}

func (p *PlayBook) GetStepsObj() error {
	var (
		steps []*Step
	)
	err := json.Unmarshal([]byte(p.Steps), &steps)
	if err != nil {
		return err
	}
	p.StepsObj = steps

	return nil
}

type Step struct {
	Seq    int    `json:"seq"`
	Type   string `json:"type"`
	Name   string `json:"name"`
	Caches string `json:"caches,omitempty"`
	Params string `json:"params"`
}

type StepSlice []Step

func (s StepSlice) Len() int           { return len(s) }
func (s StepSlice) Less(i, j int) bool { return s[i].Seq < s[j].Seq }
func (s StepSlice) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }

func (s *Step) GetCaches() []string {
	var caches []string
	_ = json.Unmarshal([]byte(s.Caches), &caches)

	return caches
}

func GetAllPlayBook() ([]*PlayBook, error) {
	var records []*PlayBook
	err := db.Find(&records).Error
	if err != nil {
		return nil, err
	}
	for _, record := range records {
		err := record.GetStepsObj()
		if err != nil {
			return nil, err
		}
	}
	return records, nil
}

func GetPlayBookById(id int) (*PlayBook, error) {
	record := PlayBook{}
	err := db.Where("id = ?", id).First(&record).Error
	if err != nil {
		return nil, err
	}
	err = record.GetStepsObj()
	if err != nil {
		return nil, err
	}

	return &record, nil
}

func InsertPlayBook(name, steps string) (*PlayBook, error) {
	record := PlayBook{
		Name:  name,
		Steps: steps,
	}
	err := db.Create(&record).Error
	if err != nil {
		return nil, err
	}
	return &record, nil
}

func ExistedPlayBook(name string, steps string) bool {
	var records []*PlayBook
	err := db.Where("name = ? and steps = ?", name, steps).Find(&records).Error
	if err != nil {
		return false
	}
	if len(records) == 0 {
		return false
	}
	return true
}

func UpdatePlayBook(id int, name string, steps string) (*PlayBook, error) {
	record := PlayBook{Id: id}
	err := db.Where("id = ?", id).First(&record).Error
	if err != nil {
		return nil, err
	}
	if name != "" {
		record.Name = name
	}
	if steps != "" {
		record.Steps = steps
	}
	err = db.Save(&record).Error
	if err != nil {
		return nil, err
	}
	return &record, nil
}

func DeletePlayBookById(id int) error {
	var (
		steps  []*Step
		record = PlayBook{}
	)

	err := db.Where("id = ?", id).First(&record).Error
	if err != nil {
		return err
	}
	_ = json.Unmarshal([]byte(record.Steps), &steps)
	err = db.Delete(&record).Error
	if err != nil {
		return err
	}
	for _, step := range steps {
		for _, cache := range step.GetCaches() {
			_ = os.Remove(cache)
		}
	}

	return nil
}
