import React from "react";
import * as All from "./styling/CharacterCardStyling";

export default function CharacterCard(props) {
  return (
    <All.CharacterAll className="charwhole">
      <All.SingleCharacter className="charbox">
        <All.CharacterPicture className="charpic">
          <img src={props.chars.image} />
        </All.CharacterPicture>
        <All.CharacterName>
          Name: {props.chars.name}
          <br />
        </All.CharacterName>
        <All.CharacterStatus>Status: {props.chars.status}</All.CharacterStatus>
        <All.CharacterOriginLocation>
          <ul>
            <li>Origin: {props.chars.origin.name}</li>
            <br />
            <li>Location: {props.chars.location.name}</li>
          </ul>
          <br />
          <br />
        </All.CharacterOriginLocation>
        <All.CharacterEpisodes>Episodes</All.CharacterEpisodes>
      </All.SingleCharacter>
    </All.CharacterAll>
  );
}
