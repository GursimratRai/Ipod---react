import React from 'react';

import Navbar from './Components/Navbar';
import Screen from './Components/Screen';
import Wheel from './Components/Wheel';

import ZingTouch from 'zingtouch';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      menuItems : [{
        //main menu
         title : "Ipod.js",
         list : [{name:"Photos",id:0},{name:"Music",id:1},{name:"Games",id:2},{name:"Settings",id:3}],
      },{
        //menu for photos
        title : "Photos",
        list : [{name:"Wallpapers",id:0},{name:"Covers",id:1}],
     },{
       //menu for music 
        title : "Music",
        list : [{name:"All Songs",id:0},{name:"Favourite",id:1},{name:"Albums",id:2},{name:"Genres",id:3}],
     },
     {
       //menu for games
        title : "Games",
        list : [{name:"Snake",id:0},{name:"Soduko",id:1}],
     },
     {
       //menu for settings
        title : "Settings",
        list : [{name:"About",id:0},{name:"Date&Time",id:1}],
    }],
    //Array used for navigating through different pages/menu's of the ipod
    //indexes defines the current page 
    //values defines the active class on the menu.
    tracker : [0,0,0],
    
    //used for track of current page/menu shown on the display
    onMenu :0,
    
  }
    //function to change the menu
    this.changeMenu = this.changeMenu.bind(this);
    //used to detect the change in angle while rotation of the wheeel
    this.angle = 0;
  }

  componentDidMount(){
    const wheel = document.getElementById('wheel');
    const region = new ZingTouch.Region(wheel);
    region.bind(wheel, "rotate", (event)=>{
      this.move(event);
    });
  }

  //function for moving forward on the particular option seleted
  selectbtn = ()=>{
    const nextMenu= this.state.onMenu<2?this.state.onMenu+1:2;
    this.setState({
      onMenu : nextMenu,
    })
  }

  //function for travelling back 
  backbtn = ()=>{
      const previousMenu = (this.state.onMenu>0?this.state.onMenu-1:0)%3;
      this.setState({
        onMenu : previousMenu,
       })
  };

  //function used to change/update the tracker array 
  changeMenu = (currentMenu,updatedTracker)=>{    
      this.setState({
        onMenu : currentMenu,
        tracker : updatedTracker
      });
  };

  move = (event)=>{

    if(this.state.onMenu>=2){
      return;
    }
    let size = 4;
    if(this.state.onMenu>0){
      size = this.state.menuItems[this.state.tracker[this.state.onMenu-1]+1].list.length;
    }
 
      if (event.detail.distanceFromOrigin === 0) {
        this.angle = event.detail.angle;
      }

      // rotation function for clockwise direction
      if (Math.abs(this.angle - event.detail.angle) > 15) {

        this.angle = Math.abs(event.detail.angle);

        if (event.detail.distanceFromLast === 0) {
          return;
        } 
        else if (event.detail.distanceFromLast > 0) {
                
          const updatedTracker = this.state.tracker.map((select,index)=>{
            if(index === this.state.onMenu){      
              return (select+1)%size;
            }
            else{
              return select;
            }
          });

          this.changeMenu(this.state.onMenu,updatedTracker);
        
        } else if (event.detail.distanceFromLast < 0) {
          const updatedTracker = this.state.tracker.map((select,index)=>{
            if(index === this.state.onMenu){
                return (select-1<0?size-1:select-1)%size;
            }
            else{
              return select;
            }
          });
          this.changeMenu(this.state.onMenu,updatedTracker);
        } 
    }
}

  render(){
    const {menuItems,tracker,onMenu}=this.state;
    return (
      <div className="App">
        <Navbar 
         menuItems = {menuItems} 
         tracker = {tracker} 
         onMenu = {onMenu}
        //  title={onMenu===0?'Ipod':menuItems[tracker[onMenu-1]+1].title}
        />
        
        <Screen  
           menuItems = {menuItems} 
           tracker = {tracker} 
           onMenu = {onMenu}
        />

        <Wheel 
          selectbtn = {this.selectbtn} 
          backbtn = {this.backbtn} 
        />
      </div>
    );
  }
}

export default App;
