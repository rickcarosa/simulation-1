const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = 4000
    , controller = require('./controller')
    , massive = require('massive')
    , cors = require('cors')
    require('dotenv').config()


    app.use(bodyParser.json());
    app.use(cors());

    massive(process.env.connectionString).then(dbInstance => {
        app.set('db', dbInstance)
    });

    app.get('/api/inventory', controller.read)

    app.post('/api/product', controller.create)

    app.put('/api/product/:id', controller.update)

    app.delete('/api/product/:id', controller.delete)

    app.listen(4000, () => console.log('listening'));