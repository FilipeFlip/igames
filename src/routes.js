import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'

import Cadastro from './pages/Cadastro'

import Login from './pages/Login'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element ={<Home/>} />
                <Route path = "/cadastro" element ={<Cadastro/>} />
                <Route path = "/login" element ={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;