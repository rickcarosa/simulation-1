import React from 'react';

function Product(props){

    let {id, name, price, image} = props.product

    return(
        <div className = "Product">
            
            <h3 key={ id }> { name } { price } { image } </h3>
        </div>      
    )
}

export default Product;