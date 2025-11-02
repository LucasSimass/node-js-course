const { log } = require('console');
const path = require('path');

console.log(path.sep);

// find the relative path
const filePath = path.join('/content', 'sunfolder', 'test.txt')

console.log(filePath);
const base = path.basename(filePath);

console.log(base);

// find the absolute path
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolutePath);
