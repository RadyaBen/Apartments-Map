import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Box,
	Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useStyles } from './styles';

const MapHeader = () => {

	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar>
				<Box className={classes.root}>
					<Button
						variant='outlined'
						size='large'
						color='inherit'
						startIcon={<AddIcon />}
						component={Link}
						to={`/createAd/`}
					>
						Create Ad
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export { MapHeader };