const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "ani") {
      req.user = { name: "ani", id: 4 };
      next();
    } else {
      res.status(401).send("unauthorize access");
    }
  
  };
  
  module.exports = authorize;
  