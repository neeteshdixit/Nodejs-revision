const http = require('http');

function requestListener(req,res){
    console.log(req);
}

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    
    if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete node</title></head>');
    res.write('<body><h1>Welcome in Home</h1></body>')
    res.write('</html>')
    return res.end();

    } else if(req.url=='/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete node</title></head>');
    res.write('<body><h1>check Products</h1></body>')
    res.write('</html>')
    return res.end();
    }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete node</title></head>');
    res.write('<body><h1>Read</h1></body>')
    res.write('</html>')
    res.end();
    // process.exit();
    }
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(' server running at http://localhost:${PORT}');
});
 