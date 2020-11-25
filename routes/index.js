const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
      title: 'Books List',
      isIndex: true
  });
});

router.get('/create', (req,res) => {
  res.render('create', {
      title: 'Create Book',
      isCreate: true
  });
});

module.exports = router;
