import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx'


const App = () => {
  
  
  return(
  <>
  <Routes>
    <Route path='/' element={<Home tracks={tracks}/>}/>
  </Routes>
  </>
  )
};

export default App;