import { useState } from "react";

const Tracklist = () => {
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