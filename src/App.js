import './App.css';
import Apii from './components/apii/Apii';
import Header from './components/header/Header';
import HomeAppllancess from './components/homeAppllancess/HomeAppllancess';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Apii/>
        <HomeAppllancess/>
      </header>
    </div>
  );
}

export default App;