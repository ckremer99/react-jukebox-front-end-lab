import { Link } from 'react-router-dom'
import Tracklist from './Tracklist'
import NowPlaying from './NowPlaying'

const Home = ({tracks, setTracks}) => {
    return (
        <>
        <h1>Home</h1>
        <Link to="/add-track">New Track</Link>
        <Tracklist tracks = {tracks}/>
        <NowPlaying />
        </>
    )
}

export default Home;