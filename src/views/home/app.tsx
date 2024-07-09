import * as React from 'react';
import {useState} from 'react';
import {createRoot} from 'react-dom/client';
import Map from 'react-map-gl';
import ControlPanel from './control-panel';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicnlrciIsImEiOiJjbHhjcWxiaDYwZmhrMnFvYWtlbDRlNzFzIn0.u3zAq2Ye9gGAzmkqijKMyQ'; // Set your mapbox token here

export default function App() {
  const [mapStyle, setMapStyle] = useState(null);
  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.805,
          longitude: -122.447,
          zoom: 15.5
        }}
        mapStyle={mapStyle && mapStyle.toJS()}
        styleDiffing
        mapboxAccessToken={MAPBOX_TOKEN}
      />

      <ControlPanel onChange={setMapStyle} />
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<App />);
}

/* 
<link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet">
    <style>
      body {
        margin: 0;
        font-family: Helvetica, Arial, sans-serif;
      }
      #map {
        width: 100vw;
        height: 100vh;
      }
      .control-panel {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 320px;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        padding: 12px 24px;
        margin: 20px;
        font-size: 13px;
        line-height: 2;
        color: #6b6b76;
        text-transform: uppercase;
        outline: none;
      }

      label {
        display: inline-block;
        width: 150px;
      }

      input {
        margin-left: 20px;
      }
    </style>
 */