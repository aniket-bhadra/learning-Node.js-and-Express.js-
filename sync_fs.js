const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// writeFileSync("./content/newfile.txt", `${first} and ${second}`);

//this will create the file if this file is not exist & if this file existed in that dir, then this will overwrite with this value

//but if we append this value to existing data in that file then have to pass extra argument

writeFileSync("./content/newfile.txt", `apended text`, {flag: 'a'});
