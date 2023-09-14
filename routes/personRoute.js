const express = require('express');
const addNewPerson = require('../controllers/addNewPerson');
const fetchPerson = require('../controllers/fetchPerson');
const updatePerson = require('../controllers/updatePerson');
const deletePerson = require('../controllers/deletePerson');

const personRoute = express.Router();

personRoute.post('/', addNewPerson);
personRoute.get('/:id', fetchPerson);
personRoute.patch('/:id', updatePerson);
personRoute.delete('/:id', deletePerson);

module.exports = personRoute;