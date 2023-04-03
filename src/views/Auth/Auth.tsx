import SignUp from './signUp';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import Login from './login';

function Authentication() {
	const [isSignUp, setIsSignUp] = useState(true);

	const handleIsSignUp = () => setIsSignUp((prev) => !prev);

	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography variant='h4' fontWeight='bold'>
				WELCOME
			</Typography>
			<Paper
				sx={{
					backgroundColor: '#f5f5f5',
					m: '1rem auto 0 auto',
					p: 4,
					borderRadius: 10,
					width: 600,
				}}>
				{isSignUp ? <SignUp /> : <Login />}
			</Paper>
			<Typography variant='body2'>
				Already have an account? Do you want to
				<Button onClick={handleIsSignUp}>Login?</Button>
			</Typography>
		</Box>
	);
}

export default Authentication;
