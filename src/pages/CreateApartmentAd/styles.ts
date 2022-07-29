import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		background: '#F3F3F9'
	},
	root: {
		width: 500,
		'& .MuiTextField-root': {
			marginTop: 20,
			margintBottom: 20
		},
		'& .MuiTypography-root': {
			margin: 10
		},
		'& .MuiButton-root': {
			width: '48%',
			marginTop: 48,
			fontSize: '1.2em',
			textTransform: 'capitalize',
		},
		'& .MuiButton-outlined': {
			border: '2px solid #90a4ae',
			color: '#64748B',
			'&:hover': {
				backgroundColor: '#eaeded',
				border: '2px solid #90a4ae',
			}
		},
		'& .MuiButton-contained': {
			background: '#7571f9',
			'&:hover': {
				backgroundColor: '#3c52b2'
			}
		}
	},
	paper: {
		padding: '40px',
		height: 440
	},
	buttonBox: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
});

export { useStyles };