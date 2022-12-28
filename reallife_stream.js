var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync("./content/BIG.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream('./content/BIG.txt', 'utf-8')
    fileStream.on('open', ()=> {
      fileStream.pipe(res)
    })
    fileStream.on("error", (error)=> {
      res.end(error);
    })

  })
  .listen(5000);
