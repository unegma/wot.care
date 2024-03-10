import {useRef, useState} from 'react';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
type Props = {
  recording: any;
};

function AudioPlayer({recording}: Props) {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();
  return (
    <div
      className="flex flex-row justify-center items-center h-[69.969px] px-3 flex-shrink-0
    rounded-[35.154px] border-[1px] border-white bg-[#181C24] shadow-md"
    >
      <DisplayTrack
        currentTrack={recording}
        audioRef={audioRef}
        setDuration={setDuration}
        progressBarRef={progressBarRef}
      />
      <Controls
        audioRef={audioRef}
        progressBarRef={progressBarRef}
        duration={duration}
        setTimeProgress={setTimeProgress}
      />
      <ProgressBar {...{progressBarRef, audioRef, timeProgress, duration}} />
    </div>
  );
}

export default AudioPlayer;
