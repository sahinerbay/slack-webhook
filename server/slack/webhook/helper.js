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

    previousId,

    isUpdated: function (currentId) {
        if (!previousId || previousId !== currentId.id) {
            previousId = currentId.id;
            return true
        }
        // When there are no new comments added
        else {
            previousId = currentId.id;
            return false;
        }
    }
};

module.exports = helper;

