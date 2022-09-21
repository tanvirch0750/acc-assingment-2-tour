const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal then 40 characters'],
    minlength: [10, 'A tour name must have more or equal then 10 characters'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a durations'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either easy, medium, difficult',
    },
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  descripton: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  images: String,
  viewCount: {
    type: Number,
    default: 0,
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
