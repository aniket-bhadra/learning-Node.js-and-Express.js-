

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

// const updateTask = async (req, res) => {
//   //for update task we need ---------->    1.id for that task, 2.body for that task
//   //body is sent form frontend, if no  body is sent form fornt end then below in testing-->,  data property is ----> {}

//   try {
//     const { id: taskID } = req.params;
//     // testing------------------------------------->>>>>>----> res.status(200).json({ id: taskID, data: req.body });

//     // const task = await Task.findOneAndUpdate({ _id: taskID }, req.body);
//     //withgout 3rd argument-----this returns a old value before update. and all the validation which we imposed while buling model, like required, trim, ... will also not work while update, means user can update name with empty string.so we need to provdie that 3rd argument in findOneAndUpdate() method

//     //so to do that----------->
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,

//       // overwrite: true, -----------------> this is used in put method
//     });

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

// module.exports = {
//   getAllTasks,
//   createTask,
//   getTask,
//   updateTask,
//   deleteTask,
// };



//------------------------->>>>>>>>>>>>>>>---------now refactored the above code with same functioanlity-------<<<<<-----
const Task = require("../models/Task");

const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");


const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});

  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});


const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    // const error = new Error('Not Found');
    // error.status = 404;
    // return next(error); //return--coz i don't want js to keep reading the code after this line

    //now refactored this above code-->
    return next(createCustomError(`no task exist wih the id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});


const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`no task exist wih the id: ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
