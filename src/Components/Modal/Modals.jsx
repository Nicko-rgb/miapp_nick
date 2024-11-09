import './modal.css';
import { BsBalloonHeart } from "react-icons/bs";
import { PiHeartLight } from "react-icons/pi";
import { motion } from 'framer-motion';
import Heart from '../Hearts/Heart';
import love from '../IMG/love.png';
import cartaImg from '../IMG/carta.png';
import { useState } from 'react';
import abrazo from '../IMG/abrazo.png'
import { BsEnvelopeHeart } from "react-icons/bs";

const Modals = ({ closeModal }) => {
    const [activeMsg, setActiveMsg] = useState(null); // Estado para el mensaje activo
    const [newMessages, setNewMessages] = useState([true, true, true, true]); // Estado para los puntos nuevos
    const [bouncing, setBouncing] = useState([true, true, true, true]); // Estado para controlar el rebote

    const bouquetVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

    // Función para manejar la selección de mensajes
    const handleMsg = (msgNumber) => {
        setActiveMsg(msgNumber);
        // Eliminar el punto nuevo al hacer clic
        setNewMessages(prev => {
            const updated = [...prev];
            updated[msgNumber - 1] = false; // Cambiar a false el índice correspondiente
            return updated;
        });
        // Detener el rebote al hacer clic
        setBouncing(prev => {
            const updated = [...prev];
            updated[msgNumber - 1] = false; // Cambiar a false el índice correspondiente
            return updated;
        });
    };

    // Función para cerrar los mensajes
    const closeMsgs = () => {
        setActiveMsg(null);
    };

    return (
        <div className="modals">
            <motion.div
                className="flower-bouquet modal-content"
                initial="hidden"
                animate="visible"
                variants={bouquetVariants}
                transition={{ duration: 0.5 }}
            >
                <BsBalloonHeart className='ico ico-left' />
                <BsBalloonHeart className='ico ico-right' />
                <BsBalloonHeart className='ico ico-left1' />
                <BsBalloonHeart className='ico ico-right1' />
                <h2>ESTOS MENSAJES SON PARA TI</h2>
                <p style={{ textAlign: 'left', width: '100%', fontSize: '15px'}}>DE: Nick.</p>
                <p style={{ textAlign: 'left', width: '100%', fontSize: '15px', marginTop: '-10px' }}>PARA: Amy.</p>
                <div className="box-regalos">
                    {[1, 2, 3, 4].map((msgNumber) => (
                        <div key={msgNumber} className="gift-item">
                            {newMessages[msgNumber - 1] && <span className="new-message-dot"></span>} {/* Punto nuevo */}
                            <img
                                onClick={() => handleMsg(msgNumber)}
                                src={cartaImg}
                                alt={`Message ${msgNumber}`}
                                style={{ animationDelay: `${msgNumber * 0.2}s` }} // Aplicar animationDelay correctamente
                                className={bouncing[msgNumber - 1] ? "bouncing-gift" : "no-bounce"} // Clase para animación de rebote
                            />
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'end', width: '100%' }}>I Love You Amy. <PiHeartLight /></p>
                <button onClick={closeModal}><PiHeartLight /> ACEPTAR <PiHeartLight /></button>
            </motion.div>
            <Heart imagen={love} />

            {activeMsg !== null && (
                <div className="box-messages">
                    <BsEnvelopeHeart className='ico ico-left' />
                    <BsEnvelopeHeart className='ico ico-right' />
                    {/* <BsEnvelopeHeart className='ico ico.left1' /> */}
                    <BsEnvelopeHeart className='ico ico-right1' />
                    {activeMsg === 1 && (
                        <div className="box message1">
                            <p className='title-msg'> <PiHeartLight />Te quiero mi bbe <PiHeartLight /> </p>
                            <p className='message-love'>
                                "Oye Amy, lo cierto es que te extraño bastante y
                                a pesar de la distancia y que no pueda verte no impide que te quiera,
                                cada estrella en el cielo susurra tu nombre,
                                y aunque no estés aquí, siempre estás presente
                                en cada pensamiento.
                                <br />
                                <br />
                                Cada día, pienso en tus ojitos lindos,
                                eres mi inspiración y tus mensajes la razón de sonreír.
                                Lo cierto es que te quiero y cada momento que pasa,
                                cuento los días hasta que podamos estar juntos nuevamente."
                            </p>
                        </div>
                    )}
                    {activeMsg === 2 && (
                        <div className="box message2">
                            <p className='title-msg'><PiHeartLight />SOLO A TI <PiHeartLight /> </p>
                            <p className='message-love'>
                                Solo a ti te quiero dar toda mi atencion, solo a ti te quiero mirar,
                                solo a ti te quiero besar, solo a ti te quiero a mi lado,
                                solo a ti te quiero dar todo mi amor.
                                Solo a ti.. ❤️. Y aprecio el tiempo que pasamos incluso si es por telefono.
                                Eres mi parte favorita.
                            </p>
                        </div>
                    )}
                    {activeMsg === 3 && (
                        <div className="box message3">
                            <p className='title-msg'><PiHeartLight /> Tu eres <PiHeartLight /> </p>
                            <p className='message-love'>
                            Tú? Tú eres hermosa, inteligente y única. 
                            No hay necesidad de compararte con
                            nadie, porque tu esencia es un tesoro
                            que nadie más posee, y eso es lo que más
                            me fascina de ti. Claro, me fascinas y me
                            encantas tú mi corazón - Amy.
                            </p>
                        </div>
                    )}
                    {activeMsg === 4 && (
                        <div className="box message4">
                            <p className='title-msg'><PiHeartLight />Oye Tú <PiHeartLight /> </p>
                            <p className='message-love'>Oye, cuídate mucho, porque sin ti, ¿con quién compartiré mi vida?.
                                Claro, nos tenemos que casar mi bbe.
                                Abachito a la distancia, te quieroou..   <PiHeartLight />
                            </p>
                            <img src={abrazo} alt="" />
                        </div>
                    )}
                    <button onClick={closeMsgs}>VOLVER</button>
                </div>
            )}
        </div>
    );
};

export default Modals;