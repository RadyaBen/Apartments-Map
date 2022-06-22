import { Marker } from '@react-google-maps/api';

type MarkerProps = {
	position: {
		lat: number,
		lng: number
	}
};

const MapMarker = ({ position }: MarkerProps) => {
	return (
		<Marker position={position} />
	);
};

export { MapMarker }