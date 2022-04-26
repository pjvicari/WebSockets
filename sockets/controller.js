

const socketController = (socket) => {
    console.log('cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar_mensaje', (payload, callback) => {
        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar_mensaje', payload);
    });
}

module.exports = {
    socketController
}