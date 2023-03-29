import { StoreApi } from 'zustand';
import { MyState } from './useStore';

export type userSlice = {
	handleSnackBar: boolean;
	isAuth: boolean;

	setIsAuth: (isAuth: boolean) => void;
	setHandleSnackBar: (handleSnackBar: boolean) => void;
};

const handleSnackBar = false;
const isAuth = false;

export const createUserSlice = (
	set: StoreApi<MyState>['setState'],
	get: StoreApi<MyState>['setState']
) => ({
	isAuth,
	handleSnackBar,

	setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
	setHandleSnackBar: (handleSnackBar: boolean) =>
		set(() => ({ handleSnackBar })),
});
