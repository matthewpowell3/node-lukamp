const express = require('express');
const app = express();
const ytdl = require('ytdl-core');

// Serve HTML page
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Handle video download request
app.get('/download', function (req, res) {
  var url = req.query.url;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(url, { format: 'mp4' }).pipe(res);
});

// Start server
app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
