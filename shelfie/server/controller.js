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
}