import {Sequence, useVideoConfig} from 'remotion';
import {BuiltWith, Intro, NeedToLearn, Quote, Reason} from './scenes';
import {getDurationInFrame} from './utils/getDurationInFrame';
import {secondToFrame} from './utils/secondToFrame';

export const Main: React.FC = () => {
	const {fps} = useVideoConfig();

	return (
		<>
			<Sequence name="Intro" durationInFrames={secondToFrame(4, fps)}>
				<Intro />
			</Sequence>

			<Sequence
				name="Reason"
				from={getDurationInFrame(4, fps)}
				durationInFrames={secondToFrame(11, fps)}
			>
				<Reason />
			</Sequence>

			<Sequence
				name="NeedToLearn"
				from={getDurationInFrame(15, fps)}
				durationInFrames={secondToFrame(39, fps)}
			>
				<NeedToLearn />
			</Sequence>

			<Sequence
				name="Quote"
				from={secondToFrame(54, fps)}
				durationInFrames={secondToFrame(4, fps)}
			>
				<Quote />
			</Sequence>

			<Sequence name="BuiltWith" from={secondToFrame(58, fps)}>
				<BuiltWith />
			</Sequence>
		</>
	);
};
