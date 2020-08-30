const express = require("express");
const path = require("path");
const app = express();
const compression = require("compression");
app.use(compression());
app.use(express.static(path.join(__dirname, "client/build")));

let data = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" }
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/hay", (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server Stared At Port: ${PORT}`));
