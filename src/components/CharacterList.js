import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [charList, setCharList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(chars => {
        console.log(chars);
        setCharList(chars.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {charList.map(chars => {
          return `${chars.name}`;
        })}
      </h2>
    </section>
  );
}
