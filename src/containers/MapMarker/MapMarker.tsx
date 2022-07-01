import { Marker } from '@react-google-maps/api';

type MarkerProps = {
	position: {
		lat: number,
		lng: number
	},
	onClick: (e: google.maps.MapMouseEvent) => void,
};

const MapMarker = ({ position, onClick }: MarkerProps) => {

	return (
		<Marker position={position} onClick={onClick} />
	);
};

export { MapMarker }