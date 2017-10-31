let helper = {
    // Sort Comments By Id (recent comment gets highest id)
    sortCommentsById: (data) => {
        return data.results.sort((a, b) => b.id - a.id);
    },

    sortIdeasById: (data) => {
        return data.sort((a, b) => b.id - a.id);
    },

    // Returns Latest Added Comment From Sorted Array
    getLatestOne: (data) => {
        return data[0];
    },

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

    previousIdeaId: null,

    isIdeaUpdated: function (currentId) {
        if (!this.previousIdeaId || this.previousIdeaId !== currentId.id) {

            this.previousIdeaId = currentId.id;
            return true
        }
        // When there are no new comments added
        else {
            this.previousIdeaId = currentId.id;
            return false;
        }
    }
};

module.exports = helper;