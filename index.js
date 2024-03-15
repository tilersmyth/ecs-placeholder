const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send('ECS placeholder app')
});

app.get("/health", function (req, res) {
    res.status(200).json({status:"ok"})
});

app.listen(port, function () {
  console.log(`ECS placeholder app listening on ${port}!`);
});