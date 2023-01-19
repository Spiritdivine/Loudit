import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divslides3 from './components/pages/home/divslide3';
import Forgot from './components/forgotpass/Forgot';
import SignIn from './components/sign-in/sign-in';
import Nopage from './components/no-page';
import Yard from './components/sign-up/yard';
import SimpleSlider from './components/pages/home/carousel';
import Palour from './components/pages/home/palour';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Palour/>
        
      </BrowserRouter>
    
  );
}

export default App;
