var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor')
});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión')
});

socket.emit('enviarMensaje', {
    usuario: 'Martin',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Server:', resp)
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
});