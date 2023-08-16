/*import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'

import Cadastro from '../pages/Cadastro'

import Login from '../pages/Login'

import Jogo from '../pages/Jogo'*/

const express = require('express');
const router = express.Router();
router.get('/igames', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});
module.exports = router;



/*function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element ={<Home/>} />
                <Route path = "/cadastro" element ={<Cadastro/>} />
                <Route path = "/login" element ={<Login/>} />
                <Route path = "/jogo" element ={<Jogo/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
*/