import React from "react";
import * as All from "./styling/EpisodeListStyling";

export default function EpisodeCard(props) {
  return (
    <All.EpisodeBox>
      <All.EpisodeTitle>{props.eps.name}</All.EpisodeTitle>
      <All.EpisodeNumber>Season: {props.eps.episode}</All.EpisodeNumber>
      <All.EpisodeAirDate>Air Date: {props.eps.air_date}</All.EpisodeAirDate>
    </All.EpisodeBox>
  );
}
