const { readFile } = require("fs");
const { reject } = require("lodash");
const { resolve } = require("path");

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//   if(err) {
//    console.log(err);
//     return;

//   }

//   console.log(result);
// })

//promisify
const getFile = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

getFile("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
