import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	container: {
		width: '100%',
		height: '100%',
	},
	sidebar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapContainerStyle = {
	width: '100%',
	height: 'calc(100vh - 64px)'
};

export { useStyles, mapContainerStyle };