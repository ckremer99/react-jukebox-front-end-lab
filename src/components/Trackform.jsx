
import { useState } from 'react'

const TrackForm = (props) => {
    const [formData, setFormData] = useState({title: '', artist: ''});
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddTrack(formData);
        setFormData({ title: '', artist: ''})
    };
    

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    return (
        <>
            <h1>Create/Edit Track</h1>
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