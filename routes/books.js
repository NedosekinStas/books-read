const { Router } = require('express');
const Book = require('../models/Book');
const router = Router();

router.get('/', async (req, res) => {
  const books = await Book.find({}).lean(); 

  res.render('index', {
      title: 'Author List',
      isIndex: true,
      books
  });
});

router.get('/create', (req,res) => {
  res.render('create', {
      title: 'Create Author',
      isCreate: true
  });
});

router.post('/create', async (req, res) => {
  // Create model
  const book = new Book({
    title: req.body.author
  });
  // Save model
  await book.save();
  res.redirect('/');
});

router.post('/complete', async (req, res) => {
  const book = await Book.findById(req.body.id);

  book.completed = !!req.body.completed;
  await book.save();

  res.redirect('/');
});

module.exports = router;
