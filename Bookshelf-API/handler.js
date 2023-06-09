const { nanoid } = require('nanoid');
/* untuk menyimpan buku */
const saveBook = (request, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload;
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      });
      response.code(400);
      return response;
    }
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      });
      response.code(400);
      return response;
    }
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
      updatedAt,
    };
    books.push(newBook);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });
    response.code(201);
    return response;
  };
  module.ekports = saveBook;
/* const addBookHandler = (request, h) => {
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

module.exports = { addBookHandler }; */