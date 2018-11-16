import React, { Component } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';

import './App.css';
 
class App extends Component {
  render() {
    return (
      <div>

        <Header/>
        <Body />
        <Footer/>
        
      </div>
    );
  }
}

export default App;
