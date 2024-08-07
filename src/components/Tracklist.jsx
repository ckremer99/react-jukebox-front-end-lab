import { Link } from "react-router-dom"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { useEffect } from "react"

const Tracklist = ({tracks, handleDeleteTrack}) => {{

    return (
        <>
        <div>
        
            {tracks.map((track) => 
                <div key={track._id} className='track-card'>
                    <h3>{track.title}</h3>
                    <p>{track.artist}</p>
                </div>
            )}
       
        </div>
        </>
    )}
};



export default Tracklist