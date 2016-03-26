'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecula = {
	email: require('./../atoms/atom_email')
	,celular: require('./../atoms/atom_celular')
	,fixo: require('./../atoms/atom_fixo')
}

module.exports = new Schema(Molecula);