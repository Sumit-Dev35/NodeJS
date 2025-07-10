const { log } = require('console');
const os=require('os');

const user=os.userInfo();
console.log(user)

console.log(`System uptime is ${os.uptime()} seconds`);

const currentOs={
  name:os.type(),
  release:os.release(),
  totalMemory:os.totalmem(),
  freeMemory:os.freemem(),
}

log(currentOs)