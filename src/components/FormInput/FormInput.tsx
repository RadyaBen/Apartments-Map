import { Controller, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

type IFormInputProps = {
	name: string;
} & TextFieldProps;

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		bottom: '-1.8em'
	}
});

const FormInput = ({ name, ...otherProps }: IFormInputProps) => {

	const {
		control,
		formState: { errors },
	} = useFormContext(); // Retrieve hook methods from form provider
	const classes = useStyles();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue="" // The default value is needed so shat there is no error about uncontrolled input
			render={({ field }) => (
				<TextField
					{...otherProps}
					{...field}
					error={!!errors[name]}
					helperText={errors[name] ? errors[name]!.message as any : ''}
					FormHelperTextProps={{
						classes: {
							root: classes.root
						}
					}}
				/>
			)}
		/>
	);
};

export { FormInput };