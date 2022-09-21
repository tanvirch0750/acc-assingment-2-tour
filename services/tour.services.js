const Tour = require('../models/Tour.model');

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourService = async (filters, queries) => {
  const tours = await Tour.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const totalTours = await Tour.countDocuments(filters);
  const pageCount = Math.ceil(totalTours / queries.limit);

  const data = {
    totalTours,
    pageCount,
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

exports.deleteTourByIdService = async (id) => {
  const result = await Tour.deleteOne({ _id: id });
  return result;
};

exports.getCheapestTourService = async () => {
  const tours = await Tour.find().sort('price').limit(3);

  const data = {
    foundTours: tours.length,
    tours,
  };

  return data;
};
