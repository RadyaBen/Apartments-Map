import { Link } from 'react-router-dom';
import {
	AppBar,
	Toolbar,
	Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useStyles } from './styles';

const MapHeader = () => {

	const classes = useStyles();

	return (
		<AppBar position='static'>
			<Toolbar>
				<Button
					className={classes.button}
					variant='outlined'
					size='large'
					color='inherit'
					startIcon={<AddIcon />}
					component={Link}
					to={`/createAd/`}
				>
					Create Ad
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export { MapHeader };