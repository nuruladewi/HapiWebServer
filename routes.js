const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
		{
/*			route dapat diakses menggunakan
				seluruh method yang ada pada HTTP. */
				method: '*',
				path: '/',
				handler: (request, h) => {
						return 'Halaman tidak dapat diakses dengan method tersebut';
				},
		},
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
		{
				method: '*',
				path: '/about',
				handler: (request, h) => {
						return 'Halaman tidak dapat diakses dengan method tersebut';
				},
		},
        {
            method: 'GET',
            path: '/hello/{name?}', //Path Parameter
            handler: (request, h) => {
               const { name = "stranger" } = request.params; //Path Parameter
               const { lang } = request.query; //Query Parameter

               if (lang === 'id') {
                return `Hai, ${name}!`;
               }

               return `Hello, ${name}!`;
           },
        },
		{
			method: '*',
			/* menangani permintaan masuk
				pada path yang belum ditentukan */
				path: '/{any*}',
				handler: (request, h) => {
						return 'Halaman tidak ditemukan';
				},
		},
];
 
module.exports = routes;