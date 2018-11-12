module.exports = {
    post: (req, res) => {
        const db = req.app.get('db');
        const {interest} = req.body;
        db.match_interest(interest).then(result => {
            res.status(200).send(result);
        })
    },
    read: (req, res) => {
        const db = req.app.get('db');
        db.all_matches(req.params.id).then(result => {
            res.status(200).send(result);
        })
    } 
}