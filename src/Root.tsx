import {Composition, Folder} from 'remotion';
import {BuiltWith, Intro, NeedToLearn, Quote, Reason} from './scenes';
import {Main} from './Main';
import './style.css';
import {getDurationInFrame} from './utils/getDurationInFrame';

export const RemotionRoot: React.FC = () => {
	const fps = 30;
	const width = 1080;
	const height = 1920;

	const videoDuration = 60;
	const videoDurationFrame = getDurationInFrame(videoDuration, fps);

	return (
		<>
			<Folder name="scenes">
				<Composition
					id="Intro"
					component={Intro}
					durationInFrames={getDurationInFrame(3, fps)}
					fps={fps}
					width={width}
					height={height}
				/>

				<Composition
					id="Reason"
					component={Reason}
					durationInFrames={getDurationInFrame(11, fps)}
					fps={fps}
					width={width}
					height={height}
				/>

				<Composition
					id="NeedToLearn"
					component={NeedToLearn}
					durationInFrames={getDurationInFrame(38, fps)}
					fps={fps}
					width={width}
					height={height}
				/>

				<Composition
					id="Quote"
					component={Quote}
					durationInFrames={getDurationInFrame(4, fps)}
					fps={fps}
					width={width}
					height={height}
				/>

				<Composition
					id="BuiltWith"
					component={BuiltWith}
					durationInFrames={getDurationInFrame(4, fps)}
					fps={fps}
					width={width}
					height={height}
				/>
			</Folder>

			<Composition
				id="Main"
				component={Main}
				durationInFrames={videoDurationFrame}
				fps={fps}
				width={width}
				height={height}
			/>
		</>
	);
};
