'use strict';

const mongoose = require('mongoose');
const Molecule = require('./../molecules/molecula_medico');
const Organism =  mongoose.model('medico',Molecule);

const create = require('./../actions/action_create')(Organism);

const crud = {
	create
} 

module.exports = crud;
