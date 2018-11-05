const bcrypt = require('bcrypt');
module.exports = {
    post: (req, res, next) => {
        const db = req.app.get('db');
        let {firstname, username, email, password, city, country} = req.body;
        // password = bcrypt.hash(password,10);
        // console.log(password)
        db.check_exist(username, email).then((result) => {
            if(result.length===0){
                db.register_user(firstname, username, email, password, city, country).then(result => {
                    res.status(200).send(true);
                })
            } else {
                res.status(200).send(false);
            }
        })  
    },
    read: (req, res, next) => {
        const db = req.app.get('db');
        let {username, password} = req.body;
        //need to add bcrpyt comparesync
        db.login_check(username,password).then(result => {
            console.log(result)
            if(result.length>0) {
                res.status(200).send(true);
            } else {
                res.status(200).send(false);
            }
        } );
    }
    // delete: (res, res) => {
    // },
}