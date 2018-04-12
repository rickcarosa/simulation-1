const axios = require('axios');

let inventory = [];
let price = '';
let image = '';

module.exports = {
    read: (request, response) => {
        console.log("haha")
        const dbInstance = request.app.get('db')
        dbInstance.get_inventory()
        .then(simprac => response.status(200).send(simprac))   // simprac is the table name
        .catch( (err) => {
            response.status(500).send(err)
        });
    },

    create: (request, response) => {
        const dbInstance = request.app.get('db')
        const {name, price, image} = request.body

        dbInstance.create_product([name, price, image])
            .then( () => response.status(200).send("all good") )
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            })
    },

    update: (request,response) => {
        let id = request.params.id
        let dbInstance = request.app.get('db')
        let {name, price, image} = request.body

        dbInstance.update_product([id, name, price, image]).then(results => {
            response.send(results)
        })
    },

    delete: (request, response) => {
        let id = request.params.id
        let dbInstance = request.app.get('db')

        dbInstance.delete_product([id]).then(() => {
            response.sendStatus(200)
        })
    }
}
