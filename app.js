const http = require("http");

const server = http.createServer((res, req) => {
  console.log(req);
  process.exit();
});

server.listen(3000);
