import { Link } from "react-router-dom"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
import { useEffect } from "react"

const Tracklist = ({tracks, handleDeleteTrack}) => {

    const trackListStyle = {
        display: 'flex',
        width: '1000px', 
        flexWrap: 'wrap',
    }

    const trackStyle = {
        backgroundColor: '#404040',
        borderRadius: '15px',
        margin: '20px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column'
    }

    const buttonStyle = {
        width: '100px', 
        height: '50px',
        margin: '10px',
    }

    const linkStyle = {
        width: '100px',
        heigth: '50px',
        color: '#ffffff',
        backgroundColor: '#000000',
        borderRadius: '5px',
        display: 'flex', 
        justifyContent: 'center',
        margin: '10px',
    }

    return (
        <>
        <div className="track-list" style={trackListStyle}>
            {tracks.map((currentTrack, index) => (
                <div key={index} className='track' style={trackStyle}>
                    <h3>{currentTrack.title}</h3>
                    <p>{currentTrack.artist}</p>
                    <button onClick={()=>{handleDeleteTrack(currentTrack._id)}} style={buttonStyle}>Delete</button>
                    <Link to={`/edit-track/${currentTrack._id}`} style={linkStyle}>Edit</Link>
                </div>
            ))}
        </div>
        </>
    )
};



export default Tracklist