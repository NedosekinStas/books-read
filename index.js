const express = require('express');

const PORT = process.env.PORT || 3000;

// Object app
const app = express();

app.listen(PORT, () => {
    console.log('server started')
})