import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <>
        <h1>Home</h1>
        <ul>
            {props.tracks.map((currentTrack) => (
                <li key={currentTrack.title} class='track'>
                    <Link to={`/tracks/${currentTrack._id}`}>
                    {currentTrack.title}
                    </Link>
                    {currentTrack.artist}
                </li>
            ))}
        </ul>
        </>
    )
}

export default Home;