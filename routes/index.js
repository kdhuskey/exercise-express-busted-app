'use strict';
const express = require('express');
const router = express.Router();
// const data = require('../data')

router.get('/', (req, res) => {
    res.render('template', {
        partials: {
            body: "partials/home"
        },
        locals: {
            title: "Home Page"
        }
    })
})

module.exports = router;