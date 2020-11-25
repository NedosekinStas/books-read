const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const exphbs = require('express-handlebars');
const book_routes = require('./routes/books');

const PORT = process.env.PORT || 3000;

// Object app
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// Render hbs chunks
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

// Add midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(book_routes);


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

start();
