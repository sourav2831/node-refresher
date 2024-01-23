const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>Nodejs Server Response</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
