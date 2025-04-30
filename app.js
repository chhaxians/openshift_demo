// Datei: app.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hallo von Port 8080\n');
});

server.listen(8080, () => {
  console.log('Server läuft auf http://localhost:8080');
});
