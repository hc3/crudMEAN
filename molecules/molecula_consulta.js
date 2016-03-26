
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = require('./molecula_cliente');
const medico = require('./molecula_medico');

const Molecula = {
	valor: require('./../atoms/atom_nome')
	,status:require('./../atoms/atom_enum_status')
	,condPag:require('./../atoms/atom_condPag')
	,dtConsulta: require('./../atoms/atom_date')
	,dtRetorno: require('./../atoms/atom_date')
	,cliente:[cliente]
	,medico:[medico]
}

module.exports = new Schema(Molecula);