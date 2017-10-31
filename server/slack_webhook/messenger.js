const rp = require('request-promise-native'),
    settings = require('./settings');

// Create Slack Message with Attachment
let createMessage = (data, type) => {
    let txt, attchTxt;

    // Check type (idea or comment) and customize the message
    switch (type) {
        case settings.types.idea:
            txt = 'New idea> created by';
            attchTxt = data.description;
            break;

        case settings.types.comment:
            txt = 'New comment> added by';
            attchTxt = data.content;
            break;
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
let messenger = (data, type) => {

    //Insert the slack message into body
    settings.slack.body = createMessage(data, type);

    //Send the messge to Slack Via POST
    rp(settings.slack);
};

// required in get
module.exports = messenger;