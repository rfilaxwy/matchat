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
        const {userid}= req.params.id;
        db.all_matches(userid).then(result => {
            res.status(200).send(result);
        })
    } 
}