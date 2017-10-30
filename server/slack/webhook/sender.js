const rp = require('request-promise-native');
const options = require('./options');

// Create Slack Message with Attachment
let createMessage = (data, type) => {
    let txt, attchTxt;

    switch (type) {
        case options.types.idea:
            txt = 'New idea> created by';
            attchTxt = data.description;

        case options.types.comment:
            txt = 'New comment> added by';
            attchTxt = data.content;
    }
    
    return {
        "text": `<https://app.viima.com/auth/login/?next=/|${txt}`,
        "attachments": [
            {
                "title": data.name,
                "text": attchTxt,
                "color": "#36a64f",
                "author_name": data.fullname,
                "author_icon": data.profile_picture_url,
            }
        ]
    }
};

// Sending Message to Slack
let sender = (data, type) => {
    options.slack.body = createMessage(data, type);
    rp(options.slack);
};

module.exports = sender;