const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  controller = require(__dirname+'/controller.js');

require('dotenv').config();

app = express();
app.use(bodyParser.json());

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
