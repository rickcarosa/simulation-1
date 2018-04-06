import React, {Component} from 'react';
import Product from '../product/Product';
import {Link} from 'react-router-dom';

class Dashboard extends Component{


    render(){
        return(
            <div className = "Dashboard">
                
                <Product />
                <Link to = '/'> <button> Dashboard </button> </Link>
            </div>
        )
    }
}

export default Dashboard;