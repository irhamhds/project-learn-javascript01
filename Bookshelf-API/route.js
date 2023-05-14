const {addBookHandler} = require('handler');
const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: addBookHandler,
    }
  ];
module.exports = routes;