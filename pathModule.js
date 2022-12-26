const path = require('path');
const filePath = path.join('//data/', 'subfolder', 'data.txt');

console.log(filePath);

console.log(path.basename(filePath));
const absoultePath = path.resolve(__dirname, 'content', 'subdata', 'test.txt');
console.log(absoultePath);