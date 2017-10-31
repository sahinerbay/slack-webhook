const rp = require('request-promise-native'),
    messenger = require('./messenger'),
    settings = require('./settings'),
    helper = require('./helper');

// Sends Http Requests to Both Viima APIs
let get = {
    comment: () => {
        //Retrieve Viima API address from Option file
        rp(settings.viimaComment)
            .then((comments) => {
                //Sort Returned Response
                return helper.sortCommentsById(comments);
            })
            .then((sortedComments) => {
                //Retrieve Last(most recent) Comment
                return helper.getLatestOne(sortedComments);
            })
            .then((currentComment) => {
                // Check If There are New Comments Available (Returns boolean)
                let isNew = helper.isCommentUpdated(currentComment);

                //If New Comments Available; Sends POST Request to Slack Via Incoming Webhook
                if (isNew) {
                    messenger(currentComment, settings.types.comment);
                }
                //No New Comments
                else {
                    console.log('no new comments...');
                }
            });
    },

    idea: () => {
        //Retrieve Viima API address from Option file
        rp(settings.viimaIdea)
            .then((ideas) => {
                //Sort Returned Response
                return helper.sortIdeasById(ideas);
            })
            .then((sortedIdeas) => {
                //Retrieve Last(most recent) Idea
                return helper.getLatestOne(sortedIdeas)
            })
            .then((currentIdea) => {
                // Check If There are New Ideas Available (Returns boolean)
                let isNew = helper.isIdeaUpdated(currentIdea);

                //If New Ideas Available; Sends POST Request to Slack Via Incoming Webhook
                if (isNew) {
                    messenger(currentIdea, settings.types.idea);
                }
                //No New Ideas
                else {
                    console.log('no new ideas...');
                }
            })
    }
};

//required in init.js
module.exports = get;