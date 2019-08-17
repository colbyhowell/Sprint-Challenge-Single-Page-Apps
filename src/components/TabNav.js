import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

// const panes = [
//   {
//     menuItem: "Home",
//     render: () => (
//       <NavLink to="/">
//         <Tab.Pane />
//       </NavLink>
//     )
//   },
//   {
//     menuItem: "Characters",
//     render: () => (
//       <NavLink to="/characters">
//         <Tab.Pane />
//       </NavLink>
//     )
//   },
//   {
//     menuItem: "Episodes",
//     render: () => (
//       <NavLink to="/episodes">
//         <Tab.Pane />
//       </NavLink>
//     )
//   },
//   {
//     menuItem: "Locations",
//     render: () => (
//       <NavLink to="/locations">
//         <Tab.Pane />
//       </NavLink>
//     )
//   }
// ];

// const TabExampleBasic = () => <Tab panes={panes} />;

// export default TabExampleBasic;

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <NavLink to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/characters">
          <Menu.Item
            name="characters"
            active={activeItem === "characters"}
            onClick={this.handleItemClick}
          >
            Characters
          </Menu.Item>
        </NavLink>

        <NavLink to="/episodes">
          <Menu.Item
            name="episodes"
            active={activeItem === "episodes"}
            onClick={this.handleItemClick}
          >
            Episodes
          </Menu.Item>
        </NavLink>

        <NavLink to="/locations">
          <Menu.Item
            name="locations"
            active={activeItem === "locations"}
            onClick={this.handleItemClick}
          >
            Locations
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}
