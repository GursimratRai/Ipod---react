import React from "react";

class Navbar extends React.Component{

    constructor(props){
        super(props);
    }

    getTitle = () => {
        const {onMenu,menuItems,tracker} = this.props;

        switch(onMenu){
        case 1 :
            return menuItems[tracker[onMenu-1]+1].title;
        case 2 :
            return menuItems[tracker[onMenu-2]+1].list[tracker[onMenu-1]].name;
        default:
            return 'Ipod';
        }
    };

    render(){
        return  (
            <div id="navbar">
            <div><i class="fas fa-wifi"></i></div>
            <div>{this.getTitle()}</div>
            <div><i class="fas fa-battery-three-quarters"></i></div>
            </div>
        )
    }
}

export default Navbar;