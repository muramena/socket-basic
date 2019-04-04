const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al servidor'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    });

    client.on('enviarMensaje', (mensaje, callback) => {
        
        if (mensaje.usuario) {
            callback({
                resp: 'Todo piola'
            })
        } else {
            callback({
                resp: 'Algo salió mal'
            })
        }
        
    });
});