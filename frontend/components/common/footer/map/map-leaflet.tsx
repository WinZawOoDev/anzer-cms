'use client'

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import React, { useContext, useState } from 'react'
import * as L from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FooterContext } from "@/context/footer-context";

const latitude = 16.871311;
const longitude = 96.199379;
const zoom = 5;

const customMarkerIcon = L.icon({
    iconUrl: `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ee172c" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
  `)}`,
    iconSize: [35, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -28],
});


export default function MapLeaflet() {

    const { selectedCountry } = useContext(FooterContext) as FooterContextType

    return (
        <MapContainer
            center={[selectedCountry.latLong?.lat!, selectedCountry.latLong?.lng!]}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{
                height: '300px',
                borderRadius: '5px',
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker icon={customMarkerIcon} position={[selectedCountry.latLong?.lat!, selectedCountry.latLong?.lng!]}>
                <Popup>
                    <b>ANZER</b> IT Healthcare asia
                </Popup>
            </Marker>
        </MapContainer>
    )
}
