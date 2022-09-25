package handlers

import (
	"backend/src/db"
	"backend/src/middleware"
	"backend/src/model"
	"bytes"
	"crypto/rand"
	"database/sql"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

var DB *sql.DB

func init() {
	DB = db.GetDB()
}

func Login(w http.ResponseWriter, r *http.Request) {
	middleware.CorsMiddleware(w)
	middleware.AllowPreflight(w, r)

	var requestUser model.User
	var user model.User
	dec := json.NewDecoder(r.Body)
	err := dec.Decode(&requestUser)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("email", requestUser.Email)

	if err := DB.QueryRow(`SELECT * FROM users WHERE email = $1`, requestUser.Email).Scan(&user.Id, &user.Name, &user.Email, &user.Password); err != nil {
		fmt.Println("login failed")
		w.WriteHeader(400)
		log.Println(err)
		return
	}

	if requestUser.Password == user.Password {
		fmt.Println("login success")
		sessionID := createSessionID()
		fmt.Println(sessionID)
		cookie := &http.Cookie{
			Name:   "session_id",
			Value:  sessionID,
			MaxAge: 600000,
		}

		http.SetCookie(w, cookie)
		resBody := new(bytes.Buffer)
		json.NewEncoder(resBody).Encode(user)
		w.Write(resBody.Bytes())
		w.WriteHeader(http.StatusOK)
	} else {
		fmt.Println("login failed")
		w.WriteHeader(401)
	}
}

func createSessionID() string {
	b := make([]byte, 32)
	if _, err := io.ReadFull(rand.Reader, b); err != nil {
		log.Fatal(err)
	}

	return base64.URLEncoding.EncodeToString(b)
}
