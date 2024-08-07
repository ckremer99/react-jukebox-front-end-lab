const Tracklist = ({tracks}) => {
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