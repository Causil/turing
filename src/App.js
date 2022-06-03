import React,{useState} from 'react';
import Wraper from './components/Wraper/Wraper';
import { Routes, Route } from 'react-router-dom';
import {AuthContextProvider} from './contexts/auth-context/AuthContext';
import Login from './sections/Login/Login';
import Register from './sections/Register/Register';
import Content from './sections/Content/Content';
import Video from './sections/Content/Video/Video';
import { VideoContextProvider } from './contexts/video/VideoContext'
import Test from './sections/Test/Test';
function App() {
  const [navbutton,setNavbutton] = useState(false);
  return (
  <AuthContextProvider>
  <VideoContextProvider>
    <Wraper navbutton={navbutton} >
      <Routes>
        <Route index element = { <Login setNavbutton={setNavbutton} />    }/>
        <Route path="register" element = { <Register setNavbutton={setNavbutton} /> }/>
        <Route path="content" element = { <Content  setNavbutton={setNavbutton}/> }/>
        <Route path="video" element = { <Video  setNavbutton={setNavbutton}/> }/>
        <Route path='test'  element={ <Test   setNavbutton={setNavbutton} /> } />
      </Routes>
    </Wraper>
  </VideoContextProvider>
  </AuthContextProvider>
  );
}

export default App;



