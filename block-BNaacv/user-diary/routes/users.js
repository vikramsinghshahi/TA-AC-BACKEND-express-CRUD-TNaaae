var express = require('express');

var router = express.Router();

router.get('/new', (req, res) => {
  //   res.send('welocme');
  res.render('userForm.ejs');
});

module.exports = router;
