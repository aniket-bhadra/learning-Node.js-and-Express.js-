const express = require("express");
const path = require("path");
const app = express();



//setup static & midddleware
app.use(express.static("./public"));

//static assets means--------->files that server doesn't have to change, ad ex of static asset- img file, styles, browser js file, common name for storing this assets is public or static as folder.
//express will take care setting path, stting up mime types, setting up status code for each resource



// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   //this method takes absoulte path,
//   //__dirname also provides abosoulte path

//   //since index.html also is a static file so instead of using this method we can aslo dump this html file to static folder. however to send index.html along with this dumping way (for simple sites), but there is one more way--templating engine (server side rendering)

//   //in dumping index.html what exactly happend?
//   //index.html is always going to be a root so when user hits the server, by defult server will serve this index.html, and index.html has all the paths for img styles so those things also gonna works fine.


//so for simple sites just dump all the files in the public, & everything will works fine

// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log(`server is listeneing to the port 5000....`);
});
