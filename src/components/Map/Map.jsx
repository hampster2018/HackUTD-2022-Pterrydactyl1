import "./Map.css"
import React from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents
} from "react-leaflet";
import { useState } from "react"
import * as L from "leaflet";
import { useEffect } from "react";

function LocationMarker (props) {

    const [position, setPosition] = useState(props.latLng)
    
    useEffect(() => {
        setPosition(props.latLng);
    });

    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latLng)
            map.flyTo(e.latlng, map.getZoom())
        }
    });
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
};

export default function Map() {

    const [userPosition, setPosition] = useState(null);

    navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log(position);
            setPosition(L.latLng(position));
        }
    );

    return (
        <div id="map">
            <MapContainer center={userPosition} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker latLng={userPosition}/>
            </MapContainer>
        </div>
    );

}