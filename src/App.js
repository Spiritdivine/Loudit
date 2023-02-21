import './App.css';
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/sign-up';
import Forgot from './components/forgotpass/Forgot';
import Main from './components/sign-up/Main';
import Welbody from './components/pages/welcome/welbody';
import Home from './components/pages/home/home';
import Palour from './components/pages/home/palour';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className='App'>
          <div className='content'>
            
            <Routes>
              <Route index path='/' element={<Home/>}/>
              <Route path='signup'  element={<Welbody/>}/>
              <Route path='welbody' element={<Forgot/>}/>                     
            </Routes>
          </div>
        </div>
    </BrowserRouter>
    
       
    
  );
}

export default App;
