import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
    constructor(){
      super()
      this.state = {
        inventory: [],
        serverUrl: "http://localhost:4000"
      }

      this.getInventory = this.getInventory.bind(this);

    }

    componentDidMount(){ 
      this.getInventory()
    } 

    getInventory(){
      axios.get(`${this.state.serverUrl}/api/inventory`).then( response => {  //on componentDidMount, if you get Access Control Allow Origin error you need to "npm install cors" on the server side 
      this.setState({
        inventory: response.data
    })
  })
}

  render() {
    return (
      <div className="App">
        <Dashboard list = {this.state.inventory}
                   getInventory = {this.getInventory}
                   serverUrl = {this.state.serverUrl}/>
        <Form add = {this.state.inventory}
              serverUrl = {this.state.serverUrl}/>
        <Header />
      </div>
    );
  }
}

export default App;       

