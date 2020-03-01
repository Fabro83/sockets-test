var socket = io(); // io es una función que se puede utlizar gracias a la librería que se importó enl a línea anterior
// Se usa var para aumentar la compatibilidad entre navegadores


// los on son para escuchar procesos
socket.on('connect', function() {

    console.log('Conectado al Servidor');

});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fabricio',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});


// Escuchar información del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});