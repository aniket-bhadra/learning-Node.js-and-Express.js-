const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

//step-2----added the controller to the route
// router.route("/").get(getAllTasks);

//step-4
//now setup the other routes with rest controllers
//here we use that chainging method to do this

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
