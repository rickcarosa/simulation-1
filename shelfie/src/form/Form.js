import React, {Component} from 'react';

class Form extends Component{



    render(){
        return(
            <div className = "Form">
                <input onChange = { (event) => this.props.updateName(event.target.value)}/>
                <input onChange = { (event) => this.props.updateImage_Url(event.target.value)}/>
                <input onChange = { (event) => this.props.updatePrice(event.target.value)}/>
                <button> Cancel </button>
                <button> Add to Inventory</button>
            </div>
        )
    }
}

export default Form;