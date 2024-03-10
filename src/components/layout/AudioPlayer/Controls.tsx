import React, {useState, useEffect, useRef, useCallback} from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

type Props = {
  audioRef: any;
  progressBarRef: any;
  duration: any;
  setTimeProgress: any;
};

function Controls({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const playAnimationRef: any = useRef();

  const repeat = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`,
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    // Event listener for when the audio has ended
    const handleAudioEnd = () => {
      setIsPlaying(false); // Pause the audio when it finishes
      setTimeProgress(duration); // Set the progress to the end (optional)
    };

    audioRef.current.addEventListener('ended', handleAudioEnd);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, [audioRef, duration, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="flex justify-center items-center w-[42px] h-[42px] bg-indigo-700 rounded-[21px] mx-2">
      <button onClick={togglePlayPause} className="w-10 h-10">
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
    </div>
  );
}

export default Controls;
