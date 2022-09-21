const app = require('./app');
const dbConnect = require('./utils/DbConnect');
const dotenv = require('dotenv').config();
const colors = require('colors');

// database connection
dbConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
