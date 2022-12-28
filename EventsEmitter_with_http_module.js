const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('welcome')
// });

//that callback invoked whenver a request comes in or someone visit our sever

//another way we can setup with Event Emitter API

const server = http.createServer();
//behind the scenes server emits the request event & we can listen for it

server.on("request", (req, res) => {
  res.end("welcome!!");
});

server.listen(5000);
