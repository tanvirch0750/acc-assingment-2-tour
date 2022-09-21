const express = require('express');
const {
  createTour,
  getTours,
  updateTourById,
} = require('../controllers/tour.controller');
const router = express.Router();

router.route('/tours').get(getTours).post(createTour);
router.route('/tour/:id').patch(updateTourById);

module.exports = router;
