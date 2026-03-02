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
    res.write('<body><h1>Enter Your Details</h1>')
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="Username" placeholder="username"<br><br>');
    res.write('<label for="email">Email:</label><br>');
    res.write('<input type="email" id="email" name="email" placeholder="Enter your email" required> <br><br>');
    res.write('<label for="contact">Contact Number:</label><br> <input type="tel" id="contact" name="contact" placeholder="Enter contact number"><br><br>');
    res.write('<label for="country">Country:</label><br><select id="country" name="country"><option value="">Select Country</option><option value="India">India</option><option value="America">America</option><option value="Pakistan">Pakistan</option><option value="Bhutan">Bhutan</option><option value="Bangladesh">Bangladesh</option></select><br></br>')
    res.write('<label>Gender:</label><br><input type="radio" id="male" name="gender" value="male">  <label for="male">Male</label> <input type="radio" id="female" name="gender" value="female"><label for="female">Female</label><input type="radio" id="others" name="gender" value="others"><label for="others">Others</label><br></br>')
    res.write('<input type="submit" value="Submit">')
    res.write('</form>');
    res.write('</body>')
    res.write('</html>')
    return res.end();

    }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete node</title></head>');
    res.write('<body><h1>Read</h1></body>')
    res.write('</html>')
    res.end();
    // process.exit(); stopping the server after one request.
    }
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(' server running at http://localhost:${PORT}');
});
 
//factors,sensors,network , programming with input and output.