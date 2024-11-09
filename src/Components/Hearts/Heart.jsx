import { useState, useEffect } from 'react';
import './heart.css'

const Heart = ( {imagen} ) => {

    const [hearts, setHearts] = useState([]);

    // Función para generar un corazón
    const generateHeart = () => {
        const newHeart = {
            id: Math.random(),
            left: Math.random() * 95 + '%',
            top: Math.random() * 95 + '%',
            animationDuration: Math.random() * 2 + 2 + 's'
        };
        setHearts(prevHearts => [...prevHearts, newHeart]);

        // Eliminar el corazón después de un tiempo (por ejemplo, 2 segundos)
        setTimeout(() => {
            setHearts(prevHearts => prevHearts.filter(heart => heart.id !== newHeart.id));
        }, 2000);
    };

    // Generar corazones cada 100 ms solo si loader es false
    useEffect(() => {
        const intervalId = setInterval(generateHeart, 100); // Generar un corazón cada 100 ms

        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, []);

    return (
        <div className='hearts'>
            {hearts.map(heartData => (
                <img
                    key={heartData.id}
                    src={imagen}
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
        </div>
    )
}

export default Heart