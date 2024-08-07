const Tracklist = (props) => {
    return (
        <>
        <ul>
            {props.tracks.map((currentTrack) => (
                <li key={currentTrack.title} class='track'>
                    <Link to={`/tracks/${currentTrack._id}`}>
                    {currentTrack.title}
                    </Link>
                    {currentTrack.artist}
                </li>
            ))}
        </ul>
        </>
    )
};



export default Tracklist