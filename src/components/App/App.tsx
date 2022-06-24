import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

import { Map } from '../../containers/Map';
import { MapSidebar } from '../MapSidebar';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 50.450001,
	lng: 30.523333
};

const App: React.FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: API_KEY!
	});

	return (
		<>
			<MapSidebar />
			{isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
		</>
	);
};

export { App };