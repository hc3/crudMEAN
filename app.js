'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/crudMEAN';
mongoose.connect(dbURI);

const medico = require('./organism/organism_medico');
const cliente = require('./organism/organism_cliente');
const consulta = require('./organism/organism_consulta');


const query = {}
const obj = medico.findOne();
console.log(obj);






















/**


const endereco = {
	rua:'Rua das margaridas'
	,bairro:'Centro'
	,cep:'48970000'
	,cidade:'Senhor do Bonfim'
	,uf:'Bahia'
	,numero:'20'
}

const contato = {
	email: 'contato@example.com'
	,celular: '99102291'
	,fixo: '34519980'
}

const cli = {
	nome:'Vanessa Bonfim'
	,cpf:'0506697784'
	,contato:contato
	,endereco:endereco
}



**/