import { useMutation } from 'react-query';
import { API } from '../../config/axios';
import useStore from '../../store/useStore';
import { LoginType, SignUpType } from './type';

const checkUserSession = async () => {
	const res = await API.get('/v1/auth/check-user-session');
	return res.data;
};

const signUpUser = async (data: SignUpType) => {
	const res = await API.post('/v1/auth/register', data);
	return res.data;
};

const loginUser = async (data: LoginType) => {
	const res = await API.post('/v1/auth/login', data);
	return res.data;
};

const logOutUser = async () => {
	const res = await API.get('/v1/auth/logout');
	return res.data;
};

export const useCheckUserSession = () => {
	const setIsAuth = useStore((state) => state.setIsAuth);

	return useMutation(checkUserSession, {
		onSuccess: () => setIsAuth(true),
		onError: () => setIsAuth(false),
	});
};

export const useSignUpUser = () => {
	const checkUserSession = useCheckUserSession();

	return useMutation(signUpUser, {
		onSuccess: () => checkUserSession.mutate(),
		onError: () => console.log('asd'),
	});
};

export const useLoginUser = () => {
	const checkUserSession = useCheckUserSession();

	return useMutation(loginUser, {
		onSuccess: () => checkUserSession.mutate(),
		onError: () => console.log('asd'),
	});
};

export const useLogOutUser = () => {
	const checkUserSession = useCheckUserSession();

	return useMutation(logOutUser, {
		onSuccess: () => checkUserSession.mutate(),
		onError: () => console.log('asd'),
	});
};
