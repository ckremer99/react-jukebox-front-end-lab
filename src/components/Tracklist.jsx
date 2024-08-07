import { Link } from "react-router-dom"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { useEffect } from "react"

const Tracklist = ({tracks, handleDeleteTrack}) => {{
    useEffect(()=> {
        fetchTracks();
    }, []);
    return (
        <>
        <ul>
        
            {tracks.map((track) => 
                <li key={track._id} className='track-card'>
                    <h3>{track.title}</h3>
                    <p>{track.artist}</p>
                </li>
            )}
       
        </ul>
        </>
    )}
};



export default Tracklist