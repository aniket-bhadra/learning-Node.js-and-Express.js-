// const express = require("express");
// const { people } = require("../data");

// const router = express.Router();
// //this is a router instance that going to takes care of routing

// router.get("/", (req, res) => {
//   res.status(200).json({ success: true, data: people }); //this how we send the json data
// });

// router.post("/", (req, res) => {
//   const { name } = req.body;

//   if (!name) {
//     return res
//       .status(404)
//       .json({ success: false, msg: "please prvide the name" });
//   }
//   res.status(201).json({ success: true, person: name });
// });

// router.post("/postman", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res
//       .status(404)
//       .json({ success: false, msg: "please prvide the name" });
//   }

//   res.status(201).json({ success: true, data: [...people, name] });
// });

// router.put("/:id", (req, res) => {
//   const { id } = req.params; //so this the id,we get from route params
//   const { name } = req.body; //so this the body, which will replace the existing item

//   const updatedItem = people.find((element) => element.id === Number(id));

//   if (updatedItem) {
//     updatedItem.name = name;
//     return res.status(200).json({ success: true, data: people });
//   }

//   return res
//     .status(404)
//     .json({ success: false, msg: "your requestd id does not exist" });
// });

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedItem = people.find((element) => element.id === Number(id));

//   if (updatedItem) {
//     const deletedListofPeople = people.filter(
//       (person) => person.id !== Number(id)
//     );
//     return res.status(200).json({ success: true, data: deletedListofPeople });
//   }

//   return res
//     .status(404)
//     .json({ success: false, msg: "your requestd id does not exist" });
// });

// module.exports = router;

//2.now use controllers to make this file more cleaner
const express = require("express");

const router = express.Router();
//this is a router instance that going to takes care of routing

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// router.put("/:id", updatePerson);

// router.delete("/:id", deletePerson);





//another way of setting routes, where functionality will remain the same
//just chain our methods one after another if route or url is same

router.route("/").get(getPeople).post(createPerson);
router.route("postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
