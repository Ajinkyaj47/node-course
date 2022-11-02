const os = require('os')

//infor about current user
const user = os.userInfo()
console.log(user)

//mwthod to return os uptime
console.log(`The system uptime is ${os.uptime()}`)

//return more information about os

const currentos={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentos)