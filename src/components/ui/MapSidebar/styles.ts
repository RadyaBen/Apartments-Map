import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	card: {
		position: 'relative',
		maxWidth: 260,
		height: 320,
		margin: 8,
		borderRadius: 10
	},
	image: {
		minWidth: 250,
		minHeight: 230
	},
	overlay: {
		position: 'absolute',
		top: '62.5%',
		left: 0,
		textAlign: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		color: '#fff',
		borderRadius: 5
	}
});

export { useStyles };