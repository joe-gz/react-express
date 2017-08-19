const express = require('express');
const DB = require("../db/connection");
const UserModel = DB.models.User;
const router = express.Router();

const usersController = {};

usersController.signup = function(req,res){}

usersController.signin = function(req,res){}
