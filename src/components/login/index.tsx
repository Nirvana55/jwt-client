import { Box, Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { SnackBarContext } from '../../App';
import { API } from '../../config/axios';

interface LoginData {
	email: string;
	password: string;
}

const Login = () => {
	const { handleSnackBar, setIsHandleSnackBar } = useContext(SnackBarContext);
	const [loginData, setLoginDate] = useState({ email: '', password: '' });

	const loginMutation = useMutation({
		mutationFn: async (loginData: LoginData) => {
			await API.post('/v1/auth/login', loginData);
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
		setLoginDate({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginMutation.mutate(loginData);
	};

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				component='form'
				autoComplete='off'
				onSubmit={(e) => handleSubmit(e)}>
				<TextField
					name='email'
					label='Email'
					type='text'
					required
					value={loginData.email}
					onChange={(e) => handleChange(e)}
				/>
				<TextField
					name='password'
					label='Password'
					type='text'
					required
					sx={{ mt: 2 }}
					value={loginData.password}
					onChange={(e) => handleChange(e)}
				/>
				<Button sx={{ mt: 2 }} variant='contained' type='submit'>
					Submit
				</Button>
			</Box>
		</>
	);
};

export default Login;
