import "./styles.css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Forward10Icon from '@material-ui/icons/Forward10';
import Replay10Icon from '@material-ui/icons/Replay10';

const Player = ({ audio, getCurrentTime }) => {
  return (
    <div className="footer">
      <AudioPlayer
        className="player"
        src={audio}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        listenInterval={50}
        layout="horizontal-reverse"
        /* customIcons={[
          {rewind: Replay10Icon},
          {forward: Forward10Icon},
        ]} */
        onListen={(e) => getCurrentTime(e.target.currentTime)}
      />
    </div>
  );
};

export default Player;
