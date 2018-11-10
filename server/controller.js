const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res, next) => {
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
            if(result.length>0) {
                res.status(200).send(result);
            } else {
                res.status(200).send(false);
            }
        } );
    },
    readBio: (req, res, next) => {
        const db = req.app.get('db');
        const {userid} = req.body;
        db.get_user_profile(userid).then(result => {
            if(result.length<1){
                res.status(200).send([{
                    bio:'Add here',
                    interest_1:'Add here',
                    interest_2:'Add here',
                    interest_3:'Add here'
                }]);
        } else{
            res.status(200).send(result);
        }})
    },
    post: (req, res, next) => {
        const db = req.app.get('db');
        const {bio, interestOne, interestTwo, interestThree, userid} = req.body;
        db.get_user_profile(userid).then(result => {
            if(result.length > 0) {
                db.profile_update(bio, interestOne, interestTwo, interestThree, userid).then(result => {
                    db.get_user_profile(userid).then(result =>{
                        res.status(200).send(result);
                    });
                });
            } else {
                db.new_profile(userid, bio, interestOne, interestTwo, interestThree).then(result => {
                    db.get_user_profile(userid).then(result =>{
                        res.status(200).send(result);
                    });
                });
            }
        }
            )
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        const {userid} = req.body;
        db.delete_user(userid).then(result => {
            res.status(200).send(result);
        })

    },
}