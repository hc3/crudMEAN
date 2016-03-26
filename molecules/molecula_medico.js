'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const endereco = require('./molecula_endereco');
const contato = require('./molecula_contato');

const Molecula = {
	name: require('./../atoms/atom_nome')
	,cgc: require('./../atoms/atom_cgc')
	,especialidade: require('./../atoms/atom_especialidade')
	,endereco:[endereco]
	,contato:[contato]
}

console.log(Molecula);
module.exports = new Schema(Molecula);
