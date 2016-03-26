'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecule = {
	rua: require('./../atoms/atom_rua')
	,bairro: require('./../atoms/atom_bairro')
	,cep: require('./../atoms/atom_cep')
	,cidade: require('./../atoms/atom_cidade')
	,uf: require('./../atoms/atom_uf')
	,numero: require('./../atoms/atom_numero')
}
console.log(Molecule);
module.exports = new Schema(Molecule);