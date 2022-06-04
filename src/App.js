import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import { useEffect } from 'react'
import "aos/dist/aos.css";
import Home from './Home/Home/Home';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
