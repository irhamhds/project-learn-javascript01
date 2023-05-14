const Hapi = require('@hapi/hapi');
const routes = require('route');
const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });
   /*  server.route({
        method: 'POST',
        path: '/books',
        handler: (request, h) => {
            const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    
            const id = nanoid(16);
            const finished = pageCount === readPage;
            const insertedAt = new Date().toISOString();
            const updatedAt = insertedAt;
    
            const newBook = {
                id,
                name,
                year,
                author,
                summary,
                publisher,
                pageCount,
                readPage,
                finished,
                reading,
                insertedAt,
                updatedAt
            };
            
            books.push(newBook);
    
            const isSuccess = books.filter((book) => book.id === id).length > 0;
    
            if (isSuccess) {
                return h.response({
                    status: 'success',
                    message: 'Buku berhasil ditambahkan',
                    data: {
                        bookId: id
                    }
                }).code(201);
            }
    
            return h.response({
                status: 'fail',
                message: 'gagal menambahkan buku'
            }).code(500);
        }
    }); */

    /* server.route({
        method: 'GET',
        path: '/books',
        handler: () => {
            const result = books.map(book => {
                return {
                    id: book.id,
                    name: book.name,
                    publisher: book.publisher
                };
            });

            return {
                status: 'success',
                data: {
                    books: result
                }
            };
        }
    });
     */
    server.route(routes);
    
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
init();