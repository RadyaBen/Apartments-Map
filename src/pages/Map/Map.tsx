import {
	useState,
	useEffect,
	useRef,
	useCallback
} from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { CssBaseline, Grid } from '@mui/material';

import { IApartmentItem } from '../../types/apartments';
import { useAxiosFetch } from '../../hooks/useFetch.hook';
import { MapMarker } from '../../components/ui/MapMarker';
import { MapSidebar } from '../../components/ui/MapSidebar';
import { defaultOptions } from './defaultOptions';
import { useStyles, mapContainerStyle } from './styles';

type CenterProps = {
	center: {
		lat: number,
		lng: number
	}
};

const Map = ({ center }: CenterProps) => {

	const [apartments, setApartments] = useState<IApartmentItem[]>([]);
	const [clickedMarkers, setClickedMarkers] = useState<IApartmentItem[]>([]);
	const { response, error, loading } = useAxiosFetch({
		method: 'GET',
		url: '/apartments',
		headers: {
			'Content-Type': 'application/json',
			'accept': 'application/json'
		}
	});
	const classes = useStyles();

	// Save map in ref if we want to access the map
	const mapRef = useRef<google.maps.Map | null>(null);

	useEffect(() => {
		if (response !== null) {
			setApartments(response);
		}
	}, [response]);

	useEffect(() => {
		if (error) {
			console.log(error);
		}
	}, [error]);

	useEffect(() => {
		if (loading) {
			console.log('Loading data...');
		}
	}, [loading]);

	const onMapLoad = useCallback((map: google.maps.Map): void => {
		mapRef.current = map;
	}, []);

	const onMapUnmount = useCallback((): void => {
		mapRef.current = null;
	}, []);

	const handleAddToSidebar = (clickedItem: IApartmentItem): void => {
		// Is the apartment already added in the sidebar?
		const isItemInSidebar = clickedMarkers.find(item => item.id === clickedItem.id);

		if (!isItemInSidebar) {
			setClickedMarkers([...clickedMarkers, { ...clickedItem }]);
		}
	};

	return (
		<>
			<CssBaseline />
			<div className={classes.container}>
				<Grid container>
					<Grid item xs={8} md={9.5} sm={8}>
						<GoogleMap
							mapContainerStyle={mapContainerStyle}
							center={center}
							zoom={10}
							onLoad={onMapLoad}
							onUnmount={onMapUnmount}
							options={defaultOptions}
						>
							{apartments.map((apartment) => (
								<MapMarker
									key={apartment.id}
									position={{
										lat: apartment.lat,
										lng: apartment.lng
									}}
									onClick={() => handleAddToSidebar(apartment)}
								/>
							))}
						</GoogleMap>
					</Grid>
					<Grid item xs={4} md={2.5} sm={4} className={classes.sidebar}>
						<MapSidebar clickedMarkers={clickedMarkers} />
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export { Map }