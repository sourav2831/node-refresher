const http = require("http");
const fs = require("fs");

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
  if (req.url === "/message") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>Nodejs Server Response</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
