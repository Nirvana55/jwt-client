import { create } from 'zustand';
import { createUserSlice, userSlice } from './userSlices';

export type MyState = userSlice;

const useStore = create<MyState>((set, get) => ({
	...createUserSlice(set, get),
}));

export default useStore;
