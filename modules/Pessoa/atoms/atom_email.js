'use strict';

const Atom = {
	type:String
	,validate:require('./../hadrons/emailValidateMongoose')
	,required:true
}

module.exports = Atom;