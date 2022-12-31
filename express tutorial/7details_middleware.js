// const express = require("express");
// const app = express();
// const logger = require("./logger");
// const authorize = require("./authorize");

// app.use([logger, authorize]);

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.get("/about", (req, res) => {
//   res.send("about page");
// });

// app.get("/api/products",[logger, authorize], (req, res) => {
//   res.send("product page");
//   console.log(req.user);
// });
// app.get("/api/items", (req, res) => {
//   res.send("item page");
// });

//if you just want to provide middleware on specific route instead of all route then omit that app.use([logger, authorize]); & pass that in specific route like--

// app.get("/api/products",[logger, authorize], (req, res) => {
//   res.send("product page");
//   console.log(req.user);
// });



// app.listen(5000, () => {
//   console.log("server is listening on 5000......");
// });


