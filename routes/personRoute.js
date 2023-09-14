const express = require('express');
const addNewPerson = require('../controllers/addNewPerson');
const fetchPerson = require('../controllers/fetchPerson');

const personRoute = express.Router();

personRoute.post('/', addNewPerson);
personRoute.get('/:id', fetchPerson);

module.exports = personRoute;