const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "ridhima" }, { name: "rob" }]);
  
});

app.listen(5000, () => {
  console.log("server is listening on 5000......");
});
