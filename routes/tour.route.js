const express = require('express');
const { createTour, getTours } = require('../controllers/tour.controller');
const router = express.Router();

router.route('/tours').get(getTours).post(createTour);

module.exports = router;
