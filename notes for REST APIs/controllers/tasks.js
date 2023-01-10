

// const Task = require("../models/Task");

// const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find({});
//     res.status(200).json({ tasks });

//     //while sending response, we can send diff type of response in any controller (getallTasks, createTask,...), ex--

//     //we can send here like this also--
//     //1.
//     //res.status(200).json({ tasks, amount: tasks.length });
//     //2.
//     // res
//     //   .status(200)
//     //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });

//     //etc etc
//     //imp thing is just stay consistent while sending response in every route

//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const createTask = async (req, res) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const getTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOne({ _id: taskID });
//     // console.log(task);

//     if (!task) {
//       return res
//         .status(404)
//         .json({ msg: `no task exist wih the id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const deleteTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndDelete({ _id: taskID });
//     if (!task) {
//       return res
//         .status(404)
//         .json({ msg: `no task exist wih the id: ${taskID}` });
//     }

//     res.status(200).json({ task }); //here we sent that task that we r removed, for better understanding in postman

//     //since mostly the delted item will not nedded in client side, so here we can send any success response ex-
//     //res.status(200).send()
//     //res.status(200).json({ task: null, status: "success" })
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };



// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

