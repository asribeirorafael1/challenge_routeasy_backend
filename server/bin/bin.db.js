const Config = require('../server/configs/config');
const DBService = require('../server/services/db/db.service');
const DeliveriesSchema = require('../back_end/modules/deliveries/deliveries.schema');

module.exports = () => {
    DBService.DB.init(Config.name, Config.DB.url, {});
    DBService.Model.init(Config.name, 'Deliveries', DeliveriesSchema);
};
