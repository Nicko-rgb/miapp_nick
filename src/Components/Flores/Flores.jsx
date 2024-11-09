import './flores.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heart from '../IMG/corazon.png';
import { GrNext } from "react-icons/gr";
import { BsBalloonHeart } from "react-icons/bs";
import FlorImg from '../IMG/flor.png';
import { PiHeartLight } from "react-icons/pi";
import { IoWarningOutline } from "react-icons/io5";

const Flores = ({ openMessage }) => {
    const [hearts, setHearts] = useState([]);
    const [loader, setLoader] = useState(true);

    // Variantes para la animación del ramo de flores
    const bouquetVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

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
        const intervalId = loader ? null : setInterval(generateHeart, 100); // Generar un corazón cada 100 ms
        
        return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    }, [loader]); // Dependencia en loader

    // Simular carga y luego cambiar loader a false
    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoader(false);
        }, 7000); // Cambia este valor para ajustar el tiempo de carga

        return () => clearTimeout(loadingTimeout); // Limpiar timeout al desmontar el componente
    }, []);

    return (
        <div className="flores">
            <div className="flores-contend">
                {loader ? (
                    <div className="loader-box">
                        <IoWarningOutline className='war-left' />
                        <IoWarningOutline className='war-right' />
                        <div className="loading"></div>
                        <p>Por Favor Espere... <PiHeartLight className='icon-load' /></p>
                        <h3>EL SISTEMA HA DETECTADO A UNA PRECIOSA <br /> ESTO PODRÍA TARDAR UNOS SEGUNDOS </h3>
                    </div>
                ) : (
                    <div className="motion">
                        <p>Ya ves que sí me Esperas - GRACIAS CORAZÓN</p>
                        <h2 className='txt2'><PiHeartLight className='icon' />ESTAS FLORES SON PARA TI - I LOVE YOU <PiHeartLight className='icon' /> </h2>

                        <motion.div
                            className="flower-bouquet"
                            initial="hidden"
                            animate="visible"
                            variants={bouquetVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <BsBalloonHeart className='flow-left' />
                            <BsBalloonHeart className='flow-right' />
                            <img src={FlorImg} alt="Ramo de flores moradas" />
                        </motion.div>
                        <button onClick={openMessage}>OK <GrNext /></button>
                    </div>
                )}
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
            </div>
        </div>
    );
};

export default Flores;