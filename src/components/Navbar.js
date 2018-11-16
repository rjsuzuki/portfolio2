import React from 'react';

import './Navbar.css';

const Navbar = () => {
    return (
        
        <nav className="navbar">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              
              <div className="row text-center">
                <ul className="nav nav-items">
                  <li><a className="item" href="https://linkedin.com/in/ryanjsuzuki">linkedin</a></li>
                  <li><a className="item" href="https://github.com/rjsuzuki">github</a></li>
                  <li><a className="item" href="mailto:ryan@ryanjsuzuki.com">email</a></li>
                </ul>
              </div>
            </div>
          </div>
         </nav> 

    );
}

export default Navbar;