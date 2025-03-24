import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Annotations from '../pages/Annotations/Annotations'

function RoutesContainer() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/annotations' element={<Annotations />} />
            </Routes>
        </BrowserRouter>
    )
}



export default RoutesContainer 