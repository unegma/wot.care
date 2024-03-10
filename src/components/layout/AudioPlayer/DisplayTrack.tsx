type Props = {
  currentTrack: any;
  audioRef: any;
  setDuration: any;
  progressBarRef: any;
};

function DisplayTrack({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}: Props) {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <div>
      <audio
        src={currentTrack}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
}
export default DisplayTrack;
