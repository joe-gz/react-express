var express = require('express');
var router = express.Router();

var sampleController = require('../controllers/sampleController');
var userController = require('../controllers/userController');

// samples:
router.get('/samples/:userId', sampleController.getSamples);
router.get('/sample/:id', sampleController.getSample);
router.post('/create/:userId', sampleController.createSample);
router.delete('/delete/:id/:userId', sampleController.deleteSample);
router.put('/update/:id/:userId', sampleController.updateSample);

// users:
router.get('/get-user', userController.getUserInfo);
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/signout', userController.signout);

module.exports = router;
