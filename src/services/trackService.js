const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        console.log(res.json())
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

const create = async (trackFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trackFormData)
        })
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

const deleteTrack = async (trackId) => {

    try {
        const res = await fetch(`${BASE_URL}/${trackId}`, {
            method: 'DELETE'
        })
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

export default { index, create, deleteTrack }