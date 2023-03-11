const http = require('http');
const fs = require('fs');
const ytdl = require('youtube-dl');

const server = http.createServer((req, res) => {
  // Serve the HTML file when the client requests the root URL
  if (req.url === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
