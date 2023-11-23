import { auth } from '@/lib/auth/config';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	const session = await auth();

	if (!session) {
		console.log('no session found!');
		return (
			<div>You're to login before going to the dashboard section.</div>
		);
	}

	return (
		<div className="flex-grow">
			Hello {session && session.user ? session?.user.name : 'world'}
		</div>
	);
}
