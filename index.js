const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const in_routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

// Object app
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(in_routes)


async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/books_read', {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
        console.log('server started')
    })
  } catch (error) {
      console.log(error)
  }
}

start()