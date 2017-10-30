const rp = require('request-promise-native');
const options = require('./options');

let createMessage = (data) => {
    return {
        "text": "<https://app.viima.com/auth/login/?next=/|New idea> created by",
        "attachments": [
            {
                "title": data.name,
                "text": data.description,
                "color": "#36a64f",
                "author_name": data.fullname,
                "author_icon": data.profile_picture_url,
            }
        ]
    }
};

let sendIdea = (data) => {
    options.slack.body = createMessage(data);
    rp(options.slack);
};

module.exports = sendIdea;