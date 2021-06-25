import React from 'react';

import Menu from './SubComponents/Menu';
import Photos from './SubComponents/Photos';
import Games from './SubComponents/Games';
import Settings from './SubComponents/Settings';

import '../index.css';

const Screen = (props) => {
    const {tracker,menuItems,onMenu} = props;
    const level1 = tracker[onMenu-1];
    const level2 = tracker[onMenu-2];
    return (
        <div id = "display">
            {onMenu===0 && <Menu menu = {menuItems[0]}  tracker = {tracker} onMenu = {onMenu} /> }
            {onMenu===1 && level1===0 && <Menu menu = {menuItems[1]} tracker = {tracker} onMenu={onMenu} /> }
            {onMenu===1 && level1===1 && <Menu menu = {menuItems[2]} tracker = {tracker} onMenu={onMenu} /> }
            {onMenu===1 && level1===2 && <Menu menu = {menuItems[3]} tracker = {tracker} onMenu={onMenu} /> }
            {onMenu===1 && level1===3 && <Menu menu = {menuItems[4]} tracker = {tracker} onMenu={onMenu} /> }
            {onMenu===2 && level2===0 && level1===0 && <Photos pick="0" />}
            {onMenu===2 && level2===0 && level1===1 && <Photos pick="1" />}
            {onMenu===2 && level2===2 && level1===0 && <Games/>}
            {onMenu===2 && level2===3 && level1===0 && <Settings/>}
        </div>
    );
};

export default Screen;