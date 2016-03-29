'use strict';

require('./db/config');
const http = require('http');


const pessoa = require('./organism/organism_pessoa');
const cliente = require('./organism/organism_cliente');
const medico = require('./organism/organism_medico');
const consulta = require('./organism/organism_medico');


http.createServer((req,res) => {
  let msg = '';
  switch(req.url) {
    case '/pessoa/create':
      pessoa.create(req,res);
      break;
    case '/pessoa/retrieve':
      msg = 'PESSOA CADASTRADA';
      pessoa.retrieve(req,res);
      break;
    case '/pessoa/update':
      msg = 'PESSOA CADASTRADA';
      pessoa.update(req,res);
      break;
    case '/pessoa/remove':
      msg = 'PESSOA CADASTRADA';
      pessoa.delete(req,res);
      break;
    default:
      msg = 'ROTA NÃO ENCONTRADA';
      break;
  }
  res.end(msg);
}).listen(3000,() => {
  console.log('Servidor rodando em localhost:3000');
});






















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