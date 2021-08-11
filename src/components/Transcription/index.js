import "./styles.css";
const Transcription = ({ speaker, start, text, data, isSelected }) => {
  return (
    <div className="transcription">
      <section className="transcription-header">
        <img
          className="avatar"
          src={`https://ui-avatars.com/api/?name=${speaker}&rounded=true`}
          alt="avatar"
        />
        <p className="name">{speaker}</p>
        <p className="time">{start}</p>
      </section>
      <section className={`dialog ${isSelected && "selected"}`}>
        {text}
      </section>
    </div>
  );
};

export default Transcription;
