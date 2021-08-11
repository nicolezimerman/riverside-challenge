import "./styles.css";
const Transcription = ({ avatar, name, time, dialog, isSelected }) => {
  return (
    <div className="transcription">
      <section className="transcription-header">
        <img
          className="avatar"
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="avatar"
        />
        <p className="name">Nicolas</p>
        <p className="time">00:52</p>
      </section>
      <section className={`dialog ${isSelected && "selected"}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </section>
    </div>
  );
};

export default Transcription;
