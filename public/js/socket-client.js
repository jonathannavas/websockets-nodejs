const lblOnline     = document.querySelector('#lblOnline');
const lblOffline    = document.querySelector('#lblOffline');

const txtMensaje    = document.querySelector('#txtMensaje');
const btnEnviar     = document.querySelector('#btnEnviar');

const socketCliente = io();


socketCliente.on( 'connect', () => {

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

}); 

socketCliente.on( 'disconnect', () => {

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

    console.log('Desconectado del servidor');

});

socketCliente.on( 'enviar-mensaje', ( payload ) => {
    console.log( payload );
});

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '134avvsdfsdfa',
        fecha: new Date().getTime()
    }
    
    socketCliente.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id);
    });

    // txtMensaje.value = '';
    
});