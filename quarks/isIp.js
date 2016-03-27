'use strict';

module.exports = (value) => {
	const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
	const isEmpty = require('./isEmpty')(value);
	if(isEmpty) return false;

	const isString = require('./isString')(value);
	if(!isString) return false;

	return regex.test(value);
}