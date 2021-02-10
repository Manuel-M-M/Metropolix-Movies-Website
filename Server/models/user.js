const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const valiRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    // img: {
    //     type: String,
    // },
    role: {
        type: String,
        default: "USER",
        enum: valiRoles
    },
    pending_movies: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Movie'
        }
    ],
    seen_movies: {
        type: String
    },
    favourite_movies: {
        type: String
    },
    critics: {
        type: String
    },
    state: {
        type: Boolean,
        default: true
    }, 
    google: {
        type: Boolean,
        default: false
    } 
});

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
}

userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"});

module.exports = mongoose.model("User", userSchema);