const {Tasks} = require("../models/Task");
let idCounter = 1;

const createTask = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({message: "Request body is required"});
        }
        if (typeof req.body !== "object") {
            return res.status(400).json({message: "Request body must be an object"});
        }
        const {title, description} = req.body;
        if (!title) {
            return res.status(400).json({message: "Title is required"});
        }
        const id = idCounter++;
        console.log("ID Counter:", idCounter);
        const task = {id, title, description, completed: false};
        Tasks.push(task);
        return res.status(201).json({message: "Task created successfully", task});
    } catch (error) {
        console.error("Error creating task:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

const getAllTasks = async (req, res) => {
    try {
        return res.status(200).json({message: "Tasks retrieved successfully", tasks: Tasks});
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = Tasks.find(task => task.id === parseInt(id));
        if (!task) {
            return res.status(404).json({message: "Task not found"});
        }
        return res.status(200).json({message: "Task retrieved successfully", task});
    } catch (error) {
        console.error("Error retrieving task:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description, completed} = req.body;
        if(!title && !description && completed === undefined) {
            return res.status(400).json({message: "At least one field is required to update"});
        }
        const taskIndex = Tasks.findIndex(task => task.id === parseInt(id));
        if (taskIndex === -1) {
            return res.status(404).json({message: "Task not found"});
        }
        if (title) {
            Tasks[taskIndex].title = title;
        }
        if (description) {
            Tasks[taskIndex].description = description;
        }
        if (completed !== undefined) {
            Tasks[taskIndex].completed = completed;
        }
        return res.status(200).json({message: "Task updated successfully", task: Tasks[taskIndex]});
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const taskIndex = Tasks.findIndex(task => task.id === parseInt(id));
        if (taskIndex === -1) {
            return res.status(404).json({message: "Task not found"});
        }
        Tasks.splice(taskIndex, 1);
        return res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        console.error("Error deleting task:", error);
        return res.status(500).json({message: "Internal server error"});
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}