const rp = require('request-promise-native');
const options = require('./options');

// Create Slack Message with Attachment
let createMessage = (data) => {
    return {
        "text": "<https://app.viima.com/auth/login/?next=/|New comment> added by",
        "attachments": [
            {
                "title": data.name,
                "text": data.content,
                "color": "#36a64f",
                "author_name": data.fullname,
                "author_icon": data.profile_picture_url,
            }
        ]
    }
};

// Sending Message to Slack
let sendComment = (data) => {
    options.slack.body = createMessage(data);
    rp(options.slack);
};

module.exports = sendComment;