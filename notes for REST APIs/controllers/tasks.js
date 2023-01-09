const Task = require("../models/Task");

//these are the routes or endpoints that needs be define
//app.get('api/v1/tasks')  ----------get all the tasks
//app.post('api/v1/tasks')  ----------create a new task
//app.get('api/v1/tasks/:id')  ----------get single task
//app.patch('api/v1/tasks/:id')  ----------update task
//app.delete('api/v1/tasks/:id')  ----------delete task

//step-1---setup 1st controller
const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

//step-3
//now setup the rest controllers for other routes

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });  //es7 syntax-- variable name & property name same
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
