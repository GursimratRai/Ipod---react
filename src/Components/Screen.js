import React from 'react';
import Navbar from './Navbar';

import Menu from './SubComponents/Menu';
import Photos from './SubComponents/Photos';
import Music from './SubComponents/Music';
import Games from './SubComponents/Games';
import Settings from './SubComponents/Settings';
import background from '../assets/display/background.jpg';
import '../css/display.css';

const Screen = (props) => {
    const {tracker,menuItems,onMenu} = props;
    const level1 = tracker[onMenu-1];
    const level2 = tracker[onMenu-2];
    return (
        <div id='display-container' style={{backgroundImage:`url(${background})`}}>
             <Navbar 
                menuItems = {menuItems} 
                tracker = {tracker} 
                onMenu = {onMenu}
             />
            <div id = "display">
                {onMenu===0 && <Menu menu = {menuItems[0]}  tracker = {tracker} onMenu = {onMenu} /> }
                {onMenu===1 && level1===0 && <Menu menu = {menuItems[1]} tracker = {tracker} onMenu={onMenu} /> }
                {onMenu===1 && level1===1 && <Menu menu = {menuItems[2]} tracker = {tracker} onMenu={onMenu} /> }
                {onMenu===1 && level1===2 && <Menu menu = {menuItems[3]} tracker = {tracker} onMenu={onMenu} /> }
                {onMenu===1 && level1===3 && <Menu menu = {menuItems[4]} tracker = {tracker} onMenu={onMenu} /> }
                {onMenu===2 && level2===0 && <Photos pick={level1===0?0:1} />}
                {onMenu===2 && level2===1 && <Music pick={level1} />}
                {onMenu===2 && level2===2 && <Games pick={level1===0?0:1} />}
                {onMenu===2 && level2===3 && level1===0 && <Settings/>}
            </div>
        </div>
    );
};

export default Screen;