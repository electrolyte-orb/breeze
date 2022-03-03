import { ComponentProps, ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	variant?: 'primary' | 'secondary';
}

export default function Button({
	children,
	variant,
	...props
}: ButtonProps & ComponentProps<'button'>) {
	const props_copy = { ...props };
	delete props_copy.className;

	let classApplied: string;

	switch (variant) {
		case 'primary':
			classApplied =
				'Button--Primary border border-blue-600 px-4 py-2 bg-blue-500 border-radius-lg text-white';
			break;
		case 'secondary':
			classApplied = '';
			break;

		default:
			classApplied =
				'Button--Primary border border-blue-600 px-4 py-2 bg-blue-500 rounded-lg text-white text-sm font-medium';
			break;
	}

	return (
		<button
			{...props_copy}
			className={
				'Button ' +
				classApplied +
				' ' +
				(props.className ? props.className : '')
			}
		>
			{children}
		</button>
	);
}
