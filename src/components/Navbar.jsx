import React from 'react';
import "../styles/navbar.css";

function Navbar () {

  return (
    <section className="navbar">

      <div className='search-controller'>
        <button className='search-btn'>
        <i class="bi bi-search"></i>
        </button>
      
        <input
          type='text'
          placeholder='Search'
        />
      </div>

      <div className='social-media'>
      <i class="bi bi-facebook"></i>      
      </div>
      <div className='social-media'>
      <i class="bi bi-twitter"></i>     
      </div>
      <div className='social-media'>
      <i class="bi bi-instagram"></i>      
      </div>
      
      

      <a href="/shop" className="navbar-item">Blog </a>
      <a href="/contact" className="navbar-item">Sign in</a>
      <div>
      <i class="bi bi-caret-down-fill"></i>
      </div>
      <a href="/blog" className="navbar-item">Register</a>
      <div><i class="bi bi-plus-circle"></i></div>
      
  </section>
  )

}

export default Navbar;