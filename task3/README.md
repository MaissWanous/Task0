

# Realtime Scoreboard

LiveScore is a simple , secure system for keeping track of scores in real time . It’s built for apps where updates need to be instant and cheating needs to be hard .

---
##  Overview

LiveScore enabls:

- A public top 10 leaderboard .
- Real‑time updates through WebSockets.
- Authenticated score submissions.
- Action‑based scoring , where the server decides whether a score change is valid.

---
##  API Endpoints

###  `GET /api/score/top`
Public endpoint that returns the top 10 users with the highest scores.

**Purpose:**  
- Make it public for everyone
- paire it with a WebSocket subscription for real‑time updates.

**Response Example:**
```json
[
  { "username": "user1", "score" : 1500 },
  { "username": "user2", "score" : 1400 }
]
```
---

### `POST /api/join`
Authentication endpoint for logging in or joining the system

**Request:**
```json
{
  "username": "user3",
  "password": "mypassword"
}
```

**Response:**
```json
{
  "token": "JWT_TOKEN_HERE"
}
```

**Notes:**  
- Passwords must be hashed  
- Make Tokens have expiration date and require refresh  
- Set a limit on password entry attempts to prevent brute‑force attempts

---

###  `POST /api/score/submit`
Authenticated endpoint used to increment a user’s score after completing an action.



##  Security Considerations

- Keep all scoring logic on the server  
- Validate every action before applying a score change   
- Log suspicious behavior for later review  
- Store secrets in environment variables (`.env`) .

---

##  Recommended Improvements

- Add an admin dashboard for monitoring users and logs  
- Add IP‑based anomaly detection to detect bots  

---
