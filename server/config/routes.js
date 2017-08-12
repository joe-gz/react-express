var express = require('express');
var router = express.Router();

var sampleController = require('../controllers/sampleController');

// Workouts:
router.get('/samples', sampleController.getSamples)

module.exports = router;
