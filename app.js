const { writeFileSync, readFileSync } = require("fs");

for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/BIG.txt", `value is ${i} \n`, { flag: "a" });
}

const first = readFileSync('./content/BIG.txt', 'utf-8');
console.log(first);