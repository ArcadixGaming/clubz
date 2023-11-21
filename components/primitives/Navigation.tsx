import Link from 'next/link';
import React from 'react';

const Navigation = () => {
	return (
		<div className="flex justify-between items-center p-3">
			<div>logo</div>
			<div className="space-x-5">
				<Link className="p-3" href={'/signup'}>
					signUp
				</Link>
				<Link className="p-3" href={'/login'}>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navigation;
