module.exports = {
    post: (req, res) => {
        const db = req.app.get('db');
        const {interest} = req.body;
        db.match_interest(interest).then(result => {
            res.status(200).send(result);
        })
    },
    post2: (req, res) => {
        const db = req.app.get('db');
        const {interest_1,interest_2,interest_3}= req.body;
        db.all_matches(interest_1,interest_2,interest_3).then(result => {
            res.status(200).send(result);
        })
    } 
}