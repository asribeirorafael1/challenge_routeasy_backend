module.exports = (app) => {
    require('../back_end/modules/users/users.route')(app);
    require('../back_end/modules/deliveries/deliveries.route')(app);
};