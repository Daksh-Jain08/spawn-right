const axios = require('axios');

async function createTask(body) {
    try {
        const response = await axios.post('http://localhost:3000/tasks', body);
        console.log('Server Response:', response.data);
    } catch (error) {
        console.error('Error creating task:', error.response?.data || error.message);
    }
}

createTask({
    title: "Test Task",
    description: "This is a test task"
});

createTask({
    title: "Test Task 2",
    description: "This is a test task 2"
});

async function getAllTasks() {
    try {
        const response = await axios.get('http://localhost:3000/tasks');
        console.log('Server Response:', response.data);
    } catch (error) {
        console.error('Error retrieving tasks:', error.response?.data || error.message);
    }
}

async function updateTask(id, body) {
    try {
        const response = await axios.put(`http://localhost:3000/tasks/${id}`, body);
        console.log('Server Response:', response.data);
    } catch (error) {
        console.error('Error updating task:', error.response?.data || error.message);
    }
}

updateTask(1, {
    title: "Updated Task",
    description: "This is an updated task",
    completed: true
});

async function getTaksById(id) {
    try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`);
        console.log('Server Response:', response.data);
    } catch (error) {
        console.error('Error retrieving task:', error.response?.data || error.message);
    }
}

getTaksById(1);

async function deleteTask(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
        console.log('Server Response:', response.data);
    } catch (error) {
        console.error('Error deleting task:', error.response?.data || error.message);
    }
}

deleteTask(1);

getAllTasks();