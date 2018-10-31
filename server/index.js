const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  controller = require(__dirname+'/controller.js'),
  passport = require('passport'),
  Auth0Strategy = require('passport-auth0'),
  app = express();

require('dotenv').config();



app.use(cors());
app.use(bodyParser.json());

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
    callBackURL: '/dashboard',
    scope: 'openid email profile'
},
function(accessToken, refreshToken, extraParams, profile, done){
    return done(null, profile);
    }
) );

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