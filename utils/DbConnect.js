const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_ATLAS)
    .then(() => console.log('Database Connection is successful'.green.bold));
};

module.exports = dbConnect;
