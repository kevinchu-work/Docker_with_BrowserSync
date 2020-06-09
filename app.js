
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Hello World</h1><div>'+Math.random().toString(36)+'</div></body></html>');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});