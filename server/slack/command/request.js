const rp = require('request-promise-native');
const validateCommandInput = require('./validateCommand');

var options = {
    uri: 'https://app.viima.com/api/customers/2027/items',
    qs: {
        access_token: 'xxxxx xxxxx' // -> uri + '?access_token=xxxxx%20xxxxx'
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

let createMessage = (data) => {
    return {
        "text": data[0].description
    }
};

let sendRequest = (body) => {
    validateCommandInput(body.text);
    return rp(options)
        .then(function (repos) {
            return createMessage(repos);
        })
        .catch(function (err) {
            console.log(`Error occured: ${err.message}`);
        });
};

module.exports = sendRequest;


