import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/dashboard/Dashboard';
import Form from './component/form/Form';
import Header from './component/header/Header';

class App extends Component {
    constructor(){
      super()
      this.state = {
        inventory: []
      }
    }


  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;       

