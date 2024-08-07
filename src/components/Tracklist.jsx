const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { Link } from "react-router-dom"

const Tracklist = ({tracks, setTracks}) => {
    return (
        <>
        <ul>
            {tracks.map((currentTrack, index) => (
                <li key={index} className='track'>
                    <h3>{currentTrack.title}</h3>
                    <p>{currentTrack.artist}</p>
                </li>
            ))}
        </ul>
        </>
    )
};



export default Tracklist