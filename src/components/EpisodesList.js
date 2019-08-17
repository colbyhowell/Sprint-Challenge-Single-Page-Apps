import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect

  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/episode/")
      .then(eps => {
        console.log(eps);
        setEpisodeList(eps.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>
        {episodeList.map(eps => {
          return `${eps.name}`;
        })}
      </h2>
    </section>
  );
}
