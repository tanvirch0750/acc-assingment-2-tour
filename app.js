const express = require('express');
const app = express();
const cors = require('cors');
const tourRoute = require('./routes/tour.route.js');

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Route is working! YaY!');
});

// route
app.use('/api/v1', tourRoute);

module.exports = app;
