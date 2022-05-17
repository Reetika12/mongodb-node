var http = require("http");
var data = { name: "xyz", age: "29", email: "reetika45@gmail.com" };
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<input type='text'/>");
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3900);
