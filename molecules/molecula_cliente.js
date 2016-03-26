'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const endereco = require('./molecula_endereco');
const contato = require('./molecula_contato');

const Molecula = {
	nome:require('./../atoms/atom_nome')
	,cpf:require('./../atoms/atom_cpf')
	,contato:[contato]
	,endereco:[endereco]
}

module.exports = new Schema(Molecula);