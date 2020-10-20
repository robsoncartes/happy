const express = require('express');
const path = require('path');
const server = express();
const pages = require('./pages.js')

server
    // utilizando arquivos estáticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // criar uma rota
    .get('/', pages.index);

server.listen(5501);