const { readFile } = require("fs");
//1.normal approach
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
        reject("erro errror");
      }
      resolve(result);
    });
  });
};


//2.with then()
// getFile("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));



//3.async await
const getResult = async () => {
  try {
    const first = await getFile("../content/first.txt");
    const second = await getFile("./content/second.txt");
    console.log(first, second);
  } 
  catch (error) {
   console.log(error);
  }
};

getResult();
