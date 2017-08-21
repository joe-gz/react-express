const express = require('express');
const DB = require('../db/connection');
const SampleModel = DB.models.Sample;
const router = express.Router();

const samplesController = {};

samplesController.getSamples = function(req,res){
  console.log('allSamples');
  console.log(req.session);
  SampleModel.findAll().then(samples => {
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
}

samplesController.getSample = function(req,res){
  console.log('single sample');
  SampleModel.find({
    where: {
      id: req.params.id
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
}

samplesController.createSample = function (req, res) {
  console.log(req.body);
  SampleModel.create({
    text: req.body.text,
    value: req.body.value
  }).then(sample => {
    res.json(sample)
  }).catch(err => {
    console.log('Could not create!', err);
  });
}

samplesController.deleteSample = function (req, res) {
  SampleModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(sample => {
    res.json({
      text: 'that sample has been destroyed'
    })
  }).catch(err => {
    console.log('Could not delete!', err);
  });
}

samplesController.updateSample = function (req, res) {
  console.log(req.body);
  SampleModel.update({
    text: req.body.text
  }, {
    where: {
      id: req.params.id
    }
  }).then(sample => {
    res.json({
      text: sample
    })
  }).catch(err => {
    console.log('Could not update!', err);
  });
}

module.exports = samplesController;
