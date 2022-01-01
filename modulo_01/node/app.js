const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<h1>Página principal</h1>');
  } else if (url === '/contato') {
    res.write('<h1>Página de contato</h1>');
  } else {
    res.write('<h1>Página não encontrada</h1>');
  }
  res.setHeader('Content-type', text/html);
  res.write('<h1>Hello World</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('está ativo o server')
});