import React, {HTMLAttributes} from 'react';
import * as Poppins from '@remotion/google-fonts/Poppins';

const font = Poppins.loadFont('normal', {
	weights: ['400', '500', '600'],
	subsets: ['latin'],
});

export const Text: React.FC<{
	children: string | React.ReactNode;
	size?: 'small' | 'medium' | 'large';
	className?: string;
	style?: HTMLAttributes<HTMLParagraphElement>['style'];
}> = ({children, size = 'large', className, style}) => {
	const textSize =
		size === 'small' ? 'text-5xl' : size === 'medium' ? 'text-6xl' : 'text-7xl';

	return (
		<p
			style={{fontFamily: font.fontFamily, ...style}}
			className={`${className} ${textSize} text-white leading-relaxed`}
		>
			{children}
		</p>
	);
};
