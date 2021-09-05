import logo from './logo.svg';
import './App.css';
import About from './components/About';
import RightImg from './components/RightImg';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="content">
      <About />
      <RightImg />
    </div>
    
    </div>
  );
}

export default App;
