'use strict';

const mongoose = require('mongoose');
const Molecula = require('./../molecules/molecula_cliente');
const Organism = mongoose.model('cliente',Molecula);

const create = require('./../actions/action_create')(Organism);

const crud = {
	create
}

module.exports = crud;