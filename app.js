var IncomingWebhook = require('@slack/client').IncomingWebhook;

var url = process.env.SLACK_WEBHOOK_URL || ''; //see section above on sensitive data

var webhook = new IncomingWebhook(url);

webhook.send('Hello there', function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
});
