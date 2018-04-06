const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = 4000
    , controller = require('./controller')
    , massive = require('massive');
    require('dotenv').config()


    app.use(bodyParser.json());

    massive(process.env.connectionString).then(dbInstance => {
        app.set('db', dbInstance)
    });

    app.listen(4000, () => console.log('listening'));