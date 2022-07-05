import {
	Box,
	Card,
	CardMedia,
	CardContent,
	Drawer,
	Grid,
	Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { IApartmentItem } from '../../types/apartments';

const drawerWidth = 280;

const useStyles = makeStyles({
	drawer: {
		width: drawerWidth
	},
	drawerPaper: {
		width: drawerWidth
	},
	mapCard: {
		maxWidth: 260,
		height: 320,
		margin: 8,
		borderRadius: 10
	},
	image: {
		minWidth: 250,
		minHeight: 230
	},
	message: {
		fontSize: [30, '!important'] as unknown as number,
		margin: 'auto !important' as 'auto'
	}
});

type ClickedMarkersProps = {
	clickedMarkers: IApartmentItem[]
};

const MapSidebar = ({ clickedMarkers }: ClickedMarkersProps) => {

	const classes = useStyles();

	return (
		<>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='right'
				classes={{ paper: classes.drawerPaper }}
			>
				{clickedMarkers.length === 0 ? (
					<Typography className={classes.message}>No apartments yet</Typography>
				) : (
					<Grid container spacing={1}>
						{clickedMarkers && clickedMarkers.map((apartment) => (
							<Grid item key={apartment.id} xs={12}>
								<Card elevation={3} className={classes.mapCard} >
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
			</Drawer>
		</>
	);
};

export { MapSidebar }