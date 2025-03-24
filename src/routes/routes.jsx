import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Annotations from '../pages/Annotations/Annotations'
import NotFound from '../pages/404/NotFound'

function RoutesContainer() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/annotations' element={<Annotations />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}



export default RoutesContainer 