import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Text} from './Text';

export const Point: React.FC<{
	style?: React.CSSProperties;
	isReverse?: boolean;
	icon: React.ReactElement;
	text: string;
}> = ({style, isReverse = false, icon, text}) => {
	const frame = useCurrentFrame();

	const {width, fps} = useVideoConfig();

	const entraceVersatile = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
	});

	const entranceVersatileOffset = interpolate(
		entraceVersatile,
		[0, 1],
		isReverse ? [0, -width] : [width, 0]
	);

	return (
		<AbsoluteFill
			style={{
				...style,
				transform: `translateX(${entranceVersatileOffset}px)`,
			}}
			className="items-center justify-center"
		>
			<>
				{icon}
				<Text className="mt-16 text-center">{text}</Text>
			</>
		</AbsoluteFill>
	);
};
