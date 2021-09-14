var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var usersRouter = require('./routes/users');

mongoose.connect('mongodb://localhost/user-dairy', (err) => {
  console.log(err ? err : console.log('mongoose is connected'));
});

var app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/users', usersRouter);

//error handle

app.use((req, res, next) => {
  res.status(404).send('page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
