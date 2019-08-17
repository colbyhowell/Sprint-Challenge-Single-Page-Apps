import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";

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
      {locationList.map(locals => {
        return <LocationCard key={locals.name} locals={locals} />;
      })}
    </section>
  );
}
