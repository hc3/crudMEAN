'use strict';

const mongoose = require('mongoose');
const Molecula = require('./../molecules/molecula_pessoa');
const Organism = mongoose.model('pessoa',Molecula);

const create = require('./../actions/action_create')(Organism,req,res);

const crud = {
	create
}

module.exports = crud;