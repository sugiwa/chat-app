package services

import (
	"backend/src/db"
	"database/sql"
	"fmt"
)

var DB *sql.DB

func init() {
	DB = db.GetDB()
}

func SaveMessage(msg string) {
	fmt.Println("message", msg)

	_, err := DB.Exec(`INSERT INTO messages (message) VALUES ($1)`, msg)
	if err != nil {
		fmt.Println(err)
	}
}
