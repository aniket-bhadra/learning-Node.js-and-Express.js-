const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please prvide the name" });
  }
  res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "please prvide the name" });
  }

  res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedItem = people.find((element) => element.id === Number(id));

  if (updatedItem) {
    updatedItem.name = name;
    return res.status(200).json({ success: true, data: people });
  }

  return res
    .status(404)
    .json({ success: false, msg: "your requestd id does not exist" });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  const updatedItem = people.find((element) => element.id === Number(id));

  if (updatedItem) {
    const deletedListofPeople = people.filter(
      (person) => person.id !== Number(id)
    );
    return res.status(200).json({ success: true, data: deletedListofPeople });
  }

  return res
    .status(404)
    .json({ success: false, msg: "your requestd id does not exist" });
};

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
};
