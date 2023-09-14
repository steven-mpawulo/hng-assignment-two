const express = require('express');
const addNewPerson = require('../controllers/addNewPerson');
const fetchPerson = require('../controllers/fetchPerson');
const updatePerson = require('../controllers/updatePerson');

const personRoute = express.Router();

personRoute.post('/', addNewPerson);
personRoute.get('/:id', fetchPerson);
personRoute.patch('/:id', updatePerson);

module.exports = personRoute;