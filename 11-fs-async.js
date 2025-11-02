const {readFile, writeFile} = require('fs');

const firstFilePath = './content/first.txt';
const secondFilePath = './content/second.txt';
const thirdNewFilePath = './content/thirdNew.txt';

// it wil probably run the log: 'starting' and 'done' first bc the main code is async!

console.log('starting');

// this is a callback hell!
readFile(firstFilePath, 'utf-8', (err, res) => {
  if (err){
    console.log(err);
    return;
  }

  console.log('reading');
  
  const firstText = res
  readFile(secondFilePath, 'utf-8', (err, res) => {
    if (err){
      console.log(err);
      return;
    }


    const secondText = res;
    writeFile('./content/result-asycn.txt', `result: (${firstText}), (${secondText})`, (err, res)=> {
      if (err){
        console.log(err)
        return;
      }
      
      console.log('Writing');
    })
  })
})

console.log('done');
