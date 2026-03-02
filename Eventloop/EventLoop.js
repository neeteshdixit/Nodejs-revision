const fs = require('fs');

console.log("1 : Start script");
// synchronous blocking operations

console.log("2 : Before reading file synchronously");
const datasync = fs.readFileSync('user.txt');
console.log("3 : synchronous data read complete");

// asynchronous non-blocking operations

console.log("4 : reading file asynchronously");
fs.readFile('user-details.txt','utf-8',(err, datasync)=>{
    if(err) throw err;
    console.log("5 : asynchronous data read complete");
});

console.log("6 : End script");