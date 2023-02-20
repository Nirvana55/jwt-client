import { Typography, TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useMutation } from 'react-query';
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
	});

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
					type='text'
					value={formData.firstName}
					onChange={(e) =>
						setFormDate({ ...formData, firstName: e.target.value })
					}
					label='First Name'
				/>
				<TextField
					required
					type='text'
					value={formData.lastName}
					onChange={(e) =>
						setFormDate({ ...formData, lastName: e.target.value })
					}
					sx={{ mt: 2 }}
					label='Last Name'
				/>
				<TextField
					required
					type='email'
					value={formData.email}
					onChange={(e) => setFormDate({ ...formData, email: e.target.value })}
					sx={{ mt: 2 }}
					label='E-mail'
				/>
				<TextField
					required
					type='text'
					value={formData.address}
					onChange={(e) =>
						setFormDate({ ...formData, address: e.target.value })
					}
					sx={{ mt: 2 }}
					label='Address'
				/>
				<TextField
					required
					type='text'
					value={formData.password}
					onChange={(e) =>
						setFormDate({ ...formData, password: e.target.value })
					}
					sx={{ mt: 2 }}
					label='Password'
				/>
				<TextField
					required
					type='text'
					value={formData.confirmPassword}
					onChange={(e) =>
						setFormDate({ ...formData, confirmPassword: e.target.value })
					}
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
