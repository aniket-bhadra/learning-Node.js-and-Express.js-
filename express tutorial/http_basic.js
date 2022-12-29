const http = require("http");
const { readFileSync } = require('fs');

const homePageContent = readFileSync('./index.html', 'utf-8')

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePageContent);
    res.end();
  }
  else if(url === '/about'){
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  }
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>oops! not found</h1>");
    res.end();
  }
});

server.listen(5000);

