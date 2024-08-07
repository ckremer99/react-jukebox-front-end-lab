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
                    <button onClick={()=> setNowPlaying(track)}>Play</button>
                    <button><Link to={`/edit-track/${track._id}`}>Edit</Link></button>
                    <button onClick={()=>handleDelete(track_.id)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
};



export default Tracklist