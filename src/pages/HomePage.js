import React from 'react';
import Header from '../components/Header.js';
import Body from '../components/Body.js';
import Footer from '../components/Footer.js';


class HomePage extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        
        <Body/>
        
        <Footer/>

      </div>
    );
  }
}

export default HomePage;
