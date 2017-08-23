let environment = 'development';
let Config;

try {
    environment = process.env.NODE_ENV;
    Config = require(`./config/${environment}`);
} catch (exception) {
    Config = require('./config.development');
}

Config.name = 'challenge_routeasy';

module.exports = Config;