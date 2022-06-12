import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/Home/Home';
import AOS from "aos";
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
     <Home/>
     <ToastContainer/>
    </div>
  );
}

export default App;
