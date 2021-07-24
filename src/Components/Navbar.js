import React from "react";
import "../css/navbar.css";

//navbar which indicates the flow of motion on the ipod.
//displays battery and wifi icon on the top left.
class Navbar extends React.Component {
  getTitle = () => {
    const { onMenu, menuItems, tracker } = this.props;

    switch (onMenu) {
      case 1:
        return menuItems[tracker[onMenu - 1] + 1].title;
      case 2:
        return menuItems[tracker[onMenu - 2] + 1].list[tracker[onMenu - 1]];
      default:
        return "Ipod";
    }
  };

  render() {
    return (
      <div id="navbar">
        <div>
          <i className="fas fa-wifi"></i>
        </div>
        <div>{this.getTitle()}</div>
        <div>
          <img
            style={{ height: 25 }}
            src="https://image.flaticon.com/icons/png/512/3103/3103446.png"
            alt="battery"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
