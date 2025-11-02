// require fs let us control files
const { readFileSync, writeFileSync } = require('fs');

const firstFilePath = './content/first.txt';
const secondFilePath = './content/second.txt';
const thirdNewFilePath = './content/thirdNew.txt';

// this is sync 
// read the file, and we need to show the path and the value that we wanna pass
const first = readFileSync(firstFilePath, 'utf-8');
const second = readFileSync(secondFilePath, 'utf-8');

console.log(first);
console.log(second);

// write the file, if the file doesn't exist, it will create a new one
// {flag: 'a'} stop overwrite
writeFileSync(thirdNewFilePath, `This a an text result: ${1+1}`, {flag: 'a'})

console.log(readFileSync(thirdNewFilePath, 'utf-8'))
