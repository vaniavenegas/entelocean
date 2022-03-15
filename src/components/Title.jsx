import React from "react";
import "../styles/title.css";

const Title = () => {
  return (
      
    <div className="container">
        
        <div> 
            <div className="title">   
                <h1>The Future is Now! </h1>
            </div>
        <div className="title-button-container"> 
            <button className="title-button  text-white m-2">Newsletters</button>
            <button className="title-button  text-white m-2">Sports</button>
            <button className="title-button  text-white m-2">World</button>
            <button className="title-button  text-white m-2">Tech</button>
            <button className="title-button  text-white m-2">Entertainment</button>
            <button className="title-button  text-white m-2">Movies</button>
            <button className="title-button  text-white m-2">Music</button>
        </div> 
        </div>
      
    </div>
  );
};

export default Title;