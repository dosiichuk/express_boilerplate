const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/user', (req, res, next) => {
  res.render('login');
  //   next();
});

app.get(['/', '/home'], (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { name: req.params.name, layout: 'dark' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.use((req, res) => {
  res.status(404).render('404.hbs');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
