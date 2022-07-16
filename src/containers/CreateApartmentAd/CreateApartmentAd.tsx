import { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import {
	Box,
	Grid,
	Paper,
	Typography,
	Button
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAxiosFetch } from '../../hooks/useFetch.hook';
import { IApartmentItem } from '../../types/apartments';
import { FormInput, formSchema } from '../../components/FormInput';

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
		height: 440
	}
});

const CreateApartmentAd = () => {

	const methods = useForm<IApartmentItem>({
		resolver: zodResolver(formSchema),
		mode: 'onChange'
	});
	const { sendApartmentData } = useAxiosFetch();
	const navigate = useNavigate();
	const classes = useStyles();

	const {
		reset,
		handleSubmit,
		formState: { isSubmitSuccessful },
	} = methods;

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSubmitSuccessful]);

	const handleFormSubmit: SubmitHandler<IApartmentItem> = async (formValues) => {
		createNewAd(formValues);
	};

	const createNewAd = (formValues: IApartmentItem) => {
		let lat = Number((Math.random() * (45 - 35) + 45).toFixed(6));
		let lng = Number((Math.random() * (45 - 35) + 45).toFixed(6));

		sendApartmentData && sendApartmentData({
			method: 'POST',
			url: '/apartments',
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			},
			data: {
				id: uuidv4(),
				image: formValues.image,
				description: formValues.description,
				address: formValues.address,
				lat: lat,
				lng: lng,
				rent: formValues.rent
			}
		});

		redirectToMapPage();
	};

	const redirectToMapPage = () => {
		navigate('/');
	};

	return (
		<div className={classes.container}>
			<FormProvider {...methods}>
				<Box
					className={classes.root}
					component='form'
					onSubmit={handleSubmit(handleFormSubmit)}
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
							<FormInput
								name='image'
								label='Image Link'
								placeholder='Enter an apartment image link'
								fullWidth
								variant='standard'
							/>
							<FormInput
								name='description'
								label='Description'
								placeholder='Enter an apartment description'
								fullWidth
								variant='standard'
							/>
							<FormInput
								name='address'
								label='Address'
								placeholder='Enter an apartment address'
								fullWidth
								variant='standard'
							/>
							<FormInput
								name='rent'
								label='Rent'
								placeholder='Enter an apartment rent'
								fullWidth
								variant='standard'
							/>
							<Button
								variant='contained'
								fullWidth
								type='submit'
							>
								Create
							</Button>
						</Grid>
					</Paper>
				</Box>
			</FormProvider>
		</div>
	);
};

export { CreateApartmentAd }