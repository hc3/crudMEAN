'use strict';

const callback = require('./action_callback_crud');

module.exports = (Organism,req,res) => {
	const msg = 'Criou: ';
	var query = '';
	
	req.on('data',(data)=> {
	  queryData += data;
	})

	req.end('end',() => {
		const query = querystring.parse(queryData);
		Organism.create(query,(err,data) => callback(err,data,msg))
	});
}

