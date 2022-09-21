const express = require('express');
const app = express();
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

// route
//app.use('/api/v1/product', productRoute);

module.exports = app;