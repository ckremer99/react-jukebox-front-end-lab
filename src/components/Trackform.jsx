
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import trackService from '../services/trackService';

const TrackForm = (props) => {
    const [formData, setFormData] = useState({title: '', artist: ''});
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (trackId) {
            props.handleUpdateTrack(trackId, formData)
        } else {
            props.handleAddTrack(formData)
        }
    };
    
    const { trackId } = useParams()

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    useEffect(() => {
        const fetchTrack = async () => {
            const trackData = await trackService.show(trackId);
            setFormData(trackData)
        };
        if (trackId) fetchTrack();
    }, [])

    return (
        <>
            <h1>{trackId ? 'Edit ' : 'New '} Track</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input 
                    required
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange} />
                <label htmlFor="artist">Artist: </label>
                <input 
                    required
                    type="text"
                    name="artist"
                    id="artist"
                    value={formData.artist}
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TrackForm