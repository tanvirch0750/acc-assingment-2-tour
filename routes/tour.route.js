const express = require('express');
const {
  createTour,
  getTours,
  updateTourById,
  deleteTourById,
  getCheapestTours,
  getTourById,
  getTrendingTours,
} = require('../controllers/tour.controller');
const router = express.Router();

router.route('/tours').get(getTours).post(createTour);
router.route('/tour/cheapest').get(getCheapestTours);
router.route('/tour/trending').get(getTrendingTours);
router.route('/tours/:id').get(getTourById);
router.route('/tour/:id').patch(updateTourById).delete(deleteTourById);

module.exports = router;
