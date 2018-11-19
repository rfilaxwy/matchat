const express = require('express'),
    path = require('path'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    controller = require(__dirname + '/controller.js'),
    interestController = require(__dirname + '/interestController.js'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    session = require('express-session'),
    app = express();

require('dotenv').config();


const {SESSION_SECRET} = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))


app.use(express.static(`${__dirname}/build`) );

app.use(passport.initialize());
app.use(passport.session());




const port = process.env.SERVER_PORT||8084;

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    }).catch(err => {
        console.log('Error connection to database.', err.message);
    });



//Passport auth
passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passReqToCallback: true,
}, (req, username, password, done) => {
    const db = req.app.get('db');
    db.users.findOne({ username: username })
        .then(user => {
            if (!user ) {
                //|| !bcrypt.compareSync(password, user.password)
                return done('Invalid email or password.')
            }
            delete user.password;
            done(null, user);
        }).catch(err => {
            done(err);
        })
    })
);


passport.serializeUser((user, done) => {
    if (!user) {
        done('No user');
    }
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});


//////////////////////////////

//ENDPOINTS


//Register new user.
app.post('/api/register', controller.create);

// //Login user.
app.post('/api/login', controller.read);

//Get user profile
app.post('/api/profile', controller.readBio);

//Update and/or add user bio and interests
app.put('/api/update', controller.post);

//Delete user
app.delete('/api/user/:id', controller.delete);

//Find search input interest
app.post('/api/match', interestController.post);

//Find all that match any of users interests
app.post('/api/matches', interestController.post2);

// AUTH STUFF TO BE SET UP STILL
app.get('/test', (req, res)=>{res.send(req.user)})
app.post('/api/login', passport.authenticate(['login']), (req, res, next) => {
    res.send('Successful login.')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});