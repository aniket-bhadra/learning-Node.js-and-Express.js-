const { createReadStream } = require("fs");
const { result } = require("lodash");

// const stream = createReadStream("./content/BIG.txt");

// stream.on("data", (result) => {
//   console.log(result);
// });

//here now we read data in chunks, by default that chunk is 64kb, so in every chunks of 'data' we executing this callback, and get that result in console

//to change the defualt size of chunk can pass the optional object with highWaterMark property as argument -

const stream = createReadStream("../content/BIG.txt", {
  highWaterMark: 20000, //increasing the size of that chunk
  encoding: "utf-8", //setting the encoding
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (error) => {
  console.log(error);
});
