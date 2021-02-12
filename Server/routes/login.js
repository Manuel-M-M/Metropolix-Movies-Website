const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


router.post("/login", (req, res) => {
    const body = req.body;

    User.findOne({ email: body.email }, (error, userDB)=> {

        if (error) {
            return res.status(500).json({
                ok: false,
                error
            })
        }

        if (userDB === null) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: "Invalid (user) or password"
                }
            })
        }

        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                error: {
                    mesasge: "Invalid user or (password)"
                }
            });
        }

        const token = jwt.sign({
            user: userDB
        },
            process.env.SEED, { expiresIn: process.env.TOKEN_EXPIRY }
        )

        res.json({
            ok: true,
            user: userDB,
            token
        });
    });
});

module.exports = router