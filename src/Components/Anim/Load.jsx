// src/Load.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './load.css'; 
import logo from '../IMG/logo.png';
import oso from '../IMG/oso.png';
import heart from '../IMG/corazon.png'; // Asegúrate de tener una imagen de corazón

const Load = () => {
    const [loadingMessage, setLoadingMessage] = useState("Cargando datos...");
    const [hearts, setHearts] = useState([]); // Estado para los corazones
    const navigate = useNavigate();

    useEffect(() => {
        const messages = [
            "Cargando datos...",
            "Procesando corazones... ❤️",
            "Enviando corazones... ❤️❤️❤️",
            "Redirigiendo..."
        ];

        let messageIndex = 0;
        const intervalId = setInterval(() => {
            messageIndex += 1;
            if (messageIndex < messages.length) {
                setLoadingMessage(messages[messageIndex]);
                // Generar corazones al mostrar el mensaje de "Enviando corazones..."
                if (messages[messageIndex] === "Enviando corazones... ❤️❤️❤️") {
                    generateHearts();
                }
            }
        }, 1200);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            window.location.href = '/love'
        }, 7000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [navigate]);

    const generateHearts = () => {
        const newHearts = [];
        for (let i = 0; i < 20; i++) { // Generar 10 corazones
            newHearts.push({
                id: Math.random(), // Usar un ID único
                left: Math.random() * 95 + '%', // Posición horizontal aleatoria
                top: Math.random() * 95 + '%', // Posición vertical aleatoria
                animationDuration: Math.random() * 2 + 2 + 's' // Duración de la animación aleatoria entre 2 y 4 segundos
            });
        }
        setHearts(newHearts);
    };

    return (
        <div className="load">
            <img src={logo} alt="I Love You" className='left' />
            <img src={logo} alt="I Love You" className='right' />
            <img src={oso} alt="I Love You" className='left1' />
            <img src={oso} alt="I Love You" className='right1' />
            
            {hearts.map(heartData => (
                <img 
                    key={heartData.id} 
                    src={heart} 
                    alt="Corazón" 
                    className="heart" 
                    style={{
                        position: 'absolute',
                        left: heartData.left,
                        top: heartData.top,
                        animationDuration: heartData.animationDuration,
                    }} 
                />
            ))}

            <div className="loader-icon"></div>
            <p className="loading-message">{loadingMessage}</p>
            <div className="loading-bar">
                <div className="progress"></div>
            </div>
        </div>
    );
};

export default Load;