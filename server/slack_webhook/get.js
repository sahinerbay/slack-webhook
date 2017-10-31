const rp = require('request-promise-native'),
    messenger = require('./messenger'),
    options = require('./options'),
    helper = require('./helper');

// Sends Http Requests to Both Viima APIs
let get = {
    comment: () => {
        //Retrieve Viima API address from Option file
        rp(options.viimaComment)
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
                    messenger(currentComment, options.types.comment);
                }
                //No New Comments
                else {
                    console.log('no new comments...');
                }
            });
    },

    idea: () => {
        //Retrieve Viima API address from Option file
        rp(options.viimaIdea)
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
                    messenger(currentIdea, options.types.idea);
                }
                //No New Ideas
                else {
                    console.log('no new ideas...');
                }
            })
    }
};

//will be required in init.js
module.exports = get;