const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");


router.post("/register", async(req, res) => {
    const body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

     /*await*/ user.save((error, userDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            })
        }
    });

    console.log(user.email)


    // const usuario = await User.findOne({ email: user.email });

    console.log(usuario)

    if (usuario === null) {
        return res.status(400).json({
            ok: false,
            error: {
                message: "Invalid (user) or password"
            }
        })
    }

    if (!bcrypt.compareSync(user.password, usuario.password)) {
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
        user: usuario,
        token
    });
    
});

module.exports = router