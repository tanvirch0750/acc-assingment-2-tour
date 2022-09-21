const Tour = require('../models/Tour.model');

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async () => {
  const tours = await Tour.find({});

  const data = {
    foundTours: tours.length,
    tours,
  };

  return data;
};

exports.updateTourByIdService = async (id, data) => {
  const tour = await Tour.findById(id);
  const result = await tour.set(data).save();
  return result;
};
