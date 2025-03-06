import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [30, 45], // Slightly larger icon
  iconAnchor: [15, 45]
});

// Component to update map center dynamically
const MapUpdater = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom()); // Update the map view when position changes
  }, [position, map]);
  return null;
};

const RealTimeMap = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default location (London)

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => console.error(err),
      { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ width: "100%", height: "700px" }}> {/* Increased height */}
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: "650px", width: "100%" }} // Increased map height
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Dynamically update the map's center */}
        <MapUpdater position={position} />
        <Marker position={position} icon={customIcon}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RealTimeMap;
