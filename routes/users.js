const express = require('express');

const router = express.Router();

const users = [];


router.get('/users', (req, res) => {
    res.render('users', {
        pageTitle: 'Users',
        users: users
    });
});

router.post('/users', (req, res) => {
    const user = req.body.username;
    users.push(user);
    console.log(users);
    res.redirect('/users');
});

// router.post('/',(req, res) => {
//     res.render('home', {
//         pageTitle: 'Home'});
// });

module.exports = {
    routes: router,
    users: users
} 
