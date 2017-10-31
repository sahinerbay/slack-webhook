let helper = {
    // Sort Comments By Id (recent comment gets highest id)
    sortCommentsById: (data) => {
        return data.results.sort((a, b) => b.id - a.id);
    },

    // Sort Ideas By Id (recent idea gets highest id)
    sortIdeasById: (data) => {
        return data.sort((a, b) => b.id - a.id);
    },

    // Returns Latest Added One From Sorted Array
    getLatestOne: (data) => {
        return data[0];
    },

    // Compare Previous vs Current Comment Id
    previousCommentId: null,
    isCommentUpdated: function (currentId) {
        if (!this.previousCommentId || this.previousCommentId !== currentId.id) {
            
            this.previousCommentId = currentId.id;
            return true
        }
        // When there are no new comments added
        else {
            this.previousCommentId = currentId.id;
            return false;
        }
    },

    // Compare Previous vs Current Idea Id
    previousIdeaId: null,
    isIdeaUpdated: function (currentId) {
        if (!this.previousIdeaId || this.previousIdeaId !== currentId.id) {

            this.previousIdeaId = currentId.id;
            return true
        }
        // When there are no new ideas added
        else {
            this.previousIdeaId = currentId.id;
            return false;
        }
    }
};

// required in get.js
module.exports = helper;