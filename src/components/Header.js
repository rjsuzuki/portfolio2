import React from 'react';
import './Header.css';

import avatar from '../assets/img/southpark_me.png';
import Navbar from './Navbar';


class Header extends React.Component {
  render() {
    return (
        <header>
          <div className="avatar-div">
            <img src={avatar} alt="test" className="avatar"/>
          </div>
          
          <div className="title">
            <h1>Ryan Suzuki</h1>
          </div>
          
          <Navbar/>
        </header>
        
    );
  }
}

export default Header;