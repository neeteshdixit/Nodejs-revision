const http = require('http');

function requestListener(req,res){
    console.log(req);
}

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete node</title></head>');
    res.write('<body><h1>Read</h1></body>')
    res.write('</html>')
    res.end();
    // process.exit();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(' server running at http://localhost:${PORT}');
});
 