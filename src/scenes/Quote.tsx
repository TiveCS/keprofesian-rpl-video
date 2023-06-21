import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Text} from '../components/Text';

export const Quote: React.FC = () => {
	const frame = useCurrentFrame();

	const quoteOpacity = interpolate(frame, [0, 15], [0, 1]);

	const fathanOpacity = interpolate(frame, [30, 60], [0, 1]);

	return (
		<>
			<AbsoluteFill className="bg-slate-900 items-center justify-center">
				<Text
					size="large"
					style={{
						opacity: quoteOpacity,
					}}
				>
					"Bring your ideas to life"
				</Text>

				<Text
					className="mt-12 text-gray-500"
					size="medium"
					style={{
						opacity: fathanOpacity,
					}}
				>
					@fathan.dev
				</Text>
			</AbsoluteFill>
		</>
	);
};
