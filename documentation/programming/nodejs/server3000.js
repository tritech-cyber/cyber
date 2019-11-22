var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

// Location of your favicon in the filesystem.
var FAVICON = path.join(__dirname, 'public', 'favicon.ico');

var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;

  // If this request is asking for our favicon, respond with it.
  if (req.method === 'GET' && pathname === '/favicon.ico') {
    // MIME type of your favicon.
    //
    // .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
    // .png = 'image/png'
    // .jpg = 'image/jpeg'
    // .jpeg = 'image/jpeg'
    res.setHeader('Content-Type', 'image/x-icon');

    // Serve your favicon and finish response.
    //
    // You don't need to call `.end()` yourself because
    // `pipe` will do it automatically.
    fs.createReadStream(FAVICON).pipe(res);

    return;
  }

  // This request was not asking for our favicon,
  // so you can handle it like any other request.

  res.end();
});

// Listen on port 3000.
//
// This line is not relevant to this answer, but
// it would feel incomplete otherwise.
server.listen(3000);
