import React from "react";
import { Tab } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

const panes = [
  {
    menuItem: "Home",
    render: () => (
      <NavLink to="/">
        <Tab.Pane />
      </NavLink>
    )
  },
  {
    menuItem: "Characters",
    render: () => (
      <NavLink to="/characters">
        <Tab.Pane />
      </NavLink>
    )
  },
  {
    menuItem: "Episodes",
    render: () => (
      <NavLink to="/episodes">
        <Tab.Pane />
      </NavLink>
    )
  },
  {
    menuItem: "Locations",
    render: () => (
      <NavLink to="/locations">
        <Tab.Pane />
      </NavLink>
    )
  }
];

const TabExampleBasic = () => <Tab panes={panes} />;

export default TabExampleBasic;
