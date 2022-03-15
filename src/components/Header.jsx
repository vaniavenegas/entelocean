import React from 'react'
import Navbar from "./Navbar"
import Title from './Title';
import "../styles/header.css";
import logo from '../assets/logo/webscript.png';

function Header () {

  return (
    <section className="header">
        <section className="header-top">
        
          <div className='header-top-logo'>
            <img src={logo} alt='webscript'/>
            <h3>Ocean</h3>
          </div>               
        
          
        
        <section className="header-top-navbar">
          <section className="header-top-navigation">
            <Navbar />
          </section>
          <hr className="header-top-seperator" />
        </section>
        
      </section>
      <Title />
      
    </section>
  )
}

export default Header;