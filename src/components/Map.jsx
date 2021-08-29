import React from 'react';

import styled from 'styled-components';

import LocationIcon from '../images/icon-location.svg';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const StyledMap = styled(MapContainer)`
	width: 100%;
	height: calc(100vh - 13rem);
	z-index: 1;
`;

const myIcon = L.icon({
	iconUrl: LocationIcon,
	iconSize: [33, 40],
	iconAnchor: [12.5, 41],
	popupAnchor: [0, -41],
});

function ChangeView(props) {
	const map = useMap();
	map.flyTo(props.center, props.zoom);
	return null;
}

function Map({ position }) {
	return (
		<StyledMap
			center={position}
			zoom={14}
			scrollWheelZoom={true}
			zoomControl={false}
			touchZoom={true}
		>
			<ChangeView center={position} zoom={14} />
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position} icon={myIcon}></Marker>
		</StyledMap>
	);
}

export default Map;
