import { useEffect, useState } from "react";
import "./styles.css";

const Transcription = ({ speaker, start, end, data, currentTime }) => {
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


    const checkSubSelected = (t) => {
      if (currentTime >= t[1] && currentTime <= t[2]) {
        return <span key={Math.random()} className="selectedText">{t[0]} </span>
      } else {
        return <span key={Math.random()}>{t[0]} </span>
      }
    };


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
        <p>{data.map((t)=> checkSubSelected(t))}</p>
      </section>
    </div>
  );
};

export default Transcription;
