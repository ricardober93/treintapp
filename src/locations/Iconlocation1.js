import {
    icon
} from 'leaflet'

const IconLocation = icon({
    iconUrl: require('svg/location.svg'),
    iconRetinaUrl: require('svg/location.svg'),
    iconAnchor: null,
    iconSize: [35, 35],
    shadowAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    className: 'leaflet-venue-icon'
})
export default IconLocation;