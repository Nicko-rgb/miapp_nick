// src/LoveProposal.js
import React, { useState } from 'react';
import './inicio.css';
import { GiCheckMark } from "react-icons/gi";
import Message from '../Modal/Modals';
import video from '../IMG/video.mp4';
import Flores from '../Flores/Flores';

const LoveProposal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalFlower, setModalFlower] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: '49.65%', left: '52%' });

    const handleMessage = () => {
        setModalFlower(false);
        setModalIsOpen(!modalIsOpen); // Abrir el modal de mensaje
    };

    const handleFlores = () => {
        setModalFlower(!modalFlower);

    };

    const moveNoButton = () => {
        const randomX = Math.random() * (window.innerWidth - 100); // Rango del ancho de la ventana
        const randomY = Math.random() * (window.innerHeight - 50); // Rango de la altura de la ventana
        setNoButtonPosition({ top: `${randomY}px`, left: `${randomX}px` });
    };

    return (
        <div className="love-proposal-container">
            <div className="fondo-video">
                <video autoPlay loop muted className="background-video">
                    <source src={video} type="video/mp4" />
                    Tu navegador no soporta la etiqueta de video.
                </video>
            </div>
            <h1 className="name">Hello Amy, I am Nick</h1>
            <div className="content">
                <h1 className='preg'>¿Aceptarías ser mi Chica?</h1>
                <button onClick={handleFlores} className="btn yes-button"><GiCheckMark className='icon' /> Sí</button>
                <button
                    onMouseEnter={moveNoButton} // Mover el botón al pasar el mouse
                    onClick={moveNoButton}
                    className="btn no-button"
                    style={{ position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left }}
                >
                    No
                </button>
            </div>

            {modalFlower && (
                <Flores openMessage={handleMessage} />
            )}
            {!modalIsOpen && (
                <Message closeModal={handleMessage} />
            )}
        </div>
    );
};

export default LoveProposal;