import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Services'



export default function App(){
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    )
}