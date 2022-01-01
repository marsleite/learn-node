const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<h1>Página principal</h1>');
    return res.end();
  } else if (url === '/contato') {
    res.write('<h1>Página de contato</h1>');
    return res.end();
  } else if ( url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'Mensagem recebida');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(3000, () => {
  console.log('está ativo o server')
});