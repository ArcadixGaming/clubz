'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Logo } from '../icons';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const Navigation = () => {
	const { data: session, status } = useSession();

	if (session) {
		console.log('session from navigation -> ', session);
	}

	return (
		<div className="py-4 px-8 shadow-custom">
			<div className="grid grid-cols-2 lg:grid-cols-4">
				<Link href={'/'}>
					<Image
						src={logo}
						alt="logo..."
						className="h-12 w-auto rounded-md"
					/>
				</Link>
				<div className="col-span-2 place-self-center space-x-5">
					{/* <Link className="p-3" href={'/'}>
						Home
					</Link>
					<Link className="p-3" href={'/signup'}>
						signUp
					</Link>
					<Link className="p-3" href={'/login'}>
						Login
					</Link>
					<button onClick={() => signOut()}>Sign Out</button> */}
					<Link className="p-3" href={'/'}>
						About
					</Link>
					<Link className="p-3" href={'/signup'}>
						Contact
					</Link>
					<Link className="p-3" href={'/login'}>
						Community
					</Link>
				</div>
				<div className="place-self-center justify-self-end flex items-center justify-center space-x-5">
					<div>Search and filter section</div>
					<div>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
