const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

const authMiddleware = require("../middleware/auth");

router.route("/dashboard").get(authMiddleware, dashboard);
//so everytime someone htting this route, 1st they will go through the middleware
//in middleware since i will have next(), so then i'll pass to the dashboard

//so all the requests that are going to the dashboard are actually hitting this authMiddleware middleware 1st

//so this way u can set up whatever amount of route we want, & infront of all of them we can just stick off that auth middleware, & all those routes will become protected
//& that auth middleware will check for token if token not present, will sent the error response, if the token is succefully verified then we move to that protected route & access resources

router.route("/login").post(login);

module.exports = router;
