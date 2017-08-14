var express = require('express');
var router = express.Router();

var sampleController = require('../controllers/sampleController');

// Workouts:
router.get('/samples', sampleController.getSamples);
router.get('/sample/:id', sampleController.getSample);
router.post('/create', sampleController.createSample);
router.delete('/delete/:id', sampleController.deleteSample);
router.put('/update/:id', sampleController.updateSample);

module.exports = router;
