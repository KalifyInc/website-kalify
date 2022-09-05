import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Historia from './pages/Historia'
import Projetos from './pages/Projetos'
import Equipe from './pages/Equipe'
import Clientes from './pages/Clientes'
import './index.css'

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/nossa-historia" element={<Historia />} exact />
                <Route path="/projetos" element={<Projetos />} exact />
                <Route path="/equipe" element={<Equipe />} exact />
                <Route path="/clientes" element={<Clientes />} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)