import './App.css';
import Logo from './assets/logo.svg';
import Player from '../src/components/Player';
import Transcription from './components/Transcription';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo} alt="Riverside.fm" />
      </header>
      <Transcription />
      <Transcription />
      <Player />
    </div>
  );
}

export default App;
