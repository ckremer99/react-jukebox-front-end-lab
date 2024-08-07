import { Link } from 'react-router-dom'
import Tracklist from './Tracklist'
import { Route, Routes } from 'react-router-dom'

const Home = (props) => {
    return (
        <>
        <h1>Home</h1>
        <Routes>
            <Route path='/tracks' element={Tracklist} />
        </Routes>
        </>
    )
}

export default Home;