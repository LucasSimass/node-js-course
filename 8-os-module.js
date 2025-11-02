const { log } = require('console');
const os = require('os')

// info of current user
const user = os.userInfo()

console.log(user);

// how lond system uptime in seconds
console.log(`${os.uptime()} seconds on system uptime`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOs);
