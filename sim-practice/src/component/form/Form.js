import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: '',
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

      add = (name, price, image) => {
          axios.post(`${this.props.serverUrl}/api/product`, {name: this.state.name, price: this.state.price, image: this.state.image})
      }

      saveChanges(id, values){
          let body = { name: this.state.name, price: this.state.price, image: this.state.image}

          axios.put(`${this.props.serverUrl}/api/product/${id}`, body).then( response => {
              this.setState({
                  products: response.data
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
                <input type = "number" value = {this.state.price} onChange = { (event) => this.updatePrice(event.target.value)}/>
                <button className = "Cancel" onClick = { () => {this.cancel()}} > Cancel </button>
                <button className = "Add" onClick = { () => {this.add()}} > Add to Inventory </button>
            </div>
        )
    }
}

export default Form;