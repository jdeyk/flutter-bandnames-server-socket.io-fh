const {io} = require('../index');
// Mensajes socket
io.on('connection', client=>{
    console.log('Cliente conectado');

    client.on('mensaje', (payload) => {
        console.log('Mensaje',payload);

        io.emit('mensaje', {admin: 'Nuevo Mensaje'});
    });


    client.on('disconnect',()=>{
        console.log('Cliente desconectado');
    })
});