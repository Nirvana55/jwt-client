import useStore from '../../store/useStore';
import { Navigate, Outlet } from 'react-router-dom';

const DashboardLayouts = () => {
	const isAuthenticated = useStore((state) => state.isAuth);

	if (!isAuthenticated) {
		return <Navigate to='/auth' replace={true} />;
	}

	return <Outlet />;
};

export default DashboardLayouts;
