const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  req.setHeader('Content-type', text/html);
  res.write('<h1>Hello World</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('está ativo o server')
});