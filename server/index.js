const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    controller = require(__dirname + '/controller.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt'),
    session = require('express-session'),
    app = express();

require('dotenv').config();



app.use(cors());
app.use(bodyParser.json());
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
// }))

app.use(passport.initialize());
app.use(passport.session());




const port = process.env.SERVER_PORT;

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }).catch(err => {
        console.log('Error connection to database.', err.message);
    });



// //Passport auth
// passport.use('login', new LocalStrategy({
//     usernameField: 'username',
//     passReqToCallback: true,
// }, (req, username, password, done) => {
//     const db = req.app.get('db');
//     db.users.findOne({ username: username })
//         .then(user => {
//             if (!user ) {
//                 //|| !bcrypt.compareSync(password, user.password)
//                 return done('Invalid email or password.')
//             }
//             delete user.password;
//             done(null, user);
//         }).catch(err => {
//             done(err);
//         })
//     })
// );


// passport.serializeUser((user, done) => {
//     if (!user) {
//         done('No user');
//     }
//     done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//     done(null, obj);
// });


//////////////////////////////

//ENDPOINTS


//Register new user.
app.post('/api/register', controller.post);

//Login user.
app.post('/api/login', controller.read);

//Get user profile
app.post('/api/profile', controller.readBio);

// app.get('/test', (req, res)=>{res.send(req.user)})
// app.post('/login', passport.authenticate(['login']), (req, res, next) => {
//     res.send('Successful login.')
// })