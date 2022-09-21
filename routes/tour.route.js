const express = require('express');
const {
  createTour,
  getTours,
  updateTourById,
  deleteTourById,
  getCheapestTours,
} = require('../controllers/tour.controller');
const router = express.Router();

router.route('/tours').get(getTours).post(createTour);
router.route('/tour/cheapest').get(getCheapestTours);
router.route('/tour/:id').patch(updateTourById).delete(deleteTourById);

module.exports = router;
