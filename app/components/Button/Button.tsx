import { ComponentProps } from 'react';

interface ButtonProps {
	variant?: 'primary' | 'secondary';
	size?: 'lg' | 'sm' | 'md';
	shadow?: 'lg' | 'md' | 'sm';
}

export default function Button({
	children,
	variant,
	size,
	shadow,
	...props
}: ButtonProps & ComponentProps<'button'>) {
	const props_copy = { ...props };
	delete props_copy.className;

	let classApplied: string;

	switch (variant) {
		case 'primary':
			classApplied =
				'focus:outline focus:outline-offset-2 outline-blue-500 bg-blue-500 text-white font-medium ';
			break;
		case 'secondary':
			classApplied = '';
			break;

		default:
			classApplied =
				'focus:outline focus:outline-offset-2 outline-emerald-500 bg-emerald-500 text-white font-medium ';
			break;
	}

	switch (size) {
		default:
			classApplied += 'py-2 px-4 rounded-lg text-sm ';
			break;
	}
	switch (shadow) {
		case 'lg':
			classApplied += 'shadow-lg';
			break;
		case 'md':
			classApplied += 'shadow-md';
			break;
		case 'sm':
			classApplied += 'shadow-sm';
			break;
		default:
			classApplied += '';
			break;
	}

	return (
		<button
			{...props_copy}
			className={classApplied + ' ' + (props.className ? props.className : '')}
		>
			{children}
		</button>
	);
}
