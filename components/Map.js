
import "leaflet/dist/leaflet.css";
import styles from "./Styles/map.module.css";
import { MapContainer,TileLayer ,Marker, Popup, useMapEvents} from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { useState } from "react";
function LocationMarker(){
    const [position, setPosition] = useState(null)
    const map = useMapEvents({ click()
         {map.locate()},locationfound(e) {setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())},})
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
 function Map(){
   
    return(
        <MapContainer className={styles.map} center={[13.727520, 100.776158]} zoom={20} scrollWheelZoom={true}> 
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
             <Marker position={[13.727520, 100.776158]}>
                <Popup>You're Here.</Popup>
             </Marker>
        </MapContainer>
    );
}
export default Map;