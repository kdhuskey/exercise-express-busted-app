const express = require('express');
const router = express.Router();
// const data = require('../data')

const rangersModel = require('../model/db');
// const partials = {
//     body: 'partials/home'
// }
router.get('/', (req, res) => {
    res.render('template', {
        partials: {
            body: 'partials/ranger-list',
        },
        locals: {
            title: 'List of Power Rangers',
            data: rangersModel
        },
    });
});

router.get('/:slug', (req, res) => {
    const { slug } = req.params;
    const ranger = rangersModel.find((ranger => ranger.slug === slug))
    if (ranger) {
        res.render('template', {
            partials: {
                body: 'partials/ranger-details',
            },
            locals: {
                title: `Power Ranger: ${ranger.name}`,
                ranger
            },
        });
    } else {
        res.status(404).send(`No Ranger found that matches slug, ${slug}`);
    }

});

module.exports = router
