const Hapi = require('@hapi/hapi');
const routes = require('./routes'); //Merutekan file

const init = async () => {
	//Membuat HTTP Server dengan method Hapi.server()
	//Dengan satu parameter ServerOptions
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    //Memanggil route
    server.route(routes);
	//Proses menjalankan server secara asynchronous.
    await server.start();
	//melihat alamat lengkap dan port di mana server dijalankan
	//lewat server.info.uri
    console.log(`Server berjalan pada ${server.info.uri}`);
}
 
init();