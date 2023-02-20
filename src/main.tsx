import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/index';

const theme = createTheme({});

const queryClient = new QueryClient();

const routers = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={routers} />
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
