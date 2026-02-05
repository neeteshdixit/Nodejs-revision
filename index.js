//streams 
//socket ka kaam hota hai data ko ek jagah se dusri jagah bhejna mtlb connection banana
//streams ka kaam hota hai data ko chhote chhote tukdo me todna aur phir use process karna

// duplex stream - read and write both mtlb dono kaam kar sakta hai
// chunks - data ke chhote chhote tukde
// buffer - data ko ekattha karne ke baad meaningful form me convert karne ka process krta hai 
// dns : domain name system.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader(200 ,'Content-Type', 'text/html');
         let html = `
        <html>
            <body>
                <form action="/Submit" method="post">
    <h1 style="text-align: center;">Feedback Form</h1>
    <br><br>
    <div style="margin-left: 40%;">
    <label for="username">Username:</label>
    <input type="text" id ="username" name = "username" placeholder="Enter your username" required>
    <br><br>
    <label for="password">Password:</label>
    <input type="password" id ="password" name = "password" placeholder="Enter your password" required>
    <br><br>
    <label for="male">Gender</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
    <br><br>
     <label for="check">Do you agree my performance</label>
     <br><br>
     <label for="yes">Yes</label>
    <input type="checkbox" id ="yes" name ="check" value="yes">
    <label for="yes">No</label>
    <input type="checkbox" id ="check" name ="check" value="no">
    <br><br>
    <label for="feedback">Feedback</label>
    <br><br>
    <textarea name="feedback" id="feedback" placeholder="Feedback"></textarea>
    <br><br>
    <label for="select">Country</label>
    <select name="country" id="select">
        <option value="select">Select</option>
        <option value="india">india</option>
        <option value="America">America</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Europe">Europe</option>
    </select>
   <br><br>
    <input type="submit" value="Submit">

</div>

</body>
</html>
    `;
    res.end(html);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});