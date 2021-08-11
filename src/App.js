import './App.css';
import Logo from './assets/logo.svg';
import Player from '../src/components/Player';
import TranscriptionContainer from './components/TranscriptionContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo} alt="Riverside.fm" />
      </header>
      <TranscriptionContainer />
      <Player />
    </div>
  );
}

export default App;
