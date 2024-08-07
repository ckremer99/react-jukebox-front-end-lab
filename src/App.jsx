import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import TrackForm from './components/Trackform'
import Home from './components/home.jsx'
import trackService from './services/trackService'



const App = () => {

const testSong = [
  {title: 'Livin on a prayer',
    artist: 'Bon Jovi'
  }
]

  return (
    <>
      <Routes>
        <Route path='/' element={<Home tracks={testSong} />}/>
        <Route path='/add-track' element={<TrackForm formType={"Create"}/>}/>
        <Route path='/edit-track/:trackId' element={<TrackForm formType={"Edit"}/>}/>
      </Routes>
    </>
  )
};

export default App;