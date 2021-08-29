import React from 'react';

import styled from 'styled-components';

import LocationIcon from '../images/icon-location.svg';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const StyledMap = styled(MapContainer)`
	width: 100%;
	height: calc(100vh - 13rem);
	z-index: 1;
`;

const myIcon = L.icon({
	iconUrl: LocationIcon,
	iconSize: [35, 40],
	iconAnchor: [12.5, 41],
	popupAnchor: [0, -41],
});

function Map() {
	return (
		<StyledMap
			center={[51.505, -0.09]}
			zoom={14}
			scrollWheelZoom={true}
			zoomControl={false}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]} icon={myIcon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</StyledMap>
	);
}

export default Map;
