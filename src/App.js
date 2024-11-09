import './App.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Components/Inicio/Inicio';
import Load from './Components/Anim/Load';

function App() {
    return (
        <div className='App'>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<Load />} />
                    <Route path="/love" element={<Inicio />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;