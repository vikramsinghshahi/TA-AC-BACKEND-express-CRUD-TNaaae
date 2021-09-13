var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', (err) => {
  console.log(err ? err : console.log('mongoose is connected'));
});

var app = express();

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
