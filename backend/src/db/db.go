package db

import (
	"database/sql"
	"fmt"
	"os"
	"time"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func init() {
	NewDb()
}

func NewDb() {
	var err error
	user := os.Getenv("POSTGRES_USER")
	db := os.Getenv("POSTGRES_DB")
	password := os.Getenv("POSTGRES_PASSWORD")
	config := fmt.Sprintf("host=postgres_db user=%s dbname=%s password=%s sslmode=disable", user, db, password)
	DB, err = sql.Open("postgres", config)
	if err != nil {
		panic(err)
	}

	for {
		err = DB.Ping()
		if err == nil {
			fmt.Println("Connection to DB Success")
			break
		}
		fmt.Println("Connecting...", err)
		time.Sleep(1 * time.Second)
	}
}

func GetDB() *sql.DB {
	for {
		if DB != nil {
			break
		}
		time.Sleep(1 * time.Second)
	}
	return DB
}
