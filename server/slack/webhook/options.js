let options = {
    slack: {
        method: 'POST',
        uri: 'https://hooks.slack.com/services/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',
        json: true // Automatically stringifies the body to JSON
    },

    viimaIdea: {
        uri: 'https://app.viima.com/api/customers/2027/items',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response,
    },

    viimaComment: {
        uri: 'https://app.viima.com/api/customers/2027/activities/',
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