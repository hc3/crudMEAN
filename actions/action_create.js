'use strict';

const callback = require('./action_callback_crud');

module.exports = (Organism) => {
	const msg = 'Criou: ';
	return(obj) => {
		Organism.create(obj,(err,data) => callback(err,data,msg));
	}

}