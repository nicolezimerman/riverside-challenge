import { useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Player from '../src/components/Player';
import TranscriptionContainer from './components/TranscriptionContainer';
import { src } from './utils/consts';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const getCurrentTime = (time) =>{
    setCurrentTime(()=>time);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo} alt="Riverside.fm" />
      </header>
      <TranscriptionContainer currentTime={currentTime}/>
      <Player audio={src.audio} getCurrentTime={getCurrentTime}/>
    </div>
  );
}

export default App;
