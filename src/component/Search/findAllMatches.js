const axios = require('axios');
module.exports = {
    allMatching: (userid) => {
        axios.post('/api/matches', {userid}).then( result => {
           return result;
        });
    },
    searchMatch: (interest) => {
        axios.post('/api/match', {interest}).then(result => {
            return result;
        })
    }
}