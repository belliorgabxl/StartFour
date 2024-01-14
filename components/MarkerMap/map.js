import React, { useState, useEffect } from 'react';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import style from "../MarkerMap/mark.module.css";

const position = [13.729806, 100.778082];

const Map = ({ searchlocat }) => {
  const [dormData, setDormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/getDors");
        const json = await res.json();

        if (json && json.dormitory && Array.isArray(json.dormitory)) {
          setDormData(json.dormitory);
        } else {
          console.error("Fetched data is not in the expected format:", json);
          setDormData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredDorms = dormData.filter((item) => {
    const dormNameIncludes = (item.dorm_name || '').toLowerCase().includes((searchlocat || '').toLowerCase());
    const locationIncludes = (item.location || '').toLowerCase().includes((searchlocat || '').toLowerCase());

    return dormNameIncludes || locationIncludes;
  });
  
  return (
    <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredDorms.map((item) => {
        const lat = parseFloat(item.lat);
        const long = parseFloat(item.long);

        if (!isNaN(lat) && !isNaN(long)) {
          return (
            <Marker key={item._id} position={[lat, long]}>
              <Popup>
                <div>
                  <h3>{item.dorm_name}</h3>
                  <p>Type: {item.type}</p>
                  <p>Location: {item.location}</p>
                  <img src={item.img} alt={item.dorm_name} style={{ maxWidth: "100%" }} />
                  <p>Price: {item.price}</p>
                  <p>Details: {item.detail}</p>
                </div>
              </Popup>
              <Tooltip permanent direction="top">{item.price} Bath</Tooltip>
            </Marker>

          );
        } else {
          //console.error("Invalid latitude or longitude values:", item.lat, item.long);
          return null;
        }
      })}
      <Marker position={position}>
        <Popup>You're Here</Popup>
        <Tooltip permanent direction="top">KMITL</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
