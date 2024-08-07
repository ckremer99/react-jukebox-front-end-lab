import { Link } from 'react-router-dom'
import Tracklist from './Tracklist'
import NowPlaying from './NowPlaying'

const Home = ({tracks, handleDeleteTrack}) => {
    return (
        <>
        <h1>Home</h1>
        <Link to="/add-track">New Track</Link>
        <Tracklist tracks = {tracks} handleDeleteTrack={handleDeleteTrack}/>
        <NowPlaying />
        </>
    )
}

export default Home;