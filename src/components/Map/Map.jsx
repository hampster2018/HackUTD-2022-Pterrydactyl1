import "./Map.css"
import React from "react";
import {
    MapContainer,
    TileLayer,
    useMapEvents
} from "react-leaflet";
import { useState, useEffect } from "react"
import * as L from "leaflet";
import Navbar from "../Navbar/Navbar";

export default function Map() {
    const [render, setRender] = useState(null)

    const [lat, setLat] = useState(32.98704180272128);
    const [lng, setLng] = useState(-96.75010732867524);

    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }
    );

    const GetLatLngFromClick = () => {
        const map = useMapEvents({
            click(e) {
                const latLng = e.latlng;
                setLat(latLng.lat); //set the latitude
                setLng(latLng.lng); //and the longitude based on where the user clicked on the map
            },
        });
        return <></>;
    };

    const [storeData, setStoreData] = useState([]);
    const getStoreData = () => {
        const API_KEY = process.env.REACT_APP_GOOGLE_MAP
        const URL = `https://glacial-bastion-99092.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify({
                key: API_KEY,
                location: [{ lat }, { lng }],
                radius: 10000,
                type: "grocery store"
            }),
            headers: {headers}
        })
            .then((res) => {
                res.json();
                console.log(res.json())
            })
            .then((post) => {
                console.log(post)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        getStoreData();

    })

    navigator.geolocation.getCurrentPosition(
        function (position) {
            console.log(position);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
        }
    );



    return (
        <>
            <Navbar></Navbar>
            <h1 id="MapTitle">Find locations Near You!</h1>
            <div id="map">
                <MapContainer center={L.latLng(lat, lng)} zoom={15} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {<GetLatLngFromClick />}
                </MapContainer>
            </div>
            <p id="MapText">
                To better help you find resources, we have marked all food banks and
                supermarkets that are currently open near your location. If you wish to be notified
                when pantries and food banks are going to open up near you, sign up for our email notifications today.
            </p>
        </>
    );

}