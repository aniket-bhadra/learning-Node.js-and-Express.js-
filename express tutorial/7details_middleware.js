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

//app.use() method always expect middleware as argument

//there is 3 ways we can provide middleware
//our own / express built in / third party

//so in built in express middleware & thirdParty middleware we don't need setup our funciton, we just to use it

//express built in---->
//app.use(express.static('./public'))
//so in epxresss we've built in middleware with name of static, & this static method is looking for our public folder & it basically places all the contents of public folder as our static assets, so that they r publically available

// app.listen(5000, () => {
//   console.log("server is listening on 5000......");
// });


