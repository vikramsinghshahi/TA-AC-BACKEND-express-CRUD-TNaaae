var express = require('express');

var router = express.Router();

router.get('/new', (req, res) => {
  //   res.send('welocme');
  res.render('userForm.ejs');
});

router.get('/:id', (req, res) => {
  res.render('singleUser.ejs');
});

router.get('/', (req, res) => {
  res.render('users.ejs');
});

router.post('/', (req, res) => {
  //capture the form data
});

router.get('/:id/edit', (req, res) => {
  //edit form
});

router.delete('/:id', (req, res) => {
  res.send('user deleted');
});

module.exports = router;
