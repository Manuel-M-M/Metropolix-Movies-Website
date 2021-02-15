const express = require("express");

const app = express();

app.use("/user", require("./users"));
app.use("/film", require("./films"));
app.use(require("./login"));
app.use(require("./register"));

module.exports = app