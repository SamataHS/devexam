# Simple App

A minimal full-stack project with HTML/CSS frontend and Node.js backend.

## Project Structure

```
simple-app/
├── frontend/
│   ├── index.html
│   └── style.css
├── backend/
│   ├── server.js
│   └── package.json
└── README.md
```

## How to Run

### 1. Start Backend
```bash
cd backend
npm install
npm start
```
Server runs on `http://localhost:3000`

### 2. Open Frontend
```bash
cd frontend
# Open index.html in your browser
# Or use a simple HTTP server:
# python -m http.server 8000
```

## Features

- **Frontend**: Simple form that accepts a name and sends it to the backend
- **Backend**: Express server with two endpoints:
  - `GET /api/status` - Check if server is running
  - `POST /api/greet` - Receive a greeting message

## API Endpoints

### GET /api/status
Returns server status and timestamp

### POST /api/greet
Request body: `{ "name": "John" }`
Response: `{ "message": "Hello, John! Welcome to the app." }`

---

Done! All code is ready. Just run the backend and open the HTML file in your browser.
