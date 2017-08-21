var express = require('express');
var router = express.Router();

var sampleController = require('../controllers/sampleController');
var userController = require('../controllers/userController');

// samples:
router.get('/samples', sampleController.getSamples);
router.get('/sample/:id', sampleController.getSample);
router.post('/create', sampleController.createSample);
router.delete('/delete/:id', sampleController.deleteSample);
router.put('/update/:id', sampleController.updateSample);

// users:
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/signout', userController.signout);

module.exports = router;
