import useStore from '../../store/useStore';
import { Navigate } from 'react-router-dom';

const DashboardLayouts = () => {
	const isAuthenticated = useStore((state) => state.isAuth);

	if (!isAuthenticated) {
		return <Navigate to='/auth' replace={true} />;
	}

	return <></>;
};

export default DashboardLayouts;
