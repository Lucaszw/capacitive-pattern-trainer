const express = require("express");
const router = express.Router();
const db = require('../models/index.js');

router.post('/', function (req, res) {
    res.send();
});

router.get('/', function (req, res) {
    res.send();
});

router.get('/:touchId', function (req, res) {
    res.send();
});

module.exports = router;