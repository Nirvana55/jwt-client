import { useContext } from 'react';
import { useMutation } from 'react-query';
import { SnackBarContext } from '../../App';
import { API } from '../../config/axios';
import { LoginType, SignUpType } from './type';

const signUpUser = async (data: SignUpType) => {
	const res = await API.post('/v1/auth/register', data);
	return res.data;
};

const loginUser = async (data: LoginType) => {
	const res = await API.post('/v1/auth/login', data);
	return res.data;
};

export const useSignUpUser = () => {
	const { handleSnackBar, setIsHandleSnackBar } = useContext(SnackBarContext);

	return useMutation(signUpUser, {
		onSuccess: () =>
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'success',
				isMessage: 'Hello ! Success',
			}),
		onError: () =>
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'error',
				isMessage: 'Hello ! Error',
			}),
	});
};

export const useLoginUser = () => {
	const { handleSnackBar, setIsHandleSnackBar } = useContext(SnackBarContext);

	return useMutation(loginUser, {
		onSuccess: () =>
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'success',
				isMessage: 'Hello ! Success',
			}),
		onError: () =>
			setIsHandleSnackBar({
				...handleSnackBar,
				open: true,
				isSeverity: 'error',
				isMessage: 'Hello ! Error',
			}),
	});
};
