let https = require('https');
let url = require('url');
let fs = require('fs');

const Pool = require('pg').Pool;

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  let q = url.parse(req.url, true);
  let filename = "/." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Page not found');
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    res.write(data);
    return res.end();
  });
}).listen(8000);