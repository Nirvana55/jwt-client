import './App.css';
import { Navigate } from 'react-router-dom';
import useStore from './store/useStore';

function App() {
	const isAuth = useStore((state) => state.isAuth);

	const getUrl = () => {
		if (isAuth) return '/welcome';
		return '/404';
	};

	return <Navigate to={getUrl()} replace={true} />;
}

export default App;
