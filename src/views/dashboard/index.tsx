import { Button, Typography } from '@mui/material';
import { useLogOutUser } from '../../api/auth/mutation';

const Dashboard = () => {
	const logOut = useLogOutUser();

	const handleLogOut = () => {
		logOut.mutate();
	};

	return (
		<>
			<Typography variant='h1'>Welcome</Typography>
			<Button variant='contained' onClick={handleLogOut}>
				Log Out
			</Button>
		</>
	);
};
export default Dashboard;
