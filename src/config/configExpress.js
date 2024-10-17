const express = require('express');
const path = require('path');
const cookierParser = require('cookie-parser');

const { auth } = require('../middlewares/authMiddleware');

function configExpress(app) {
    app.use(express.static(path.resolve('src/public')));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookierParser());
    app.use(auth);

    return app;
}

module.exports = configExpress;