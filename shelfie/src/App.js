import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Form from './form/Form';
import Header from './header/Header';



class App extends Component {
  constructor(){
    super()
    this.state = {
        image_Url: '',
        name: '',
        price: 0
    }

    this.updateName = this.updateName.bind(this);
    this.updateImage_Url = this.updateImage_Url.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
}


updateName(value){
  this.setState({
    name: value
  })
}

updateImage_Url(value){
  this.setState({
      image_Url: value
  })
}

updatePrice(value){
  this.setState({
      price: value
  })
}


  render() {


    return (
      <div className="App">
       <Dashboard />
       <Form updateName = {this.updateName}
             updateImage_Url = {this.updateImage_Url}
             updatePrice = {this.updatePrice}/>
       <Header />
       
      </div>
    );
  }
}

export default App;
