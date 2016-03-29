'use strict';

const callback = require('./../actions/action_callback_crud');

module.exports = (instancia) => {
	return () => {
		const msg = 'Salvo: ';
		instancia.save((err,data) => {
			callback(err,data,msg);
		});
	}
}