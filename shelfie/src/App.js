import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Dashboard from './dashboard/Dashboard';
import Form from './form/Form';
import Header from './header/Header';
import {HashRouter, Route, Switch} from 'react-router-dom';



class App extends Component {
  constructor(){
    super()
    this.state = {
        products: [],
        image_Url: '',
        name: '',
        price: 0,
        serverUrl: "http://localhost:4000"
    }

    this.updateName = this.updateName.bind(this);
    this.updateImage_Url = this.updateImage_Url.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.addProduct = this.addProduct.bind(this);
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

addProduct(){
  this.setState({
    products: [this.state.products, this.state.name, this.state.price, this.state.image_Url]
  })
}

delete(id){
  axios.delete(`${this.state.serverUrl}/api/inventory/${id}`).then( response => {
    this.setState({
      products: response.data
    })
  })
}


  render() {


    return (
      // <div className="App">
      
      //  <Form updateName = {this.updateName}
      //        updateImage_Url = {this.updateImage_Url}
      //        updatePrice = {this.updatePrice}
      //        addProduct = {this.addProduct}/>
      //  <Header />
      //  {this.state.products}
      // </div>
      
      <HashRouter>
        <Switch>
           <Route path = '/' component = {Dashboard} exact />
           <Route path = '/add' component = {Form} />
        </Switch>
      </HashRouter>
      
    );
  }
}

export default App;
