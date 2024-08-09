import { useState } from "react"

const NowPlaying = ({track}) => {
    if (!track) return null;
    return (
        <>
            <h3>Now Playing</h3>
            <div>
                <p>
                    Title: {track.title}
                </p>
                <p>
                    Artist: {track.artist}
                </p>
            </div>
        </>
    )
}


export default NowPlaying