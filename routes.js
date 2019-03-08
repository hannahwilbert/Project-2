module.exports = function (app) {
    // Our model controllers (rather than routes)
    var equiptments_controller = require('./controllers/equiptments_controller');

    app.use('/', equiptments_controller);
}