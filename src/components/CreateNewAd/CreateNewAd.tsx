import {
	useState,
	ChangeEvent,
	FormEvent
} from 'react';
import {
	Box,
	Grid,
	Paper,
	Typography,
	TextField,
	Button
} from '@mui/material';
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
			marginTop: 48,
			fontSize: '1.2em',
			textTransform: 'capitalize',
			background: '#7571f9',
			'&:hover': {
				backgroundColor: '#3c52b2'
			}  
		}
	},
	paper: {
		padding: '40px',
		height: 430
	}
});

type IFormValuesState = {
	image: string,
	description: string,
	adress: string,
	rent: string
};

const CreateNewAd = () => {

	const classes = useStyles();
	const [formValues, setFormValues] = useState<IFormValuesState>({
		image: '',
		description: '',
		adress: '',
		rent: ''
	});

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value
		});
	};

	const handleFormSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (formValues) {
			setFormValues({
				image: '',
				description: '',
				adress: '',
				rent: ''
			});
		}
	};

	return (

		<div className={classes.container}>
			<Box
				className={classes.root}
				component='form'
				onSubmit={handleFormSubmit}
				noValidate
				autoComplete='off'
			>
				<Paper elevation={20} className={classes.paper}>
					<Grid
						container
						spacing={0}
						direction='column'
						alignItems='center'
						justifyContent='center'
					>
						<Grid item xs={12} sm={6} md={4}>
							<Typography
								variant='h4'
								component='h1'
							>
								Create a New Ad
							</Typography>
						</Grid>
						<TextField
							name='image'
							label='Image'
							placeholder='Enter an apartment image'
							fullWidth
							value={formValues.image}
							onChange={handleInputChange}
							variant='standard'
						/>
						<TextField
							name='description'
							label='Description'
							placeholder='Enter an apartment description'
							fullWidth
							value={formValues.description}
							onChange={handleInputChange}
							variant='standard'
						/>
						<TextField
							name='adress'
							label='Adress'
							placeholder='Enter an apartment adress'
							fullWidth
							value={formValues.adress}
							onChange={handleInputChange}
							variant='standard'
						/>
						<TextField
							name='rent'
							label='Rent'
							placeholder='Enter an apartment rent'
							fullWidth
							value={formValues.rent}
							onChange={handleInputChange}
							variant='standard'
						/>
						<Button
							type='submit'
							variant='contained'
							fullWidth
						>
							Create
						</Button>
					</Grid>
				</Paper>
			</Box>
		</div>
	);
};

export { CreateNewAd }