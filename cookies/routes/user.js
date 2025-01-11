const express = require("express");
const router = express.Router();

//Index-users
router.get("/", (req, res) => {
    res.send("Get for users");
});

//Show - users
router.get("/:id", (req, res) => {
    res.send("Get for users");
});

//Post - users
router.get("/", (req, res) => {
    res.send("Get for users");
});

//Delete -users
router.get("/:id", (req, res) => {
    res.send("Get for users");
});

module.exports = router;