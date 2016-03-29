'use strict';

const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/banco-teste';

mongoose.connect(dbURI);

mongoose.connection.on('connected',() => {
    console.log('Mongoose conectado em: '+dbURI);
});

mongoose.connection.on('error',(err) => {
    console.log('erro na conexão :'+err);
});

mongoose.connection.on('disconnected',() => {
    console.log('disconectado');
});

mongoose.connection.on('open',() => {
    console.log('conexão está aberta');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose foi disconectado ');
        process.exit(0);
    });
});
