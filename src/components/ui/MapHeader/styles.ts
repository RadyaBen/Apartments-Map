import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	button: {
		marginLeft: 'auto',
		textTransform: 'capitalize',
		'&:hover': {
			backgroundColor: '#4C7FE7',
			color: '#fff'
		}
	}
});

export { useStyles };