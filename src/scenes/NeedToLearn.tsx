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
import CommunicationIcon from '../components/icons/CommunicationIcon';
import CycleIcon from '../components/icons/CycleIcon';
import DatabaseIcon from '../components/icons/DatabaseIcon';
import GitIcon from '../components/icons/GitIcon';
import {Point} from '../components/Point';
import {Text} from '../components/Text';
import {secondToFrame} from '../utils/secondToFrame';

export const NeedToLearn: React.FC = () => {
	const {fps, height} = useVideoConfig();
	const frame = useCurrentFrame();

	const introOpacity = interpolate(frame, [0, 30], [0, 1]);

	const entranceUpperText = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
		delay: secondToFrame(4.5, fps),
	});

	const entranceOffset = interpolate(entranceUpperText, [0, 1], [height, 0]);

	const codingStart = secondToFrame(6, fps);
	const codingEnd = secondToFrame(14, fps);

	const databaseStart = codingEnd;
	const databaseEnd = secondToFrame(20, fps);

	const communicationStart = databaseEnd;
	const communicationEnd = secondToFrame(26, fps);

	const sdlcStart = communicationEnd;
	const sdlcEnd = secondToFrame(32, fps);

	const gitStart = sdlcEnd;
	const gitEnd = secondToFrame(38, fps);

	return (
		<AbsoluteFill className="bg-slate-900">
			<Audio
				src={staticFile('audio/NeedToLearn.wav')}
				startFrom={secondToFrame(3, fps)}
				volume={0.5}
			/>

			<Sequence name="intro" durationInFrames={secondToFrame(4, fps)}>
				<AbsoluteFill
					className="items-center justify-center"
					style={{
						opacity: introOpacity,
					}}
				>
					<Text size="medium" className="text-gray-300">
						Apa yang perlu dipelajari?
					</Text>
				</AbsoluteFill>
			</Sequence>

			<Sequence
				from={secondToFrame(4, fps)}
				style={{
					transform: `translateY(${entranceOffset}px)`,
				}}
			>
				<Text size="small" className="mt-16 mx-16">
					Skills
				</Text>
			</Sequence>

			<Sequence
				name="Coding"
				from={codingStart}
				durationInFrames={codingEnd - codingStart}
			>
				<Point icon={<CodeIcon />} text="Coding" />
			</Sequence>

			<Sequence
				name="Coding-reversed"
				from={codingEnd}
				durationInFrames={secondToFrame(1, fps)}
			>
				<Point isReverse icon={<CodeIcon />} text="Coding" />
			</Sequence>

			<Sequence
				name="Database"
				from={databaseStart}
				durationInFrames={databaseEnd - databaseStart}
			>
				<Point icon={<DatabaseIcon />} text="Database" />
			</Sequence>

			<Sequence
				name="Database-reversed"
				from={databaseEnd}
				durationInFrames={secondToFrame(1, fps)}
			>
				<Point isReverse icon={<DatabaseIcon />} text="Database" />
			</Sequence>

			<Sequence
				name="Komunikasi"
				from={communicationStart}
				durationInFrames={communicationEnd - communicationStart}
			>
				<Point icon={<CommunicationIcon />} text="Komunikasi" />
			</Sequence>

			<Sequence
				name="Komunikasi-reversed"
				from={communicationEnd}
				durationInFrames={secondToFrame(1, fps)}
			>
				<Point isReverse icon={<CommunicationIcon />} text="Komunikasi" />
			</Sequence>

			<Sequence
				name="SDLC"
				from={sdlcStart}
				durationInFrames={sdlcEnd - sdlcStart}
			>
				<Point icon={<CycleIcon />} text="Software Development Lifecycle" />
			</Sequence>

			<Sequence
				name="SDLC-reversed"
				from={sdlcEnd}
				durationInFrames={secondToFrame(1, fps)}
			>
				<Point
					isReverse
					icon={<CycleIcon />}
					text="Software Development Lifecycle"
				/>
			</Sequence>

			<Sequence name="Git" from={gitStart} durationInFrames={gitEnd - gitStart}>
				<Point icon={<GitIcon />} text="Version Control" />
			</Sequence>

			<Sequence
				name="Git-reversed"
				from={gitEnd}
				durationInFrames={secondToFrame(1, fps)}
			>
				<Point isReverse icon={<GitIcon />} text="Version Control" />
			</Sequence>
		</AbsoluteFill>
	);
};
