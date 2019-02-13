const express = require('express');
const router = express.Router();

const Tech = require('../models/Tech');

router.get('/', async (req, res) => {
    res.json(await Tech.find());
});

router.post('/', async (req, res) => {
    const tech = new Tech(req.body);
    await tech.save();
    res.json({state: 'success'});
});

router.get('/:id', async (req, res) => {
    res.json(await Tech.findById(req.params.id));
});

router.put('/:id', async (req, res) => {
    await Tech.findByIdAndUpdate(req.params.id, req.body);
    res.json({state: 'updated'});
});

router.delete('/:id', async (req, res) => {
    await Tech.findByIdAndRemove(req.params.id);
    res.json({state: 'deleted'});
});

module.exports = router;