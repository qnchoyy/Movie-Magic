const express = require('express');

const router = express.Router();

const homeConroller = require('./controllers/homeController');

router.use(homeConroller);

module.exports = router;