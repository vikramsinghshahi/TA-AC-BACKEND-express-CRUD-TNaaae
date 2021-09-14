var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    console.log(err, users);
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next();
    res.render('singleUser.ejs', { user: user });
  });
});

router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

router.post('/', (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) return res.redirect('/users/new');
    res.redirect('/users');
  });
});

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUser.ejs', { user });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;

  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});

module.exports = router;