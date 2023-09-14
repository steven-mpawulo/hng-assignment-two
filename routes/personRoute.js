const express = require('express');
const addNewPerson = require('../controllers/addNewPerson');

const personRoute = express.Router();

personRoute.post('/', addNewPerson);

module.exports = personRoute;