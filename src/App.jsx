import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/Trackform'
import Home from './components/home.jsx'
import trackService from './services/trackService'



const App = () => {
const [tracks, setTracks] = useState([])
const [newTrack, setNewTrack] = useState({})

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
  setNewTrack(await trackService.create(trackFormData));
  navigate('/')
}

const handleDeleteTrack = async (trackId) => {
  const response = await trackService.deleteTrack(trackId)
}

  return (
    <>
      <Routes>
        <Route path='/' element={<Home tracks={tracks} handleDeleteTrack={handleDeleteTrack}/>}/>
        <Route path='/add-track' element={<TrackForm formType={"Create"} handleAddTrack={handleAddTrack}/>}/>
        <Route path='/edit-track/:trackId' element={<TrackForm formType={"Edit"}/>}/>
      </Routes>
    </>
  )
};

export default App;