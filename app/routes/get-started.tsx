import { Button } from '~/components';
import { auth } from '~/lib/firebase';
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function GetStarted() {
	const [user, setUser] = useState<User>();
	const handleAuth = async () => {
		try {
			const res = await signInWithPopup(auth, new GoogleAuthProvider());
			setUser(res.user);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		auth.onAuthStateChanged((result) => {
			if (result) {
				setUser(result);
			}
		});
	}, []);

	return (
		<section className="py-2 px-4 min-h-screen bg-emerald-50">
			{user ? (
				<>
					<h1 className="text-3xl my-4 font-bold text-emerald-700">
						You're already in!
					</h1>
					<div className="p-4 border border-green-500 rounded-2xl bg-gradient-to-bl from-emerald-300 via-emerald-50 to-emerald-50">
						<img
							src={user.photoURL!}
							className="h-12 mx-auto rounded-full bg-white"
						/>
						<h3 className="text-xl font-bold tracking-tighter my-4 text-emerald-600">
							Hello <span className="text-black">{user.displayName}</span>
						</h3>
						<p className="my-2">
							<span className="text-green-600 font-bold">Email</span>:{' '}
							{user.email}
						</p>
						<p className="my-2">
							<span className="text-green-600 font-bold">Email</span>:{' '}
							{user.email}
						</p>
					</div>
				</>
			) : (
				<>
					<h1 className="text-3xl my-4 font-bold text-emerald-700">
						Sign In using your google Account
					</h1>
					<Button onClick={handleAuth}>Sign in using Google</Button>
				</>
			)}
		</section>
	);
}
