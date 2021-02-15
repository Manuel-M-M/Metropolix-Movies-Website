const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const valiCategories = {
    values: ["DRAMA", "COMEDY", "THRILLER", "TERROR", "SCIFI", "ROMANTIC", "HISTORICAL", "CRIME", "CULT MOVIE",
            "CLASSIC MOVIE", "BLACK COMEDY"],
    message: "{VALUE} is not a valid category"
}

const filmSchema = new Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        unique: true
    },
    director: {
        type: String,
    },
    cast: {
        type: String
    },
    date_release: {
        type: String
    },
    country: {
        type: String
    },
    category: {
        type: String,
        enum: valiCategories
    },
    running_time: {
        type: String
    },
    overview: {
        type: String
    },
    vote_count: {
        type: Number
    },
    vote_average: {
        type: Number
    },
    img: {
        type: String
    },
    video: {
        type: String
    },
});

filmSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("Film", filmSchema);