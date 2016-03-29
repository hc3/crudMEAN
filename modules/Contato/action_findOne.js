'use strict';

const callback = require('./action_callback_crud');

module.exports = (Organism) => {
	const msg = 'Executando o findOne: ';
	return(query) => {
		Organism.findOne(query,(err,data) => callback(err,data,msg));
	}

}