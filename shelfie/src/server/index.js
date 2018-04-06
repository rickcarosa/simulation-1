const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = 4000
    , controller = require('./controller')
    , massive = require('massive');


    app.use(bodyParser.json());



    app.listen(4000, () => console.log('listening'));