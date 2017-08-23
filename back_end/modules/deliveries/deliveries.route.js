const DeliveriesController = require('./deliveries.controller.js');

module.exports = (app) => {
    app.post('/deliveries/add', DeliveriesController.add);
    app.post('/deliveries/edit/:userId', DeliveriesController.edit);
    app.get('/deliveries/remove/:userId', DeliveriesController.remove);
    app.get('/deliveries/getall', DeliveriesController.getAll);
};