import { useRef, useCallback } from 'react';
import { GoogleMap } from '@react-google-maps/api';

import './Map.scss';

const mapContainerStyle = {
	width: '100%',
	height: '100%'
};

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapTypeControl: false,
	scaleControl: false,
	streetViewControl: false,
	rolateControl: false,
	keyboardShortcuts: false,
	fullscreenControl: false
};

type CenterProps = {
	center: {
		lat: number,
		lng: number
	}
};

const Map = ({ center }: CenterProps) => {

	// Save map in ref if we want to access the map
	const mapRef = useRef<google.maps.Map | null>(null);

	const onMapLoad = useCallback((map: google.maps.Map): void => {
		mapRef.current = map;
	}, []);

	const onMapUnmount = useCallback((): void => {
		mapRef.current = null;
	}, []);

	return (
		<div className='container'>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={10}
				onLoad={onMapLoad}
				onUnmount={onMapUnmount}
				options={defaultOptions}
			>
			</GoogleMap>
		</div>
	);
};

export { Map }