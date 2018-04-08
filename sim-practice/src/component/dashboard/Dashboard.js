import React, {Component} from 'react';
import Product from '../product/Product';

class Dashboard extends Component {


    render(){

        const list = this.props.list.map((product) => {
            return( 
                <div key = { product.id } > 
                    <Product product = {product}/>
               
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