const fs = require("fs");
let db = require("./db.json");
console.log(db);
db.posts.push({ id: 1, message: "New Post" });

fs.writeFile(
  "./db.json",
  JSON.stringify(db),
  {
    encoding: "utf-8",
  },
  () => {}
);
