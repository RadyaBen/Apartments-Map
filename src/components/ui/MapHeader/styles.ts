import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
        '& .MuiButton-outlined': {
            textTransform: 'capitalize',
            '&:hover': {
                backgroundColor: '#4c7fe7',
                color: '#fff'
            }
        }
    }
});

export { useStyles };