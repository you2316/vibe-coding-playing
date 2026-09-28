const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const pagePath = path.join(__dirname, 'index.html');
const listenPort = Number(process.argv[2] || 4173);

http.createServer((request, response) => {
  if (request.url !== '/' && request.url !== '/index.html') {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  fs.createReadStream(pagePath).pipe(response);
}).listen(listenPort, '0.0.0.0', () => {
  process.stdout.write(`武夷山旅行手帖已运行：http://127.0.0.1:${listenPort}\n`);
});

