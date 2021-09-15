var express = require('express');
var mongoose = require('mongoose');

var path = require('path');

var usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/user-diary-3', (err) => {
  console.log(err ? err : console.log('mongoose is connected'));
});

var app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/users', usersRouter);

//handle error

app.use((req, res, next) => {
  res.status(404).send('page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('server is listening at 4k');
});
