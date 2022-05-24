'use strict';
const http = require('http')
const express = require('express')
const es6Renderer = require('express-es6-template-engine');
// const data = require('./data')

const hostname = '127.0.0.1';
const port = 3333;

const app = express();
const server = http.createServer(app);

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/', rootController)
app.use('/rangers', rangersController);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});


