import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Annotations from '../pages/Annotations/Annotations'
import NotFound from '../pages/404/NotFound'
import About from '../pages/About/About'
import Others from '../pages/Others/Others'
import Trash from '../pages/Trash/Trash'
import Settings from '../pages/Settings/Settings'

function RoutesContainer() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/annotations' element={<Annotations />} />
                <Route path='/about' element={<About />} />
                <Route path='/others' element={<Others />} />
                <Route path='/trash' element={<Trash />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}



export default RoutesContainer 