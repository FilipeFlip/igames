/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../app';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


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