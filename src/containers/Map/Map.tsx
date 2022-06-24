import { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { makeStyles } from '@mui/styles';

import { IApartmentItem } from '../../types/apartments';
import { Apartments } from '../../data';
import { MapMarker } from '../MapMarker';

const useStyles = makeStyles({
	container: {
		width: '100wh',
		height: '100vh'
	},
});

const mapContainerStyle = {
	width: '100%',
	height: '100%'
}

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

	const classes = useStyles();

	const [apartments, setApartments] = useState<IApartmentItem[]>([]);

	// Save map in ref if we want to access the map
	const mapRef = useRef<google.maps.Map | null>(null);

	useEffect(() => {
		setApartments(Apartments);
	}, []);

	const onMapLoad = useCallback((map: google.maps.Map): void => {
		mapRef.current = map;
	}, []);

	const onMapUnmount = useCallback((): void => {
		mapRef.current = null;
	}, []);

	return (
		<div className={classes.container}>
			<GoogleMap
				mapContainerStyle={mapContainerStyle}
				center={center}
				zoom={10}
				onLoad={onMapLoad}
				onUnmount={onMapUnmount}
				options={defaultOptions}
			>
				{apartments.map((apartment, index) => (
					<MapMarker
						key={index}
						position={{
							lat: apartment.lat,
							lng: apartment.lng
						}}
					/>
				))}
			</GoogleMap>
		</div>
	);
};

export { Map }