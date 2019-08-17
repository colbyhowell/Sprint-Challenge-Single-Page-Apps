import React from "react";
import TabExampleBasic from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <div className="wrapper-div">
      <main>
        <Header />
        <TabExampleBasic />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/characters/" component={CharacterList} />
      </main>
    </div>
  );
}
