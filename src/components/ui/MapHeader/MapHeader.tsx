import { Link } from 'react-router-dom';
import { 
	AppBar, 
	Toolbar, 
	Button 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MapHeader = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Button 
					sx={{ marginLeft: 'auto' }} 
					variant='outlined' 
					size='large' 
					color='inherit'
					style={{ textTransform: 'capitalize' }} 
					endIcon={<AddIcon />}
					component={Link}
					to={`/createAd/`}
				>
					To Rent
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export { MapHeader }