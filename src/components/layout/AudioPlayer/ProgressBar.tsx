import AudioWaveform from '../../assets/images/audio-waveform.png';
import formatTime from "../../../helpers/FormatTime";

type Props = {
  audioRef: any;
  progressBarRef: any;
  timeProgress: any;
  duration: any;
};

function ProgressBar({
  audioRef,
  progressBarRef,
  timeProgress,
  duration,
}: Props) {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  return (
    <div className="flex flex-row justify-center items-center mr-1">
      <input
        type="range"
        ref={progressBarRef}
        defaultValue="0"
        onChange={handleProgressChange}
        className="w-32 ml-8 mr-10"
      />
      <span className="text-xs">{formatTime(duration - timeProgress)}</span>
    </div>
  );
}

export default ProgressBar;
