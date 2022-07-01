import {
	useState,
	useEffect,
	useRef,
	useCallback
} from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { makeStyles } from '@mui/styles';

import { IApartmentItem } from '../../types/apartments';
import { Apartments } from '../../data';
import { MapMarker } from '../MapMarker';
import { MapSidebar } from '../../components/MapSidebar';

const useStyles = makeStyles({
	container: {
		width: '100wh',
		height: '100vh'
	},
});

const mapContainerStyle = {
	width: '80%',
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
	const [clickedMarkers, setClickedMarkers] = useState<IApartmentItem[]>([]);

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

	const handleAddToSidebar = (clickedItem: IApartmentItem): void => {
		// Is the apartment already added in the sidebar?
		const isItemInSidebar = clickedMarkers.find(item => item.id === clickedItem.id);

		if (!isItemInSidebar) {
			setClickedMarkers([...clickedMarkers, { ...clickedItem }]);
		}
	};

	return (
		<>
			<MapSidebar clickedMarkers={clickedMarkers} />
			<div className={classes.container}>
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
			</div>
		</>
	);
};

export { Map }