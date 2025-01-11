const express = require("express");
const router = express.Router();

//Index-posts
router.get("/", (req, res) => {
    res.send("Get for posts");
});

//Show - posts
router.get("/:id", (req, res) => {
    res.send("Get for posts");
});

//Post - posts
router.get("/", (req, res) => {
    res.send("Get for posts");
});

//Delete -posts
router.get("/:id", (req, res) => {
    res.send("Get for posts");
});

module.exports = router;