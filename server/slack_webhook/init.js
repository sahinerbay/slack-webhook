const rp = require('request-promise-native'),
    get = require('./get');

let requestLoop = setInterval(function () {

    //Check For New Comments
    get.comment();

    //Check For New Ideas
    get.idea();

    //Set How Often APIs will be checked?
}, 60000 * 5);

//will be inserted in app.js
module.exports = requestLoop;