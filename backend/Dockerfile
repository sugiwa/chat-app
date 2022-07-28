FROM golang:1.18-alpine
RUN apk add --update && apk add git

WORKDIR /app
CMD ["go", "run", "./src/main.go"]

EXPOSE 8080