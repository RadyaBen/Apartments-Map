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
		<Marker
			icon={{
				path: google.maps.SymbolPath.CIRCLE,
				fillColor: '#3377FF',
				fillOpacity: 1,
				strokeWeight: 0,
				scale: 8
			}}
			position={position}
			onClick={onClick}
		/>
	);
};

export { MapMarker };