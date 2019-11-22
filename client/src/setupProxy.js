const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/todo/all', { target: 'http://localhost:8080' }));
    app.use(proxy('/api/todo/new', { target: 'http://localhost:8080' }));
    app.use(proxy('/api/todo/update', { target: 'http://localhost:8080' }));
};
