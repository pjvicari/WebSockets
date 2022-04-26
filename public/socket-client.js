const socketClient = io();

const lblOnline = document.querySelector('#lblConectado');
const lblOffline = document.querySelector('#lblDesconectado');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socketClient.on('connect', () => {
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
})

socketClient.on('disconnect', () => {
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
})

socketClient.on('enviar_mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 5154,
        fecha: new Date().getDate()
    }
    socketClient.emit('enviar_mensaje', payload, (id) => {
        console.log('Grabado:', id);
    });
})