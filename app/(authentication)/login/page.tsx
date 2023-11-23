import React from 'react';
import { LoginFormDemo } from './login-form';

const page = () => {
	return (
		<section className="flex-grow flex items-center">
			<div className="grid grid-cols-2 gap-4 w-full justify-items-center">
				<div>image goes here...</div>
				<div>
					<LoginFormDemo />
				</div>
			</div>
		</section>
	);
};

export default page;
