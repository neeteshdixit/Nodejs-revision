const http = require('http');

function requestListener(req,res){
    console.log(req);
}

// http.createServer(requestListener);// pehla tarika 
// http.createServer(function requestListener(req,res){
//     console.log(req);
// }); // dusra tarika 

const server = http.createServer((req,res)=>{
    console.log(req);
}); // 4th way

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(' server running at http://localhost:${PORT}');
});
