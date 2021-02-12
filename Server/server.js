const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./config/config");
const cors = require("cors");


const app = express();

//
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Global routes config
app.use(require("./routes/index"))

// MONGOOSE connection
mongoose.connect("mongodb://localhost:27017/Metropolixdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Connection to DB error", error);
});

db.once("open", () => {
    console.log("Connection to DB succesfull");
});


app.listen(process.env.PORT, () => {
    console.log("Listening on port: ", process.env.PORT);
})