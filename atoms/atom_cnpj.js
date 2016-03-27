'use strict';

const Atom = {
	type:String
	,validate:require('./../hadrons/cnpjValidateMongoose')
	,required:true
}

module.exports = Atom;