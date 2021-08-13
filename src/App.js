import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Player from '../src/components/Player';
import TranscriptionContainer from './components/TranscriptionContainer';
import { src } from './utils/consts';
import Timer from './components/Timer';
function App() {
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo} alt="Riverside.fm" />
      </header>
      <TranscriptionContainer currentTime={currentTime}/>
      <Player audio={src.audio} setCurrentTime={setCurrentTime} />
    </div>
  );
}

export default App;
