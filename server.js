const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('index.html').pipe(res)
});

PORT = 3030;

server.listen(PORT,()=>{
  `Server ${PORT} portund çalışıyor`
});


