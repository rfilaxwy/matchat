module.exports = {
    
    post: (req,res) => {
        const db = req.app.get('db');
        const {firstname, username, email, password, city, country} = req.body;

        db.register_user(firstname, username, email, password, city, country).then(res => {
            res.status(200);
        })
    },
    // delete: (res, res) => {
    // },
}