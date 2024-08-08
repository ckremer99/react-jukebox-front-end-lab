import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/Trackform'
import Home from './components/home.jsx'
import trackService from './services/trackService'



const App = () => {
const [tracks, setTracks] = useState([])
const [newTrack, setNewTrack] = useState(false)

useEffect(() => {
  const fetchAllTracks = async () => {
    const tracksData = await trackService.index();
    setTracks(tracksData)
  }
   fetchAllTracks();
   navigate('/')
}, [newTrack]);

const navigate = useNavigate();

const handleAddTrack = async (trackFormData) => {
  setNewTrack(!newTrack);
  navigate('/')
}

const handleUpdateTrack = async (trackId, trackFormData) => {
  try {
    const res = await trackService.updateTrack(trackId, trackFormData);
  } catch (error) {
    console.log(error);
  } finally {
    setNewTrack(!newTrack)
    navigate('/');
  }
}


const handleDeleteTrack = async (trackId) => {
  console.log('app.js:', trackId)
  const response = await trackService.deleteTrack(`${trackId}`)
  setNewTrack(trackId)
}

  return (
    <>
      <Routes>
        <Route path='/' element={<Home tracks={tracks} handleDeleteTrack={handleDeleteTrack}/>}/>
        <Route path='/add-track' element={
          <TrackForm formType={"Create"} handleAddTrack={handleAddTrack} handleUpdateTrack={handleUpdateTrack}/>}/>
        <Route path='/edit-track/:trackId' element={
          <TrackForm formType={"Edit"} handleUpdateTrack={handleUpdateTrack} handleAddTrack={handleAddTrack}/>}/>
      </Routes>
    </>
  )
};

export default App;