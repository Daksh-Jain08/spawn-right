const express = require("express");
const router = require("./routes/Routes");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the Task API" });
})
app.use("/tasks", router);
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});