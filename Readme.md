
##  Architecture

### 1. User Authentication
- **Signup**
  - User enters: `name`, `email`, `password`
  - Data saved in `users.json`
  - Example:
    ```json
    {
      "users": [
        {
          "name": "Pratham",
          "email": "pratham@example.com",
          "password": "hashed_password"
        }
      ]
    }
    ```

- **Login**
  - User enters `email` and `password`
  - System checks against `users.json`
  - On success → Redirect to **Home Page**

---

### 2. Home Page (Task Management)
- User can:
  - Add new tasks
  - View tasks
  - Update tasks
  - Delete tasks

- Tasks saved in `tasks.json`
  - Example:
    ```json
    {
      "tasks": [
        {
          "id": 1,
          "user_email": "pratham@example.com",
          "title": "Complete project",
          "status": "pending"
        }
      ]
    }
    ```

---

### 3. CRUD Operations
- **Create** → Add new task
- **Read** → Fetch tasks from `tasks.json`
- **Update** → Modify task details (e.g., status)
- **Delete** → Remove task by `id`

---

##  Data Flow
1. **Signup** → Save user in `users.json`
2. **Login** → Validate credentials from `users.json`
3. **Home Page** → Show tasks from `tasks.json`
4. **CRUD** → Perform operations on `tasks.json`

---

##  File Structure
```
project/
│── users.json        # Stores user data
│── tasks.json        # Stores task data
│── index.html        # Login and SignUp 
│── home.html         # Main application 
│── README.md         # Architecture documentation
```

---
