import { Link } from 'react-router-dom'
import Tracklist from './Tracklist'

const Home = ({tracks}) => {
    return (
        <>
        <h1>Home</h1>
        <Link to="/add-track">New Track</Link>
        <Tracklist tracks = {tracks}/>
        </>
    )
}

export default Home;