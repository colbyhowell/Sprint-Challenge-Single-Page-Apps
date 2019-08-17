import React from "react";
import * as All from "./styling/LocationCardStyling";

export default function LocationCard(props) {
  return (
    <All.LocationBox>
      <All.LocationName>Location:{props.locals.name}</All.LocationName>
      <All.DimensionName>Dimension: {props.locals.dimension}</All.DimensionName>
      <All.CurrentResidents>
        Current Residents:
        {props.locals.residents.length}
      </All.CurrentResidents>
    </All.LocationBox>
  );
}
