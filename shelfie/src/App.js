import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Form from './form/Form';
import Header from './header/Header';



class App extends Component {
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
