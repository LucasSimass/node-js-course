const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('This is a content of backend :3');
    return;
  }
  if (req.url === '/about'){
    res.end('About this webpage, idk too much lol!');
    return;
  }

  res.end(`
  <h1>page not found</h1>
  <a href="/">Go Back Home </a>
  `)
})

server.listen(5000);