const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (error, result)=> {
    if(error){
        console.log(error);
        return;
    }
    const second= result;


    writeFile('./content/async.txt', `the combined result is ${first} and ${second}`, (error, result)=> {
        if(error) {
            console.log(error);
            return;
        }
        console.log(result);
    })
  })
});

