'use strict';

const Atom = {
	type:String,
    validate:require('./../hadrons/ipValidateMongoose'),
    required:true
};

module.exports = Atom;