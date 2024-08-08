import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/Trackform'
import Home from './components/home.jsx'
import trackService from './services/trackService'



const App = () => {
  const [tracks, setTracks] = useState([])
  const [triggerRefresh, setTriggerRefresh] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllTracks = async () => {
      const tracksData = await trackService.index();
      setTracks(tracksData)
    }
    fetchAllTracks();
    navigate('/')
  }, [triggerRefresh]);

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData)
    setTriggerRefresh(!triggerRefresh);
    setTracks([...tracks, newTrack])
    navigate('/')
  }

  const handleUpdateTrack = async (trackId, trackFormData) => {
    try {
      const res = await trackService.updateTrack(trackId, trackFormData);
    } catch (error) {
      console.log(error);
    } finally {
      setTriggerRefresh(!triggerRefresh)
      navigate('/');
    }
  }


  const handleDeleteTrack = async (trackId) => {
    console.log('app.js:', trackId)
    const response = await trackService.deleteTrack(`${trackId}`)
    setTriggerRefresh(trackId)
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