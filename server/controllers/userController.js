const express = require('express');
const passport = require('passport');
const DB = require('../db/connection');
const UserModel = DB.models.User;
const router = express.Router();

const usersController = {};

usersController.signup = function(req, res){
  passport.authenticate('local-signup', function (err, user){
    console.log('ERROR', err);
    console.log('USERRRR', user);
    res.json(user);
  })(req, res);
}

usersController.signin = function(req, res){
  console.log(req.body);
  passport.authenticate('local-login', function (err, user){
    // console.log('ERROR', err);
    // console.log('USERRRR', user);
    req.session.user = user;
    console.log('SUCCESS', req.session);
    res.json(user);
  })(req, res);
}

usersController.signout = function(req, res){
  console.log(req.body);
}

module.exports = usersController;
