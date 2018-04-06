import React, {Component} from 'react';
import Product from '../product/Product';

class Dashboard extends Component{


    render(){
        return(
            <div className = "Dashboard">
                Dashboard
                <Product />
            </div>
        )
    }
}

export default Dashboard;