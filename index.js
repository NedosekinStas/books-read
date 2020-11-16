const express = require('express');
const mongoose = require('mongoose');
const db = require('./db');

const PORT = process.env.PORT || 3000;

// Object app
const app = express();

async function start() {
  try {
    // await mongoose.connect(url, {
    //   useNewUrlParser: true, 
    //   useUnifiedTopology: true
    // })
    app.listen(PORT, () => {
        console.log('server started')
    })
  } catch (error) {
      console.log(error)
  }
}

start()