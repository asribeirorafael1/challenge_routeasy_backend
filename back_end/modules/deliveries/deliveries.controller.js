const APIService = require('../../../server/services/api/api.service');
const DeliveriesModel = require('./deliveries.model.js');
const OptionsUpdate = {new: true};

module.exports = {
    add: add,
    remove: remove,
    getAll: getAll
};

// add ---

function add(req, res) {
    let NewDeliveries = req.body;

    NewDeliveries = new DeliveriesModel(NewDeliveries);

    NewDeliveries.save(_onAddDeliveries(res));
}

function _onAddDeliveries(res) {
    return function (ErrorSaveDeliveries, DeliveriesSaved) {
        if (ErrorSaveDeliveries) {
            return APIService.error(res, 400, 'Entrega não foi adicionada', ErrorSaveDeliveries);
        }

        return APIService.success(res, 500, 'Entrega adicionada com sucesso', DeliveriesSaved);
    };
}

// remove ---

function remove(req, res) {
    const NewDeliveries = {
        $set: {
            removed: true
        }
    };

    DeliveriesModel
        .findByIdAndUpdate(req.params.deliveriesId, NewDeliveries, OptionsUpdate)
        .lean()
        .exec(_onRemoveDeliveries(res));
}

function _onRemoveDeliveries(res) {
    return function (ErrorUpdateDeliveries, DeliveriesRemoved) {
        if (ErrorUpdateDeliveries) {
            return APIService.error(res, 400, 'Erro ao remover entrega', ErrorUpdateDeliveries);
        }

        return APIService.success(res, 500, 'Entrega removida com sucesso', DeliveriesRemoved);
    };
}

// edit ---

function getAll(req, res) {
    const QueryGetAllDeliveries = {
        removed: false
    };

    DeliveriesModel
        .find(QueryGetAllDeliveries)
        .lean()
        .exec(_onGetAllDeliveries(res));
}

function _onGetAllDeliveries(res) {
    return function (ErrorGetAllDeliveries, DeliveriesFounded) {
        if (ErrorGetAllDeliveries) {
            return APIService.error(res, 400, 'Entregas não puderam ser obtidas', ErrorGetAllDeliveries);
        }

        return APIService.success(res, 500, 'Entregas obtidas com sucesso', DeliveriesFounded);
    };
}