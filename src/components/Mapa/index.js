import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { locations } from 'locations/location'


export default function Mapa() {
    const DEFAULT_VIEWPORT = {
        center: [4.6552768, -74.1144458,15],
        zoom: 15,
    }
    
    const [location] = useState(DEFAULT_VIEWPORT)
    return (
        <div>
            <Map
                viewport={location}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    locations.map(( {position, icon, descripcion}) => (
                        <Marker
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
