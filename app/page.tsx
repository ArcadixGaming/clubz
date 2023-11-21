import { auth } from '@/lib/auth/config';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
	const session = await auth();

	if (!session) {
		console.log('no session found!');
	}

	return (
		<div>
			<div>
				Hello{' '}
				{session && session.user
					? session?.user.name ?? 'world'
					: 'world'}
			</div>
			<div>
				<Link href={'/signup'}>goto signup</Link>
			</div>
			<div>
				<Link href={'/login'}>goto login</Link>
			</div>
		</div>
	);
}
