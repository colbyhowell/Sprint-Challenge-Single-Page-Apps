import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect

  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get("https://rickandmortyapi.com/api/location/")
      .then(locals => {
        console.log(locals);
        setLocationList(locals.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      <h2>
        {locationList.map(locals => {
          return `${locals.name}`;
        })}
      </h2>
    </section>
  );
}
