import {Audio, staticFile, useVideoConfig} from 'remotion';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Text} from '../components/Text';
import {secondToFrame} from '../utils/secondToFrame';

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const greetingOpacity = interpolate(frame, [0, 15], [0, 1]);

	const mentionOpacity = interpolate(frame, [30, 60], [0, 1]);

	return (
		<AbsoluteFill className="bg-slate-900 items-center justify-center">
			<Audio
				src={staticFile('audio/Intro.wav')}
				startFrom={secondToFrame(1.5, fps)}
				endAt={secondToFrame(3.8, fps)}
				volume={0.5}
			/>

			<Text style={{opacity: greetingOpacity}} className="text-center">
				Kenapa pilih <br /> Backend Developer?
			</Text>

			<Text
				style={{opacity: mentionOpacity}}
				className="mt-12 text-gray-500"
				size="medium"
			>
				@fathan.dev
			</Text>
		</AbsoluteFill>
	);
};
