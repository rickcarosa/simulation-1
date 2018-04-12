import React, {Component} from 'react';
import Product from '../product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        axios.delete(`${this.props.serverUrl}/api/product/${id}`).then(() => {
            this.props.getInventory()
        })
    }

    render(){

        const list = this.props.list.map((product) => {
            return( 
                <div key = { product.id } > 
                    <Product product = {product}
                             deleteProduct = {this.deleteProduct}/>
               
                </div>
            )
        })

        return(
            <div className = "Dashboard">
            
                
                <ul> {list} </ul>
            </div>
        )
    }
}

export default Dashboard;