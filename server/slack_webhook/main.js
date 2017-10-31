const rp = require('request-promise-native'),
    get = require('./init');

let requestLoop = setInterval(function () {
    get.comment();
    get.idea();

}, 60000 * 5);

module.exports = requestLoop;