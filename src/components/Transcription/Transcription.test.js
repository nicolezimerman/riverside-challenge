import { render, screen } from "@testing-library/react";
import Transcription from "./index.js";


test("renders props transcription", () => {
  const info = {
    speaker: "nicole",
    text: "This is a test",
    start: 0.863,
    end: 1.663,
    data: [
      ["This,", 0.863, 0.9430000000000001],
      ["is", 1.263, 1.343],
      ["a test", 1.503, 1.663],
    ],
    currentTime: 1.298,
  };  
  const {speaker, start, end, data, currentTime} = info;
  render(<Transcription speaker={speaker} start={start} end={end} data={data} currentTime={currentTime}/>);
  const nameElement = screen.getByText(speaker);
  expect(nameElement).toBeInTheDocument();
});

test("renders avatar", () => {
  const info = {
    speaker: "nicole",
    text: "This is a test",
    start: 0.863,
    end: 1.663,
    data: [
      ["This,", 0.863, 0.9430000000000001],
      ["is", 1.263, 1.343],
      ["a test", 1.503, 1.663],
    ],
    currentTime: 1.298,
  };  
  const {speaker, start, end, data, currentTime} = info;
  render(<Transcription speaker={speaker} start={start} end={end} data={data} currentTime={currentTime}/>);
  const avatarElement = screen.getByAltText("avatar");
  expect(avatarElement).toBeInTheDocument();
});
