const http = require('http');
const reqhandler = require('./parsing_request_2');

const server = http.createServer(reqhandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
