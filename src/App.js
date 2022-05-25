import React,{useState} from 'react';
import Wraper from './components/Wraper/Wraper';
import { Routes, Route } from 'react-router-dom';
import Login from './sections/Login/Login';
import Register from './sections/Register/Register';


function App() {
  const [navbutton,setNavbutton] = useState(false);
  return (
  <Wraper navbutton={navbutton} >
    <Routes>
      <Route index element = { <Login  setNavbutton={setNavbutton} />    }/>
      <Route path="register" element = { <Register  setNavbutton={setNavbutton} /> }/>
    </Routes>
  </Wraper>
  );
}

export default App;
