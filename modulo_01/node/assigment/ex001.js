const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    return res.status(200).write('<h1>Home</h1>');
  }
  if (url === '/users' && method === 'POST') {
    res.write('<h1>Form</h1>')
    res.write('<form><input type="text" name="username" /><input type="submit" />Send</form>')
  }
});

server.listen(3000)