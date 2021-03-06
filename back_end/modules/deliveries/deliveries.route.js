const DeliveriesController = require('./deliveries.controller.js');

module.exports = (app) => {
    app.post('/deliveries/add', DeliveriesController.add);
    app.get('/deliveries/remove', DeliveriesController.remove);
    app.get('/deliveries/getall', DeliveriesController.getAll);
};