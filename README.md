# Task Manager API

A simple Express.js API to manage tasks.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the server

```bash
npm start
```

### 3. Run the test client

```bash
npm test
```

## API Documentation

### `/tasks`

- **POST**: Create a new task
  - **Request body**:
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Task created successfully",
      "task": {
        "id": "number",
        "title": "string",
        "description": "string",
        "completed": false,
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
    ```

- **GET**: Get all tasks
  - **Query parameters** (optional):
    - `completed`: Filter tasks based on their completion status (`true` or `false`).
  - **Response**:
    ```json
    {
      "tasks": [
        {
          "id": "number",
          "title": "string",
          "description": "string",
          "completed": false,
          "createdAt": "string",
          "updatedAt": "string"
        },
        ...
      ]
    }
  - **Example**: To get all completed tasks, you can send the following request:
    ```
    GET /tasks?completed=true
    ```

### `/tasks/:id`

- **GET**: Get a task by ID
  - **Response**:
    ```json
    {
      "task": {
        "id": "number",
        "title": "string",
        "description": "string",
        "completed": false,
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
    ```

- **PUT**: Update a task by ID
  - **Request body**:
    ```json
    {
      "title": "string",
      "description": "string",
      "completed": true
    }
    ```
  - **Response**:
    ```json
    {
      "message": "Task updated successfully",
      "task": {
        "id": "number",
        "title": "string",
        "description": "string",
        "completed": true,
        "createdAt": "string",
        "updatedAt": "string"
      }
    }
    ```

- **DELETE**: Delete a task by ID
  - **Response**:
    ```json
    {
      "message": "Task deleted successfully"
    }
    ```