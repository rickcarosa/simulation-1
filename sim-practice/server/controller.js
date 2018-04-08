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

    // update: (request,response) => {
    //     let index = null;
    //     inventory.forEach((product, i) => {
    //         if(product.id === (+request.params.id)) index = i; 
    //     })
    //     inventory[ index ] = {
    //         id: inventory[index].id,
    //         name: request.body.text || inventory[index].name,
    //         price: request.body.price    
    //     };
    //     response.status(200).send(inventory);

    // },

    // delete: (request, response) => {
    //     let index = null;
    //     inventory.forEach((product, i) => {
    //         if(product.id === Number(request.params.id)) index = i;
        
    // })
    //         inventory.splice(index, 1)
    //         response.status(200).send(inventory);
    // }
}
