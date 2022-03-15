import React, { useState } from 'react'
import "../styles/sideMenu.css";


const SideMenu = () => {

  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className='top-section'>
        
        <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
        {inactive ? (
          <i class="bi bi-arrow-right-square-fill"></i> 
        ):(
          <i class="bi bi-arrow-left-square-fill"></i> 
        )}
        </div>
      </div>

      

      <div className='divider'></div>

      <div className='main-menu'>
          <ul>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-house-door-fill"></i>
              </div>
              Home</a>
            </li>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-camera-video-fill"></i>
              </div>
              Popular</a>
            </li>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-heart-fill"></i>
              </div>
              Favorite</a>
            </li>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-list"></i>
              </div>
              Categories</a>
            </li>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-people-fill"></i>
              </div>
              Community</a>
            </li>
          </ul>
          <div className='divider'></div>
          <ul>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-question-circle-fill"></i>
              </div>
              Help</a>
            </li>
            <li>
              <a className='menu-item'>
              <div className='home-icon'>
              <i class="bi bi-info-square-fill"></i>
              </div>
              Info</a>
            </li>
            
          </ul>
      </div>        
    </div>
  )
}

export default SideMenu