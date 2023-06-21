import {
	AbsoluteFill,
	Audio,
	interpolate,
	Sequence,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import CodeIcon from '../components/icons/CodeIcon';
import MaleIcon from '../components/icons/MaleIcon';
import {Point} from '../components/Point';
import {Text} from '../components/Text';
import {secondToFrame} from '../utils/secondToFrame';

export const Reason: React.FC = () => {
	const frame = useCurrentFrame();

	const {height, fps} = useVideoConfig();

	const entranceWhy = spring({
		fps,
		frame,
		config: {
			damping: 1000,
			mass: 0.1,
		},
		durationInFrames: 30,
	});

	const entranceWhyOffset = interpolate(entranceWhy, [0, 1], [height, 0], {
		extrapolateRight: 'clamp',
	});

	const sukaNgodingStart = secondToFrame(2, fps);
	const sukaNgodingEnd = secondToFrame(5, fps);

	const versatileRoleStart = sukaNgodingEnd;
	const versatileRoleEnd = secondToFrame(10, fps);

	return (
		<AbsoluteFill className="bg-slate-900">
			<Audio
				src={staticFile('audio/Reason.wav')}
				startFrom={secondToFrame(2, fps)}
				endAt={secondToFrame(11.7, fps)}
				volume={0.5}
			/>

			<Sequence name="Why?">
				<Text
					size="small"
					className="text-gray-300 mt-16 ml-16"
					style={{
						transform: `translateX(${entranceWhyOffset}px)`,
					}}
				>
					Why?
				</Text>
			</Sequence>

			<AbsoluteFill className="items-center justify-center">
				<Sequence
					name="SukaNgoding"
					from={sukaNgodingStart}
					durationInFrames={sukaNgodingEnd - sukaNgodingStart}
				>
					<Point icon={<CodeIcon />} text="Suka Ngoding" />
				</Sequence>
				<Sequence
					name="SukaNgoding-reversed"
					from={sukaNgodingEnd}
					durationInFrames={secondToFrame(1, fps)}
				>
					<Point isReverse icon={<CodeIcon />} text="Suka Ngoding" />
				</Sequence>

				<Sequence
					name="VersatileRole"
					from={versatileRoleStart}
					durationInFrames={versatileRoleEnd - versatileRoleStart}
				>
					<Point icon={<MaleIcon />} text="Core Role" />
				</Sequence>
				<Sequence
					name="VersatileRole-reversed"
					from={versatileRoleEnd}
					durationInFrames={secondToFrame(1, fps)}
				>
					<Point isReverse icon={<MaleIcon />} text="Core Role" />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
