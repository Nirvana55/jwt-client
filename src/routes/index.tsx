import { RouteObject } from 'react-router-dom';
import App from '../App';
import CustomSuspense from '../components/Suspense/CustomSuspense';

import Authentication from '../views/Auth/Auth';
import DashboardLayout from '../components/Layouts/DashboardLayouts';
import OutsideLayouts from '../components/Layouts/OutsideLayouts';
import Dashboard from '../views/Dashboard';

export const routes: RouteObject[] = [
	{
		element: <DashboardLayout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/',
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
