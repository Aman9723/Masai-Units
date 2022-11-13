// 1. import
const express = require("express");
const fs = require("fs");
const db = require("./db.json");

// 2. create
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/posts", (req, res) => {
  res.send(db.posts);
});

app.get("/posts/:id", (req, res) => {
  let id = req.params.id;
  let numId = +id;
  let post = db.posts.find((post) => post.id === numId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send(`Post with id: ${id} not found`);
  }
});

app.post("/posts", (req, res) => {
  db.posts.push({ id: Date.now(), message: "hello world" });
  fs.writeFile("db.json", JSON.stringify(db), { encoding: "utf-8" }, () => {
    res.status(400).set("content-type", "text/html").send(db.posts);
  });
});

app.put("/posts", (req, res) => {
  res.send("This is a put api");
});

app.patch("/posts", (req, res) => {
  res.send("This is a patch api");
});

app.delete("/posts", (req, res) => {
  res.send("This is a delete api");
});

// 3. listen
app.listen(8080, () => {
  console.log("Listening on http://localhost:8080");
});
