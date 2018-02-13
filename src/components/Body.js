import React, { Component } from 'react';

import ShuffleView from './ShuffleView.js';
import Jumbotron from './Jumbotron.js';
import '../assets/css/Body.css';
 
class Body extends Component {
  render() {
    return (
      <div className="body-container">
        <Jumbotron/>
        <ShuffleView/>
      </div>
    );
  }
}

export default Body;