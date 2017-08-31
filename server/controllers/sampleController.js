const express = require('express');
const DB = require('../db/connection');
const SampleModel = DB.models.Sample;
const router = express.Router();
const Authenticate = require('../utils/authentication.utils.js');

const samplesController = {};

samplesController.getSamples = function(req, res){
  console.log('PARAMSSS', req.params);
  console.log('all smaples for ' + req.params);
  console.log('SAMPLE USER', req.session.user);
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    SampleModel.findAll({
      where: {
        userId: userId
      }
    }).then(samples => {
      if (samples.length === 0) {
        const emptyJSON = {
          text: 'Start creating some stuff!'
        };
        res.json(emptyJSON)
      } else {
        res.json(samples)
      }
    }).catch(err => {
      console.log(err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

samplesController.getSample = function(req, res){
  console.log('single sample');
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    SampleModel.find({
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(sample => {
      console.log(sample)
      if (!sample) {
        const emptyJSON = {
          text: 'Start creating some stuff!'
        };
        res.json(emptyJSON)
      } else {
        res.json(sample)
      }
    }).catch(err => {
      console.log(err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

samplesController.createSample = function (req, res) {
  console.log(req.body);
  console.log(req.session);
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    SampleModel.create({
      text: req.body.data.text,
      value: req.body.data.value,
      userId: req.session.user.id
    }).then(sample => {
      res.json(sample)
    }).catch(err => {
      console.log('Could not create!', err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

samplesController.deleteSample = function (req, res) {
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    SampleModel.destroy({
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(sample => {
      res.json({
        text: 'that sample has been destroyed'
      })
    }).catch(err => {
      console.log('Could not delete!', err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

samplesController.updateSample = function (req, res) {
  console.log('REQ BODY 85', req.body);
  console.log('REQ BODY TEXT 86', req.body.data.text);
  const userId = req.params.userId;
  const authenticated = Authenticate.authenticatedUser(req, userId)
  if (authenticated) {
    SampleModel.update({
      text: req.body.data.text
    }, {
      where: {
        id: req.params.id,
        userId: userId
      }
    }).then(sample => {
      console.log('RESPONSE 94', sample);
      res.json({
        text: sample
      })
    }).catch(err => {
      console.log('Could not update!', err);
    });
  } else {
    res.json({error: 'Not logged in!'});
  }
}

samplesController.getUserInfo = function (req, res) {
  if (req.session.user) {
    SampleModel.findAll({
      where: {
        userId: req.session.user.id
      }
    }).then(samples => {
      const jsonResponse = {
        user: req.session.user,
        samples: samples
      }
      res.json(jsonResponse);
    }).catch(err => {
      res.json(err)
    });
  } else {
    res.json(false);
  }
}

module.exports = samplesController;
