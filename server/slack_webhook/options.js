if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

let options = {
    slack: {
        method: 'POST',
        uri: process.env.webhook,
        json: true // Automatically stringifies the body to JSON
    },

    viimaIdea: {
        uri: process.env.viimaIdea,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response,
    },

    viimaComment: {
        uri: process.env.viimaComment,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response,
    },

    types: {
        idea: 'idea',
        comment: 'comment'
    }
};

module.exports = options;