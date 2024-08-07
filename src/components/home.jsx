import { Link } from 'react-router-dom'
import Tracklist from './Tracklist'
import NowPlaying from './NowPlaying'

const Home = ({tracks}) => {
    return (
        <>
        <h1>Home</h1>
        
        <Tracklist tracks = {tracks}/>
        <NowPlaying />
        </>
    )
}

export default Home;