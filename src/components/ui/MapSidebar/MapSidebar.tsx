import {
	Box,
	Card,
	CardMedia,
	CardContent,
	Grid,
	Typography
} from '@mui/material';

import { IApartmentItem } from '../../../types/apartments';
import { useStyles } from './styles';

type ClickedMarkersProps = {
	clickedMarkers: IApartmentItem[]
};

const MapSidebar = ({ clickedMarkers }: ClickedMarkersProps) => {

	const classes = useStyles();

	return (
		<>
			{clickedMarkers.length === 0 ? (
				<Typography
					sx={{
						fontSize: {
							xs: 14,
							sm: 25,
							md: 20,
							lg: 30
						}
					}}
				>
					No apartments yet
				</Typography>
			) : (
				<Grid container spacing={1} style={{ height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
					{clickedMarkers && clickedMarkers.map((apartment) => (
						<Grid item xs key={apartment.id} >
							<Card elevation={3} className={classes.mapCard}>
								<CardMedia
									className={classes.image}
									component='img'
									alt={apartment.description}
									image={apartment.image}
									title='Apartment Image'
								/>
								<CardContent>
									<Typography variant='body1' component='h2'>
										<Box fontWeight={600}>{apartment.description}</Box>
									</Typography>
									<Typography variant='body2' component='h2'>
										{apartment.address}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			)}
		</>
	);
};

export { MapSidebar };