import { 
	AppBar, 
	Box, 
	Toolbar
} from '@mui/material';

const MapHeader = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<div>Header</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export { MapHeader }