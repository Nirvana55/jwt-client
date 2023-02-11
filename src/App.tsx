import './App.css';
import { Typography, TextField, Box, Button } from '@mui/material';

function App() {
	const handleSubmit = () => {
		console.log('asd');
	};

	return (
		<div className='App'>
			<Typography variant='h4' fontWeight='bold'>
				WELCOME
			</Typography>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				component='form'
				width={600}
				sx={{ backgroundColor: '#f5f5f5', m: '1rem auto 0 auto' }}
				padding={4}
				borderRadius={10}
				onSubmit={handleSubmit}>
				<TextField label='First Name' />
				<TextField sx={{ mt: 2 }} label='Last Name' />
				<TextField sx={{ mt: 2 }} label='E-mail' />
				<TextField sx={{ mt: 2 }} label='Address' />
				<TextField sx={{ mt: 2 }} label='Password' />
				<TextField sx={{ mt: 2 }} label='Confirm Password' />
				<Button sx={{ marginTop: 2 }} variant='contained'>
					Submit
				</Button>
			</Box>
		</div>
	);
}

export default App;
