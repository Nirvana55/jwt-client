import { Suspense } from 'react';

const CustomSuspense = ({ children }: { children: JSX.Element }) => {
	return <Suspense fallback={<div />}>{children}</Suspense>;
};

export default CustomSuspense;
