const express = require("express");
const router = express.Router();
const db = require('../models/index.js');
const _ = require('lodash');

router.post('/', async function (req, res) {
    let body = _.pick(req.body, ['name', 'numberOfTouches', 'allowedVariance']);
    let card = await db.card.create(body);
    res.send(card);
});

router.get('/', async function (req, res) {
    let cards = await db.card.findAll({
        include: [{
            model: db.sample, 
            include: [{model: db.touch}]
        }]
    });
    res.send(cards);
});

router.patch('/:cardId', async function (req, res) {
    let updates = _.pick(req.body, ['name, numberOfTouches', 'allowedVariance']);
    let card = await db.card.findOne({where: {id: req.params.cardId}});
    await card.update(updates);
    res.send(card);
});

router.delete('/:cardId', async function (req, res) {
    console.log("Deleting...", req.params.cardId);
    let card = await db.card.findOne({where: {id: req.params.cardId}});
    await card.destroy();
    res.send(card);
});

router.get('/:cardId', async function (req, res) {
    let card = await db.card.findOne({
        where: {id: req.params.cardId},
        include: [{
            model: db.sample,
            include: [{model: db.touch}]
        }]
    });
    res.send(card);
});

router.use('/:cardId/samples', require('./samples.js'));

module.exports = router;