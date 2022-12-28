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


//4.using module
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromie = util.promisify(writeFile);

const data = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf-8");
    const second = await readFilePromise("./content/second.txt", "utf-8");
    await writeFilePromie(
      "./content/new_myfile.txt",
      `here is the sum:  ${first} and   ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

data();