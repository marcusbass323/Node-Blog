const express = require('express');
const server = express();
const helmet = require('helmet');
const logger = require('morgan');
const PORT = 5000;

const Middleware = require('./Middleware/gatekeeper')

server.use(
    helmet(),
    logger('dev'),
    Middleware.gatekeeper
);


server.get('/entrance', (req, res) => {
    res.send({message: 'request received'})
})

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`)
})