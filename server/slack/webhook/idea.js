const rp = require('request-promise-native');
const sendIdea = require('./idea_hook');

let options = {
    uri: 'https://app.viima.com/api/customers/2027/items',
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response,
};

let sortIdeasById = (data) => {
    return data.sort((a, b) => b.id - a.id);
};

let getLatestIdea = (data) => {
    return data[0];
}

let previousIdeaId;

let getLatestIdeas = () => {
    rp(options)
        .then((result) => {
            return sortIdeasById(result);
        })
        .then((sortedIdeas)=> {
            return getLatestIdea(sortedIdeas);
        })
        .then((currentIdeaId) => {
            //Store previous idea id
            if (!previousIdeaId || previousIdeaId !== currentIdeaId.id) {
                previousIdeaId = currentIdeaId.id;
                sendIdea(currentIdeaId);
            }
            else {
                previousIdeaId = currentIdeaId.id;
                console.log('no new ideas...');
            }
        })
};

module.exports = getLatestIdeas;