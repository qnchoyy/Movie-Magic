const express = require('express');

const router = express.Router();

const homeConroller = require('./controllers/homeController');
const movieController = require('./controllers/movieController')

router.use(homeConroller);
router.use(movieController);

module.exports = router;