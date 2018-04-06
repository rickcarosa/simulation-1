

const axios = require('axios');

let inventory = [];
let price = 0;
let image_Url = '';

module.exports = {
    read: (request, response) => {
        response.status(200).send(inventory)
    },

    create: (request, response) => {
        let product = {
            name: request.body.name,
            image_Url: image_Url,
            price: 0
        } 
        inventory.push(product)
        console.log(inventory)
        response.status(200).send(inventory)
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

    delete: (request, response) => {
        let index = null;
        inventory.forEach((product, i) => {
            if(product.id === Number(request.params.id)) index = i;
        
    })
            inventory.splice(index, 1)
            response.status(200).send(inventory);
    }
}