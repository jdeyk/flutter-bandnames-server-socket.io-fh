require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Path público
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

server.listen(process.env.PORT, (err)=>{
    if(err) throw new Error(err);
    console.log('Iniciando Servidor en puerto ', process.env.PORT);
});