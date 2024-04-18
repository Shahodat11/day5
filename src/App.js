import './App.css';
import Apii from './components/apii/Apii';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Apii/>
      </header>
    </div>
  );
}

export default App;