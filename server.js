const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home PAGE!',
    someText: 'Welcome!!'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'This is pageTitle!'
  });
  //res.send('What about you???')
});

app.get('/bad', (req, res) => {
  res.send({
    errorMsg: 'Error came along!'
  })
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
