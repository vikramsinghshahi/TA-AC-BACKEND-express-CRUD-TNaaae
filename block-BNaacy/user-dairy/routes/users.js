const { render } = require('ejs');
var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/', (req, res) => {
  res.render('users.ejs');
});

router.get('/new', (req, res) => {
  res.render('userFrom.ejs');
});

router.get('/:id', (req, res) => {
  res.render('singleUser.ejs');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/users');
  });
});

module.exports = router;
