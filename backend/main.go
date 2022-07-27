package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("test")

	fmt.Fprint(w, "test ok")
}

func main() {
	http.HandleFunc("/test", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}