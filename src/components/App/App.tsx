import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';

import { Map } from '../../containers/Map';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 50.450001,
	lng: 30.523333
};

const App = () => {

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: API_KEY!
	});

	return (
		<>
			{isLoaded ? <Map center={defaultCenter} /> : <h2>Loading...</h2>}
		</>
	);
};

export { App };