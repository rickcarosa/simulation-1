import React, {Component} from 'react';

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
        this.setState({
            name: '',
            price: 0,
            image: ''
        })
      }

    render(){
        return(
            <div className = "Form">
                <input onChange = { (event) => this.updateName(event.target.value)}/>
                <input onChange = { (event) => this.updateImage(event.target.value)}/>
                <input onChange = { (event) => this.updatePrice(event.target.value)}/>
                <button className = "Cancel" onClick = {() => {this.cancel()}} > Cancel </button>
                <button className = "Add" > Add to Inventory </button>
            </div>
        )
    }
}

export default Form;