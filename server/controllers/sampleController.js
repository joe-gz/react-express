const express = require('express');
const DB = require("../db/connection");
const SampleModel = DB.models.Sample;
const router = express.Router();

const samplesController = {};

samplesController.getSamples = function(req,res){
  console.log('allSamples');
  SampleModel.findAll().then(samples => {
    console.log(samples)
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

module.exports = samplesController;
