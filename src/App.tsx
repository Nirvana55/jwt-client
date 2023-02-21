import SignUp from './components/signup';
import './App.css';
import {
	Alert,
	AlertColor,
	AlertTitle,
	Button,
	Paper,
	Snackbar,
	Typography,
} from '@mui/material';
import { useState, createContext } from 'react';
import Login from './components/login';

interface SnackBarType {
	open: boolean;
	isSeverity: AlertColor;
	isMessage: string;
}

interface ContextType {
	handleSnackBar: SnackBarType;
	setIsHandleSnackBar: React.Dispatch<React.SetStateAction<SnackBarType>>;
}

export const SnackBarContext = createContext<ContextType>({
	handleSnackBar: { open: false, isSeverity: 'success', isMessage: '' },
	setIsHandleSnackBar: () => {},
});

function App() {
	const [isSignUp, setIsSignUp] = useState(true);
	const [handleSnackBar, setIsHandleSnackBar] = useState<SnackBarType>({
		open: false,
		isSeverity: 'success',
		isMessage: '',
	});

	const handleIsSignUp = () => {
		setIsSignUp((prev) => !prev);
	};

	const handleClose = () => {
		setIsHandleSnackBar({ ...handleSnackBar, open: !open });
	};

	return (
		<SnackBarContext.Provider value={{ handleSnackBar, setIsHandleSnackBar }}>
			<Snackbar
				open={handleSnackBar.open}
				autoHideDuration={5000}
				onClose={handleClose}>
				<Alert severity={handleSnackBar.isSeverity} onClose={handleClose}>
					<AlertTitle>{handleSnackBar.isMessage}</AlertTitle>
				</Alert>
			</Snackbar>
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
		</SnackBarContext.Provider>
	);
}

export default App;
