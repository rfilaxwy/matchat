const db = req.app.get('db')
module.exports = {
    read: (req, res) => {
        passport.authenticate('auth0', 
        {
            successRedirect:'/dashboard',
            failureRedirect:'/login',
            connection: 'github'

        });
    },
    post: (req,res) => {
        const db = req.app.get('db');
        const {firstname, username, email, password, city, country} = req.body;

        db.register_user(firstname, username, email, password, city, country).then(res => {
            res.status(200);
        })
    },
    delete: (res, res) => {
    },
}