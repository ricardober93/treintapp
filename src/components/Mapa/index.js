import React, { useEffect, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { locations } from 'locations/location'
import Navbar from 'components/Navbar/index'
import useUser, {USER_STATES}  from "hook/useUser";
import { useHistory } from "react-router-dom";

export default function Mapa() {
    const DEFAULT_VIEWPORT = {
        center: [4.6552768, -74.1144458,15],
        zoom: 17,
    }
    const user = useUser()

    const history = useHistory()

    
    const [location] = useState(DEFAULT_VIEWPORT)

        useEffect(() => {
        if (user === USER_STATES.NOT_LOGGED) {
            history.push('/login')
        }
        }, [user, history])
    console.log(user)
    return (
        <div className="MapView">
            <Navbar />
            <Map
                viewport={location}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    locations.map(( {position, icon, descripcion}, i) => (
                        <Marker
                            key={i}
                            position={ position }
                            icon={icon}
                        >
                            <Popup>
                            {descripcion}
                            </Popup> 
                        </Marker>
                    ))
                }
            </Map>
        </div>
    )
}
