

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



// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };

