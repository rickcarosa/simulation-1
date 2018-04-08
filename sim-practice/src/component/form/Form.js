import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            image: ''
        }

    }

    updateName(value){
        this.setState({
          name: value
        })
      }
      
      updateImage(value){
        this.setState({
            image: value
        })
      }
      
      updatePrice(value){
        this.setState({
            price: value
        })
      }

      cancel(){
          console.log("click")
        this.setState({
            name: '',
            price: '',
            image: ''
        });
        console.log(this.state.name)
      }

      add(product){
        axios.post(`${this.props.serverUrl}/api/product`, {product}).then( response => {
          this.setState({
            list: response.data
          })
        })
      }

    render(){
        return(
            <div className = "Form">
                <p> Image URL: </p>
                <input value = {this.state.image} onChange = { (event) => this.updateImage(event.target.value)}/>
                <p> Product Name: </p>
                <input value = {this.state.name} onChange = { (event) => this.updateName(event.target.value)}/>
                <p> Price: </p>
                <input value = {this.state.price} onChange = { (event) => this.updatePrice(event.target.value)}/>
                <button className = "Cancel" onClick = { () => {this.cancel()}} > Cancel </button>
                <button className = "Add" onClick = { () => {this.add()}} > Add to Inventory </button>
            </div>
        )
    }
}

export default Form;