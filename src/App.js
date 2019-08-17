import React from "react";
import MenuExampleBasic from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodesList";

export default function App() {
  return (
    <div className="wrapper-div">
      <main>
        <Header />
        <MenuExampleBasic />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters" component={CharacterList} />
        <Route path="/locations" component={LocationList} />
        <Route path="/episodes" component={EpisodeList} />
      </main>
    </div>
  );
}
