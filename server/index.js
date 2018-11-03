const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  controller = require(__dirname + '/controller.js'),
  localStrat = require(__dirname + '/localStrat.js'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt'),
  session = require('express-session'),
  Auth0Strategy = require('passport-auth0'),
  app = express();

require('dotenv').config();



app.use(cors());
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  app.use(passport.initialize() );
  app.use(passport.session() );
  






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



//Passport auth
passport.use('/login', new LocalStrategy({
    usernameField: 'username',
    passReqToCallback: true,
}, (req, username, password, done) => {
    const db = req.app.get('db');
    db.users_all.findOne({ username: username })
    .then(user => {
        if(!user || !bcrypt.comparSync(password, user.password)){
           return done('Invalid email or password.')
        }
        delete user.password;
        done(null, user);
    })
    .then((user) => {
        delete user.password;
        done(null, user);
    })
    .catch(err => {
        done(err);
    })
})
)


app.get('/login',
  passport.authenticate('auth0', {}), function(req, res) {
  res.redirect('/');
  }
);

passport.serializeUser( (user,done) => {
    if(!user) {
        done('No user');
    }
    done(null, 
        {
        clientID: user.id,
        email:user._json.email,
        name: user._json.name 
    });
});

passport.deserializeUser((obj, done)=>{
    done(null,obj);
});


//////////////////////////////

//ENDPOINTS



app.put('/api/register',controller.post);