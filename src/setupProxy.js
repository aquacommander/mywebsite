const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', { target: 'https://suyama-i9of.onrender.com/', changeOrigin: true, followRedirects: true }));
};