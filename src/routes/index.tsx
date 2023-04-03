import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import CustomSuspense from '../components/Suspense/CustomSuspense';

const App = lazy(() => import('../App'));
const Authentication = lazy(() => import('../views/Auth/Auth'));
const Dashboard = lazy(() => import('../views/Dashboard'));
const DashboardLayout = lazy(
	() => import('../components/Layouts/DashboardLayouts')
);
const OutsideLayouts = lazy(
	() => import('../components/Layouts/OutsideLayouts')
);

export const routes: RouteObject[] = [
	{
		element: <DashboardLayout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/welcome',
				element: (
					<CustomSuspense>
						<Dashboard />
					</CustomSuspense>
				),
			},
		],
	},
	{
		element: <OutsideLayouts />,
		children: [
			{
				path: '/auth',
				element: <Authentication />,
			},
		],
	},
];
