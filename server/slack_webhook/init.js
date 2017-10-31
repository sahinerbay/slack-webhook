const rp = require('request-promise-native'),
    get = require('./get');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

let requestLoop = setInterval(function () {
    get.comment();
    get.idea();

}, 600 * 5);

module.exports = requestLoop;