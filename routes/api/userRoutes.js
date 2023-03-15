const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../contolers/userController');

//get a 