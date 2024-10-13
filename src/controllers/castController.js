const router = require('express').Router();

const castServie = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('cast/create');
});

router.post('/create', async (req, res) => {
    const castData = req.body;

    await castServie.create(castData);

    res.redirect('/');
});

module.exports = router;