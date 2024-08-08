import { Link } from "react-router-dom"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { useEffect } from "react"

const Tracklist = ({tracks, handleDeleteTrack}) => {

    return (
        <>
        <div className="track-list">
            {tracks.map((currentTrack, index) => (
                <div key={index} className='track'>
                    <h3>{currentTrack.title}</h3>
                    <p>{currentTrack.artist}</p>
                    <button onClick={()=>{handleDeleteTrack(currentTrack._id)}}>Delete</button>
                    <Link to={`/edit-track/${currentTrack._id}`}>Edit</Link>
                </div>
            ))}
        </div>
        </>
    )
};



export default Tracklist