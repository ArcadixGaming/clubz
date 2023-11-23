import React from 'react';
import { SignupFormDemo } from './signup-form';
import { auth } from '@/lib/auth/config';
import { redirect } from 'next/navigation';

const page = async () => {
	const session = await auth();

	// if (session && session?.user) {
	// 	redirect('/');
	// }
	return (
		<section className="flex-grow flex items-center">
			<div className="h-full grid grid-cols-2 gap-4 justify-items-center w-full">
				<div>image goes here...</div>
				<div className="">
					<SignupFormDemo />
				</div>
			</div>
		</section>
	);
};

export default page;
