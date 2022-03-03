import Button from '~/components/Button/Button';

export default function Index() {
	return (
		<section className="m-2">
			<h1 className="my-2 font-bold text-2xl">Welcome to Remix</h1>

			<Button>Sign In With Google</Button>
		</section>
	);
}
