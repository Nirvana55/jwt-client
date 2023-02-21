import { TextField, Box, Button } from '@mui/material';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { SnackBarContext } from '../../App';
import { API } from '../../config/axios';

interface formData {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	password: string;
	confirmPassword: string;
}

function SignUp() {
	const { handleSnackBar, setIsHandleSnackBar } = useContext(SnackBarContext);

	const [formData, setFormDate] = useState<formData>({
		firstName: '',
		lastName: '',
		email: '',
		address: '',
		password: '',
		confirmPassword: '',
	});

	const signUp = useMutation({
		mutationFn: async (allFormData: formData) => {
			await API.post(`v1/auth/register`, allFormData);
		},
		onSuccess: (data) => {
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'success',
				isMessage: 'Hello ! Success',
			});
		},
		onError: (err) => {
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'error',
				isMessage: 'Hello ! Error',
			});
		},
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		e.preventDefault();
		setFormDate({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		signUp.mutate(formData);
		setFormDate({
			firstName: '',
			lastName: '',
			email: '',
			address: '',
			password: '',
			confirmPassword: '',
		});
	};

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				component='form'
				onSubmit={(e) => handleSubmit(e)}
				autoComplete='off'>
				<TextField
					required
					name='firstName'
					type='text'
					value={formData.firstName}
					onChange={(e) => handleChange(e)}
					label='First Name'
				/>
				<TextField
					required
					type='text'
					name='lastName'
					value={formData.lastName}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 2 }}
					label='Last Name'
				/>
				<TextField
					required
					name='email'
					type='email'
					value={formData.email}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 2 }}
					label='E-mail'
				/>
				<TextField
					required
					name='address'
					type='text'
					value={formData.address}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 2 }}
					label='Address'
				/>
				<TextField
					required
					type='password'
					name='password'
					value={formData.password}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 2 }}
					label='Password'
				/>
				<TextField
					required
					type='password'
					name='confirmPassword'
					value={formData.confirmPassword}
					onChange={(e) => handleChange(e)}
					sx={{ mt: 2 }}
					label='Confirm Password'
				/>
				<Button type='submit' sx={{ marginTop: 2 }} variant='contained'>
					Submit
				</Button>
			</Box>
		</>
	);
}

export default SignUp;
