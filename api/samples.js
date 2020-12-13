const express = require("express");
const router = express.Router({ mergeParams: true });
const _ = require('lodash');
const db = require('../models/index.js');

router.use(async function (req, res, next) {
    req.card = await db.card.findOne({where: {id: req.params.cardId}});
    next();
});

router.post('/', async function (req, res) {
    let touches = _.map(req.body.touches, (t) => {return {x: t.x, y: t.y, r: t.r}});
    let sample = await req.card.createSample();
    
    let sampleTouches = await db.touch.bulkCreate(touches);
    await sample.addTouches(sampleTouches);

    res.send(sample);
});

router.get('/', async function (req, res) {
    let samples = await req.card.getSamples({include: [db.touch]});
    res.send(samples);
});

router.delete('/:sampleId', async function (req, res) {
    let samples = await req.card.getSamples({
        where: { id: req.params.sampleId }
    });
    let sample = samples[0];
    await sample.destroy();
    res.send(sample);
});

router.use('/:sampleId/touches', require('./touches.js'));

module.exports = router;