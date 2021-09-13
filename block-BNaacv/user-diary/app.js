var express = require('express');

var mongoose = require('mongoose');

var usersRouter = require('./routes/users');

var path = require('path');

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

app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(3000, () => {
  console.log('server is listening at 3k');
});
