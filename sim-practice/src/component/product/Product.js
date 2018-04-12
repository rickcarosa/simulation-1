import React from 'react';

function Product(props){

    let {id, name, price, image} = props.product

    return(
        <div className = "Product">
            
            <h3> { name } </h3>
            <h3> { price } </h3>
            <img src = {image} alt = {name}/>
            <button onClick = { () => props.deleteProduct(id)}> Delete </button>

        </div>      
    )
}

export default Product;