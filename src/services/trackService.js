const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        console.log(res.json())
        return res.json
    } catch (error) {
        console.log(error)
    }
}

const create = async (trackFormData) => {
    try {
        const res = await fetch(BASEURL, {
            method: 'POST',
            body: JSON.stringify(trackFormData)
        })
        return res.json();
    } catch (error) {
        console.log(error)
    }
}

const deleteTrack = async (trackId) => {

}

export default { index, create, remove }