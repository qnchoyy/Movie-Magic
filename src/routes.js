const express = require('express');

const router = express.Router();

const homeConroller = require('./controllers/homeController');
const movieController = require('./controllers/movieController')

router.use(homeConroller);
router.use(movieController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;