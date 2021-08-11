import { useEffect, useState } from "react";
import "./styles.css";

const Transcription = ({ speaker, start, end, text, data, currentTime }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const checkSelected = () => {
      if (currentTime >= start && currentTime <= end) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    };

    checkSelected();
  }, [currentTime]);

  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60);
    var seconds = ((millis % 60) / 1).toFixed(0);
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  return (
    <div className="transcription">
      <div>{isSelected == true ? "selected" : "not selected"}</div>
      <section className="transcription-header">
        <img
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${speaker}&rounded=true`}
          alt="avatar"
        />
        <p className="name">{speaker}</p>
        <p className="time">{millisToMinutesAndSeconds(start)}</p>
      </section>
      <section className={`dialog ${isSelected && "selected"}`}>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default Transcription;
