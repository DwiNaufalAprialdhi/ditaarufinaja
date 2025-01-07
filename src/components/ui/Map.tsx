import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMapEvent } from 'react-leaflet';
import { LatLngExpression, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define a custom icon
const customIcon = new Icon({
      iconUrl: '/assets/icon/map-marker.svg', // Replace with the path to your custom marker image
      iconSize: [32, 32], // Adjust the size as needed
      iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -32], // Position of the popup relative to the icon
});

// Component to handle map click events and display clicked coordinates
function LocationMarker() {
      const [position, setPosition] = useState<LatLngExpression | null>(null);

      useMapEvent('click', (event) => {
            setPosition(event.latlng); // Set position to the clicked location's coordinates
      });

      return position ? (
            <Marker position={position} icon={customIcon}>
                  <Popup>
                        Latitude: {Array.isArray(position) ? position[0] : position.lat}, Longitude: {Array.isArray(position) ? position[1] : position.lng}
                  </Popup>
            </Marker>
      ) : null;
}

export default function Map() {
      const [isClient, setIsClient] = useState(false);
      const center: LatLngExpression = [-6.597084382546971, 106.79912567138672]; // Example: Jakarta, Indonesia

      useEffect(() => {
            setIsClient(true); // Ensure this component renders only on the client
      }, []);

      if (!isClient) return null;

      return (
            <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100%' }} zoomControl={false}>
                  <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <LocationMarker /> {/* Add the LocationMarker component */}
                  <ZoomControl position="topright" /> {/* Custom position for the zoom control */}
            </MapContainer>
      );
}
