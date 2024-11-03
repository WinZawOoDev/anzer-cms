'use client'

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import React, { useState } from 'react'
import * as L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const latitude = 16.871311;
const longitude = 96.199379;
const zoom = 16;

const customMarkerIcon = L.icon({
    iconUrl: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 24 24" fill="none" stroke="#D01B23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
  `)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
});


export default function MapLeaflet() {

    const [map, setMap] = useState({ latitude, longitude, zoom });

    return (
        <MapContainer
            center={[map.latitude, map.longitude]}
            zoom={map.zoom}
            scrollWheelZoom={false}
            style={{
                height: '300px',
                borderRadius: '2px',
            }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={customMarkerIcon} position={[latitude, longitude]}>
                <Popup>
                    <b>ANZER</b> IT Healthcare asia
                </Popup>
            </Marker>
        </MapContainer>
    )
}
