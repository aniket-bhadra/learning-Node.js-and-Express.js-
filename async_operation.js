const http = require("http");

const server = http.createServer((req, res) => {
  console.log("hey hey got response");
  res.end("hello darling");
});

server.listen(5000);
//listen is a async fun, 
//process created by listen stays alive
//so event loop just waiting for those request to come in, & once they come in it wil run that callback 