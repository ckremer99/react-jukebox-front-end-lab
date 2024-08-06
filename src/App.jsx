import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import TrackForm from './components/Trackform'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/add-track' element={<TrackForm formType={"Create"}/>}/>
        <Route path='/edit-track/:trackId' element={<TrackForm formType={"Edit"}/>}/>
      </Routes>
    </>
  )
};

export default App;