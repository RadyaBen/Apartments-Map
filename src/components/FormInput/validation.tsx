import { object, string } from 'zod';

const formSchema = object({
	image: string()
		.url('Image link is invalid')
		.min(1, 'Image link is required field'),
	description: string()
		.min(1, 'Description is required field')
		.min(12, 'Description must be more than 12 characters'),
	address: string()
		.min(1, 'Adress is required field')
		.min(8, 'Adress must be more than 8 characters'),
	rent: string()
		.min(1, 'Rent is required field')
		.refine((val) => !Number.isNaN(parseInt(val, 10)), {
			message: 'Expected number, received a string'
		})
});

export { formSchema }