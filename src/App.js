import React from "react";
import "./App.css"
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import ReactPlayer from 'react-player/youtube';


function App() {

  
  return (
    <div className="react-player">
    
    
    
    <Header />
    <SideMenu />
    
    
    <ReactPlayer 
    url="https://www.youtube.com/watch?v=SWKSnVx1fQg&ab_channel=UnidadDigitalEntelOcean"
    className='video'
    controls={true}  
    />
    
    

    
    </div>
  );
}

export default App;

