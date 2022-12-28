const http = require("http");

const server = http.createServer((req, res)=> {
  res.writeHead(200, { 'content-type': 'text/html' })//with this we r providing response headers or  meta data about our response

  //this response headers for browser to render the content rightly

  res.write('<h1>hello</h1>') //here we pass the body
  res.end() //this end() method signals that the communication is over
}) //this callback going to be invoked everytime user hits our server


server.listen(5000);