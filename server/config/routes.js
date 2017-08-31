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
router.get('/get-user', sampleController.getUserInfo);

// users:
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.get('/signout', userController.signout);

module.exports = router;
