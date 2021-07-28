const express = require('express');

const router = express.Router();

const Users = require('./users');

router.get('/', (req, res) => {
   res.render('home', {
        users: Users.users,
        pageTitle: 'Add Users',
        hasUsers: Users.length > 0
    });
});

// router.post('/',(req, res) => {
//     res.render('home', {
//         pageTitle: 'Home'});
// });

module.exports = router;