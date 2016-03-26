'use strict';

const callback = require('./action_callback_crud');

module.exports = (Organism) => {
	const msg = 'Executando o findOne: ';
	return(obj) => {
		Organism.findOne(obj,(err,data) => callback(err,data,msg));
	}

}