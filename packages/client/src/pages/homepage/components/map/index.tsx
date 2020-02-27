import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import styles from "./map.module.sass";

export const MapComponent = () => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [53.91172, 27.633786], zoom: 12 }}
        width="100%"
        height="400px"
      />
    </YMaps>
  );
};
