import React from 'react';
import '../css/wheel.css'; 

//bottom wheel component i.e. which is used to scroll on the menu.
const Wheel =(props)=> {
   return (
      <div id="wheel-container">
        <div id='wheel'>
          <div id='menubtn' onClick={()=>props.backbtn()}><b>Menu</b></div>
          <div id='backwardbtn'><i className="fas fa-fast-backward"></i></div>
          <div id='forwardbtn'><i className="fas fa-fast-forward"></i></div>
          <div id='playBtn'><i className="fas fa-play"></i><i className="fas fa-pause"></i></div>
          <div id='selectBtn' onClick={()=>props.selectbtn()}></div>
        </div>
      </div>
  );

};

export default Wheel;