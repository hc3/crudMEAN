'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Molecula = {
	cpf:require('./../atoms/atom_cpf'),
    cnpj:require('./../atoms/atom_cnpj'),
    email:require('./../atoms/atom_email'),
    ip:require('./../atoms/atom_ip'),
    url:require('./../atoms/atom_url')
};

module.exports = new Schema(Molecula);
