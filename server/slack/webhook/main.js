const rp = require('request-promise-native');
const getLatestIdeas = require('./idea');
const getComment = require('./comment');

let requestLoop = setInterval(function () {
    getLatestIdeas();
    getComment();
    
}, 60000 * 5);

module.exports = requestLoop;