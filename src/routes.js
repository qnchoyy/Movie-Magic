const express = require('express');

const router = express.Router();

const homeConroller = require('./controllers/homeController');
const movieController = require('./controllers/movieController')
const castController = require('./controllers/castController');

router.use(homeConroller);
router.use(movieController);
router.use('/cast', castController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;