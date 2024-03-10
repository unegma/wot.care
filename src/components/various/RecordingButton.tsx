// import RecordStopIcon from '../assets/icons/RecordStopIcon';
// import CircleIcon from '../assets/icons/CircleIcon';
import RecordSvg from '../../assets/icons/icons/record.svg';
import EllipseSvg from '../../assets/icons/icons/ellipse.svg';
import StopRecordSvg from '../../assets/icons/icons/stopRecord.svg';
import formatTime from "../../helpers/FormatTime";
import {HourglassBottom} from "@mui/icons-material";

type Props = {
  done: boolean;
  processing: boolean;
  reRecordAudio: () => void;
  isRecording: boolean;
  recordingTime: number;
  startRecording: () => void;
  stopRecording: () => void;
  recordingBlob: Blob | undefined;
  addAudioElement: (blob: any) => void;
  handleExample: () => Promise<void>;
};

function RecordingButton({
  done,
  processing,
  reRecordAudio,
  isRecording,
  recordingTime,
  stopRecording,
  startRecording,
  recordingBlob,
  addAudioElement,
  handleExample,
}: Props) {
  const onRecordingComplete = () => {
    stopRecording();
    // addAudioElement(recordingBlob);
  };

  return (
    <div style={{userSelect: "none", outline: "none"}}>
      {isRecording && (
        <div
          style={{userSelect: "none", outline: "none"}}
          className="relative cursor-pointer flex items-center justify-center"
          onClick={() => onRecordingComplete()}
        >
          <img style={{userSelect: "none", outline: "none"}} src={StopRecordSvg} className="animate-pulse w-24 xs:w-full" />
          <p style={{userSelect: "none", outline: "none"}} className="absolute">{formatTime(recordingTime)}</p>
        </div>
      )}

      {!isRecording && !recordingBlob && (
        <div
          style={{userSelect: "none", outline: "none"}}
          className="cursor-pointer bg-red-400"
          onClick={() => startRecording()}
        >
          <img style={{userSelect: "none", outline: "none"}} src={RecordSvg} alt="" className="w-24 xs:w-full" />
        </div>
      )}

      {recordingBlob && !isRecording && !done && !processing && (
        <div
          style={{userSelect: "none", outline: "none"}}
          className="relative cursor-pointer flex items-center justify-center"
          onClick={() => handleExample()}
        >
          <img style={{userSelect: "none", outline: "none"}} src={EllipseSvg} className="w-24 xs:w-full" />
          <p style={{userSelect: "none", outline: "none"}} className="absolute text-base xs:text-xl">Send</p>
        </div>
      )}


      {recordingBlob && !isRecording && !done && processing && (
        <div
          style={{userSelect: "none", outline: "none"}}
          className="relative cursor-pointer flex items-center justify-center"
        >
          <img style={{userSelect: "none", outline: "none"}} src={EllipseSvg} className="w-24 xs:w-full" />
          <p style={{userSelect: "none", outline: "none"}} className="absolute text-base xs:text-xl">&nbsp;&nbsp;<HourglassBottom/></p>
        </div>
      )}

      {recordingBlob && !isRecording && done && (
        <div
          style={{userSelect: "none", outline: "none"}}
          className="cursor-pointer bg-red-400"
          onClick={() => reRecordAudio()}
        >
          <img style={{userSelect: "none", outline: "none"}} src={RecordSvg} alt="" className="w-24 xs:w-full" />
        </div>
      )}
    </div>
  );
}

export default RecordingButton;
