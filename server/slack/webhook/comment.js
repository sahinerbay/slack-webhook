const rp = require('request-promise-native');
const sendComment = require('./comment_hook');

// GET Request to Viima API
let options = {
    uri: 'https://app.viima.com/api/customers/2027/activities/',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response,
};

// Sort Comments By Id (recent comment gets highest id)
let sortCommentsById = (data) => {
    return data.results.sort((a, b) => b.id - a.id);
};

// Returns Latest Added Comment From Sorted Array
let getLatestComment = (data) => {
    return data[0];
}

// Keeps track of Previous Comment Id
let previousCommentId;

let getComment = () => {
    rp(options)
        .then((result) => {
            return sortCommentsById(result);
        })
        .then((sortedComments) => {
            return getLatestComment(sortedComments);
        })
        .then((currentComment) => {

            // Send Request If comment id is null (when the server starts) or not equal to current comment id (newly added comment)
            if (!previousCommentId || previousCommentId !== currentComment.id) {
                previousCommentId = currentComment.id;
                sendComment(currentComment);
            }
            // When there are no new comments added
            else {
                previousCommentId = currentComment.id;
                console.log('no new comments...');
            }
        })
};

module.exports = getComment;