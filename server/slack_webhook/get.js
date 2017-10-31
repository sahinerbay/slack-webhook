const rp = require('request-promise-native'),
    messenger = require('./messenger'),
    options = require('./options'),
    helper = require('./helper');

let get = {
    comment: () => {
        rp(options.viimaComment)
            .then((comments) => {
                return helper.sortCommentsById(comments);
            })
            .then((sortedComments) => {
                return helper.getLatestOne(sortedComments);
            })
            .then((currentComment) => {

                let isNew = helper.isCommentUpdated(currentComment);

                if (isNew) {
                    messenger(currentComment, options.types.comment);
                } else {
                    console.log('no new comments...');
                }
            });
    },

    idea: () => {
        rp(options.viimaIdea)
            .then((ideas) => {
                return helper.sortIdeasById(ideas);
            })
            .then((sortedIdeas) => {
                return helper.getLatestOne(sortedIdeas)
            })
            .then((currentIdea) => {

                let isNew = helper.isIdeaUpdated(currentIdea);

                if (isNew) {
                    messenger(currentIdea, options.types.idea);
                } else {
                    console.log('no new ideas...');
                }
            })
    }
};

module.exports = get;