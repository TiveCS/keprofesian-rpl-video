import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Text} from '../components/Text';

export const BuiltWith: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, height} = useVideoConfig();

	const entrance = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		durationInFrames: 30,
		delay: 10,
	});

	const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

	return (
		<>
			<AbsoluteFill className="bg-slate-900 ">
				<AbsoluteFill
					className="items-center justify-center"
					style={{
						transform: `translateY(${entranceOffset}px)`,
					}}
				>
					<Text size="medium">Created with:</Text>

					<Text className="mt-12 text-emerald-500" size="large">
						remotion.dev
					</Text>
				</AbsoluteFill>
			</AbsoluteFill>
		</>
	);
};
