import { render, screen } from "@testing-library/react";
import Player from "./index.js";
import { src } from "../../utils/consts";

test("renders audio in player", () => {
  const {container} = render(<Player audio={src.audio} />);
  const audioElement = container.querySelector('audio')
  expect(audioElement).toBeInTheDocument();
});

test("check audio src in player", () => {
  const {container} = render(<Player audio={src.audio} />);
  const audioSrcElement = container.querySelector('audio').src;
  expect(audioSrcElement).toBe(src.audio);
});