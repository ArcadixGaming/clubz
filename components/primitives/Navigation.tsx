'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
	const { data: session, status } = useSession();

	if (session) {
		console.log('session from navigation -> ', session);
	}

	return (
		<div className="flex justify-between items-center p-3">
			<div>logo</div>
			<div className="space-x-5">
				<Link className="p-3" href={'/'}>
					Home
				</Link>
				<Link className="p-3" href={'/signup'}>
					signUp
				</Link>
				<Link className="p-3" href={'/login'}>
					Login
				</Link>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		</div>
	);
};

export default Navigation;
