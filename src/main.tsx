import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/index';
import RootLayouts from './components/Layouts/RootLayouts';
import CustomSuspense from './components/Suspense/CustomSuspense';

const theme = createTheme({});

const queryClient = new QueryClient();

const routers = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<RootLayouts>
					<CustomSuspense>
						<RouterProvider router={routers} />
					</CustomSuspense>
				</RootLayouts>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
