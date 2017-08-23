const DBService = require('../../../server/services/db/db.service');
const Config = require('../../configs/config');

module.exports = DBService.Model.get(Config.name, 'Deliveries');