const http = require('http');

const server = http.createServer((req, res) => {
  const obj = {
    name: "Monkey",
    server: "Nodejs",
    app: "Bulbee.io",
  };

  const jsonResponse = JSON.stringify(obj);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(jsonResponse);
});

server.listen(3000, () => {
  console.log('Сервер запущено на порту 3000');
});
