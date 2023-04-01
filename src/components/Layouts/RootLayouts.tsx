import { FC, useEffect, useState } from 'react';
import { useCheckUserSession } from '../../api/auth/mutation';

type RootLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

const RootLayouts: FC<RootLayoutProps> = ({ children }) => {
	const checkUserSession = useCheckUserSession();

	useEffect(() => {
		checkUserSession.mutate();
	}, []);

	return <>{children}</>;
};

export default RootLayouts;
