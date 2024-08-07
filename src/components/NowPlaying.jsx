import { useState } from "react"

const NowPlaying = ({track}) => {
    if (!track) return null;
    return (
        <>
        {tracks.map((track, index) => (
            <div key={index}>
                <p>
                    Title: {track.title}
                </p>
                <p>
                    Artist: {track.artist}
                </p>
            </div>
        ))}
        </>
    )
}


export default NowPlaying