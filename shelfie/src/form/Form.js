import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Form extends Component{

    componentDidMount(){
        axios.get(`${this.props.serverUrl}/api/inventory`).then( response => {
          this.setState({
            products: response.data
          })
        })
      } 

    render(){


        return(
            <div className = "Form">
                <Link to = '/add'> <button> Form </button> </Link>
                <input onChange = { (event) => this.props.updateName(event.target.value)}/>
                <input onChange = { (event) => this.props.updateImage_Url(event.target.value)}/>
                <input onChange = { (event) => this.props.updatePrice(event.target.value)}/>
                <button className = "Cancel" > Cancel </button>
                <button className = "Add" onClick = {() => {this.props.addProduct(this.props.name)}}> Add to Inventory </button>
            </div>
        )
    }
}

export default Form;