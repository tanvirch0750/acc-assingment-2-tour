const {
  createTourService,
  getTourService,
  updateTourByIdService,
  deleteTourByIdService,
  getCheapestTourService,
  getTourByIdService,
  getTrendingTourService,
} = require('../services/tour.services');

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Tour inserted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tour inserted failed',
      error: error.message,
    });
  }
};

exports.getTours = async (req, res, next) => {
  try {
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    const filters = { ...req.query };
    excludeFields.forEach((field) => delete filters[field]);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
    }

    if (req.query.page) {
      const { page = 1, limit = 5 } = req.query;
      const skipValue = (parseInt(page) - 1) * parseInt(limit);
      queries.skip = skipValue;
      queries.limit = parseInt(limit);
    }

    const tours = await getTourService(filters, queries);

    res.status(200).json({
      status: 'success',
      message: 'Tours loaded successfully',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tours Data load failed',
      error: error.message,
    });
  }
};

exports.updateTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateTourByIdService(id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Product update successfull',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Product upadate failed',
      error: error.message,
    });
  }
};

exports.deleteTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTourByIdService(id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'failed',
        error: 'could not delete the tour',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tour delete failed',
      error: error.message,
    });
  }
};

exports.getCheapestTours = async (req, res, next) => {
  try {
    const tours = await getCheapestTourService();

    res.status(200).json({
      status: 'success',
      message: 'Tours loaded successfully',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tours Data load failed',
      error: error.message,
    });
  }
};

exports.getTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tour = await getTourByIdService(id);

    res.status(200).json({
      status: 'success',
      message: 'Tour loaded successfully',
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tour Data load failed',
      error: error.message,
    });
  }
};

exports.getTrendingTours = async (req, res, next) => {
  try {
    const tours = await getTrendingTourService();

    res.status(200).json({
      status: 'success',
      message: 'Tours loaded successfully',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'Tours Data load failed',
      error: error.message,
    });
  }
};
