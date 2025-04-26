const express = require("express");
const router = express.Router();

const controllers = require("../controllers/Controllers");

router.route("/").get(controllers.getAllTasks).post(controllers.createTask);
router.route("/:id").get(controllers.getTask).put(controllers.updateTask).delete(controllers.deleteTask);

module.exports = router;

