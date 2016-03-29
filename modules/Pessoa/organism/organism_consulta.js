'use strict';

const mongoose = require('mongoose');
const Molecula = require('./../molecules/molecula_consulta');
const Organism = mongoose.model('consulta',Molecula);

const create = require('./../actions/action_create')(Organism);
const findOne = require('./../actions/action_findOne')(Organism);

const crud = {
	create
	,findOne
}

module.exports = crud;