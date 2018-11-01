const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  controller = require(__dirname+'/controller.js'),
  passport = require('passport'),
  session = require('express-session'),
  Auth0Strategy = require('passport-auth0'),
  app = express();

require('dotenv').config();



app.use(cors());
app.use(bodyParser.json());


//Auth0
app.use(session({
    secret: 'blitzkreigDongleSnapper 457&8',
    resave: false,
    saveUninitialized:false
}))

app.use(passport.initialize() );
app.use(passport.session() );

passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callBackURL: 'http://localhost:3000/dashboard'
},
function(accessToken, refreshToken, extraParams, profile, done){
    return done(null, profile);
    }
) );

app.get('/callback', 
  passport.authenticate('auth0', {failureRedirect:'/login' }),
  function(req, res) {
      if(!req.user) {
          throw new Error('user null');
      }
      res.redirect('/');
  }
);

app.get('/login',
  passport.authenticate('auth0', {}), function(req, res) {
  res.redirect('/');
  }
);

passport.serializeUser( (user,done) => {
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


const port = process.env.SERVER_PORT;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    });
}).catch(err => {
    console.log('Error connection to database.', err.message)
});

//ENDPOINTS


app.get('/login', controller.read);
app.put('/api/register',controller.post);