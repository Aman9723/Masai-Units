// 1 import
const http = require("http");
const db = require("./db.json");
const fs = require("fs");

// 2 create
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      res.write("<h1>Hello, You are on homepage</h1>");
    } else if (req.url === "/login") {
      res.write("Hello, You are on loginpage");
    } else if (req.url === "/products") {
      res.write("Hello, you are one products page");
    }
    res.write("unknown page");
  } else if (req.method === "POST") {
    if (req.url === "/products") {
      //   update products
      db.products.push({ id: 1, content: "new product" });
      res.write(JSON.stringify(db.products));
    } else if (req.url === "/users") {
      //   update users
      db.users.push({ id: 1, name: "name1" });
      res.write(JSON.stringify(db.users));
    }
    fs.writeFileSync("./db.json", JSON.stringify(db));
  }
  res.end();
});

// 3 listen/start
server.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
