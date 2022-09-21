const {
  createTourService,
  getTourService,
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
    const tours = await getTourService();

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
