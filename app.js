const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //process.exit();
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>Nodejs Server Response</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
