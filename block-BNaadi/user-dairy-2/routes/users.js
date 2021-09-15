var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, users) => {
    console.log(users);
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;

  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser.ejs', { user });
  });
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id;
  console.log(req.body);
  User.findByIdAndUpdate(id, req.body, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;
