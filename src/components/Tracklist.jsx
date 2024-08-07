import { Link } from "react-router-dom"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { useEffect } from "react"

const Tracklist = ({tracks, handleDeleteTrack}) => {

    

    return (
        <>
        <ul>
            {tracks.map((track) => 
                <li key={track._id} className='track-card'>
                    <h3>{track.title}</h3>
                    <p>{track.artist}</p>
                    <Link to={`/edit-track/${track._id}`}>Edit Track</Link>
                    <button onClick={() => handleDeleteTrack(track._id)}>Delete</button>
                    <button>Play</button>
                </li>
            )}
       
        </ul>
        </>
    )
};



export default Tracklist