if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

let options = {
    //Settings for Slack incoming webhook
    slack: {
        method: 'POST',
        uri: process.env.webhook,
        json: true // Automatically stringifies the body to JSON
    },

    //Settings for Viima Idea
    viimaIdea: {
        uri: process.env.viimaIdea,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response,
    },

    //Settings for Viima Activities
    viimaComment: {
        uri: process.env.viimaComment,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response,
    },

    //Definede types for sending messages to Slack
    types: {
        idea: 'idea',
        comment: 'comment'
    }
};

// will be required in get.js and messenger.js
module.exports = options;