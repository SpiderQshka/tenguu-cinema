import React from "react";
import { YMaps, Map } from "react-yandex-maps";

export const MapComponent = () => {
  return (
    <YMaps>
      <div id="map">
        <Map
          defaultState={{ center: [53.91172, 27.633786], zoom: 12 }}
          width="100%"
          height="400px"
        />
      </div>
    </YMaps>
  );
};
