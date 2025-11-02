// Modules
// CommonJs, every file is module (by default)
// Modules -  Encapsulated Code (only share minimum )

const { names } = require('./4-names');

const sayHi  = require('./5-utils.js');

  
names.map((name) => {
  sayHi(name)
})

console.log(require('./6-alternative.js'))


// this file it will run code even if we dont export anything this is bc when we do require, it runs the file
require('./7-mind-grenade.js')