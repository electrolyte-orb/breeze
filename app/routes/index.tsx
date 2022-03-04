import Button from '~/components/Button/Button';
import logo from '~/images/wind-svgrepo-com.svg';
import { Link } from 'remix';

export default function Index() {
	return (
		<section className="py-2 px-4 bg-emerald-50 min-h-screen">
			<div className="flex items-center py-2">
				<span className="inline-block h-8 w-8 rounded-3xl bg-emerald-200 outline outline-emerald-400 overflow-hidden">
					<img src={logo} className="h-8" />
				</span>
				<h1 className="font-bold text-2xl text-center text-emerald-400 ml-4 tracking-tighter">
					Breeze<span className="opacity-40">e</span>
					<span className="opacity-20">e</span> Me
				</h1>
			</div>

			<div className="my-4">
				<h2 className="font-bold text-xl text-emerald-700 my-2 tracking-tight">
					Your open source cooperatives' meeting place.
				</h2>
				<p className="text-sm font-medium my-4 text-emerald-500">
					Simply put. Breeze Me is a{' '}
					<a
						href="https://firebase.google.com"
						target="_blank"
						className="underline text-emerald-600"
					>
						Firebase
					</a>{' '}
					powered fully open sourced interaction platform for gitters. Our
					project is still a startup and so we are in need of contributors to
					our{' '}
					<a
						href="https://github.com/electrolyte-orb/breeze"
						target="_blank"
						className="underline text-emerald-600"
					>
						Github Repo
					</a>
					. Even a little typofix would be a great help, nontheless give us your{' '}
					<a
						href="https://github.com/electrolyte-orb/breeze/issues/new"
						target="_blank"
						className="underline text-emerald-600"
					>
						feedbacks
					</a>
					.
				</p>
				<p className="text-sm font-medium my-4 text-emerald-500">
					Sign in today. Everything is just as secure as the new Whatsapp's
					End-to-End Encrytion (its just the same API).
				</p>
			</div>
			<Link to="/get-started">
				<Button className="w-full">Get started</Button>
			</Link>
		</section>
	);
}
