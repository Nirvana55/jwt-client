import { Navigate, Outlet } from 'react-router-dom';
import useStore from '../../store/useStore';

const OutsideLayouts = () => {
	const isAuthenticated = useStore((state) => state.isAuth);

	if (isAuthenticated) {
		return (
			<Navigate to={isAuthenticated ? '/dashboard' : '/404'} replace={true} />
		);
	}

	return <Outlet />;
};

export default OutsideLayouts;
