'use strict';

module.exports = (err,data,msg) => {
	if(err) return console.log('Erro: ',err);
	return console.log(msg,data);
}