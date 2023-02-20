import SignUp from './components/signup';
import './App.css';
import { Button, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import Login from './components/login';

function App() {
	const [isSignUp, setisSignUp] = useState(true);

	const handleIsSignUp = () => {
		setisSignUp((prev) => !prev);
	};

	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
