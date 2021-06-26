import React from "react";

import Screen from "./Components/Screen";
import Wheel from "./Components/Wheel";

import ZingTouch from "zingtouch";
import "./css/pad.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          //main menu
          title: "Ipod.js",
          list: [
            { name: "Photos", id: 0 },
            { name: "Music", id: 1 },
            { name: "Games", id: 2 },
            { name: "Settings", id: 3 },
          ],
        },
        {
          //menu for photos
          title: "Photos",
          list: [
            { name: "All Photos", id: 0 },
            { name: "Favourites", id: 1 },
          ],
        },
        {
          //menu for music
          title: "Music",
          list: [
            { name: "Now Playing", id: 0 },
            { name: "Playlist", id: 1 },
            { name: "Artists", id: 2 },
            { name: "Audiobooks", id: 3 },
          ],
        },
        {
          //menu for games
          title: "Games",
          list: [
            { name: "Pac man", id: 0 },
            { name: "Sonic", id: 1 },
          ],
        },
        {
          //menu for settings
          title: "Settings",
          list: [
            { name: "About", id: 0 }
          ],
        },
      ],
      //Array used for navigating through different pages/menu's of the ipod
      //indexes defines the current page
      //values defines the active class of the menu.
      tracker: [0, 0, 0],

      //used for track current page/menu shown on the display.
      onMenu: 0,
    };
    //used to detect the change in angle while rotation of the wheeel
    this.angle = 0;
  }

  componentDidMount() {
    const wheel = document.getElementById("wheel");
    const region = new ZingTouch.Region(wheel);
    region.bind(wheel, "rotate", (event) => {
      this.move(event);
    });
  }

  //function for moving forward on the particular option seleted
  selectbtn = () => {
    const nextMenu = this.state.onMenu < 2 ? this.state.onMenu + 1 : 2;
    this.setState({
      onMenu: nextMenu,
    });
  };

  //function for travelling back
  backbtn = () => {
    const { tracker, onMenu } = this.state;

    const updatedtracker = tracker.map((value, index) => {
      if (index === onMenu) {
        return 0;
      } else {
        return value;
      }
    });

    const previousMenu = (onMenu > 0 ? onMenu - 1 : 0) % 3;

    this.setState({
      onMenu: previousMenu,
      tracker: updatedtracker,
    });
  };

  //function used to change/update the tracker array
  changeMenu = (currentMenu, updatedTracker) => {
    this.setState({
      onMenu: currentMenu,
      tracker: updatedTracker,
    });
  };

  //function used to detect any motion on the wheel
  move = (event) => {
    const { onMenu, menuItems, tracker } = this.state;

    if (onMenu >= 2) {
      return;
    }

    let size = 4;

    //find size of list.
    if (onMenu > 0) {
      size = menuItems[tracker[onMenu - 1] + 1].list.length;
    }

    if (event.detail.distanceFromOrigin === 0) {
      this.angle = event.detail.angle;
    }

    if (Math.abs(this.angle - event.detail.angle) > 15) {
      this.angle = Math.abs(event.detail.angle);

      if (event.detail.distanceFromLast === 0) {
        return;
      } else if (event.detail.distanceFromLast > 0) {
        // rotation function for clockwise direction
        const updatedTracker = tracker.map((select, index) => {
          if (index === onMenu) {
            return (select + 1) % size;
          } else {
            return select;
          }
        });

        this.changeMenu(onMenu, updatedTracker);
      } else if (event.detail.distanceFromLast < 0) {
        // rotation function for anti-clockwise direction
        const updatedTracker = tracker.map((select, index) => {
          if (index === onMenu) {
            return (select - 1 < 0 ? size - 1 : select - 1) % size;
          } else {
            return select;
          }
        });
        this.changeMenu(onMenu, updatedTracker);
      }
    }
  };

  render() {
    const { menuItems, tracker, onMenu } = this.state;
    return (
      <div className="App">
        <div id="pad">
          <Screen menuItems={menuItems} tracker={tracker} onMenu={onMenu} />
          <Wheel selectbtn={this.selectbtn} backbtn={this.backbtn} />
        </div>
      </div>
    );
  }
}

export default App;
