const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const R = require("ramda");

const Film = require("../models/film");

router.get("/", () => {
    res.json("GET local user");
});

router.post("/", (req, res) => {
    const body = req.body;

    const film = new Film({
        title: body.title,
        director: body.director,
        date_realease: body.date_realease,
        country: body.country,
        cast: body.cast,
        original_lenguage: body.original_lenguage,
        category: body.category,
        running_time: body.running_time,
        overview: body.overview,
        vote_count: body.vote_count,
        vote_average: body.vote_average
        
    });

    film.save((error, filmDB) => {
        if (error) {
            res.status(400).json({
                ok: false,
                error
            })
        } else {
            res.json({
                ok: true,
                film: filmDB
            });
        }
    });

});

router.put("/:id", (req, res) => {

    const id = req.params.id

    res.json({
        id
    });
})

router.delete("/", (req, res) => {
    res.json("DELETE film");
})

module.exports = router