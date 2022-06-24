import { 
	Box, 
	Card, 
	CardMedia, 
	CardContent, 
	Drawer, 
	Typography, 
	Grid 
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Apartments } from '../../data';

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
		margin: 10,
		borderRadius: 30
	},
	image: {
		minWidth: 250,
		minHeight: 230
	}
});

const MapSidebar = () => {

	const classes = useStyles();

	return (
		<>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				anchor='right'
				classes={{ paper: classes.drawerPaper }}>
				{Apartments.map(apartment => (
					<Grid item container spacing={1} key={apartment.id} >
						<Grid item xs={12} >
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
					</Grid>
				))}
			</Drawer>
		</>
	);
};

export { MapSidebar }