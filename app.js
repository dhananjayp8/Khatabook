const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./hisaab`, function (err, files) {
    if (err) {
      return res.status(500).send(err);
    }
    res.render("index", { files: files });
  });
});
app.get("/create", (req, res) => {
  res.render("create");
});
app.listen(3030, () => {
  console.log("Server started");
});
