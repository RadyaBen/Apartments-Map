import { useJsApiLoader } from '@react-google-maps/api';

import { Map } from '../Map';
import { MapHeader } from '../../components/ui/MapHeader';
import { Spinner } from '../../components/ui/Spinner';

const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
	lat: 50.450001,
	lng: 30.523333
};

const MainPage = () => {

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: API_KEY!
	});

	return (
		<>
			<MapHeader />
			{isLoaded ? <Map center={defaultCenter} /> : <Spinner />}
		</>
	);
};

export { MainPage };