import React, { Component } from 'react';

import ShuffleView from './ShuffleView.js';
import '../assets/css/Body.css';
 
class Body extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      home: "ON",  
      react: "OFF",
    }
  }
  
  render() {
    return (
      <div className="container">
        <ShuffleView/>
      </div>
    );
  }
}

export default Body;