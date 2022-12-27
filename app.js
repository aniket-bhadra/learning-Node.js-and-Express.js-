const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to our web page");
  res.end();
});


//now define the port which server should listen to
server.listen(5000);
