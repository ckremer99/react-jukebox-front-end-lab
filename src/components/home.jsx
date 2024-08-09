import { Link } from 'react-router-dom'
import { useState } from 'react'
import Tracklist from './Tracklist'
import NowPlaying from './NowPlaying'

const Home = ({tracks, handleDeleteTrack}) => {

    const updateNowPlaying = (track) => {
        setNowPlaying(track)
    }

    const [nowPlaying, setNowPlaying] = useState({title: '', track: ''})
    return (
        <>
        <h1>Home</h1>
        <Link to="/add-track">New Track</Link>
        <Tracklist tracks = {tracks} handleDeleteTrack={handleDeleteTrack} updateNowPlaying={updateNowPlaying}/>
        <NowPlaying track={nowPlaying} />
        </>
    )
}

export default Home;