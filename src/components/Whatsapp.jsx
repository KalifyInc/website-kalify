import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Whatsapp = () => {
    const [message, setMessage] = useState('');
    const laisPhrase = 'Olá Lais, estou entrando em contato pelo site da Kalify Inc para resolver meu problema. Vou descrevê-lo abaixo.';
    const andersonPhrase = 'Olá Anderson, estou entrando em contato pelo site da Kalify Inc para resolver meu problema. Vou descrevê-lo abaixo.'

    useEffect(() => {
        const checkHour = () => {
            const currentHour = new Date().getHours();
            if (currentHour % 2 === 0) {
                setMessage('https://api.whatsapp.com/send?phone=5519991747634&text=' + encodeURIComponent(laisPhrase));
            } else {
                setMessage('https://api.whatsapp.com/send?phone=5519998018174&text=' + encodeURIComponent(andersonPhrase));
            }
        };

        checkHour();

        // Atualiza a cada hora
        const interval = setInterval(checkHour, 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <WhatsappDetails>
            <a href={message} target="_blank" rel="noreferrer">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
        </WhatsappDetails>
    )
}

export default Whatsapp

const WhatsappDetails = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.3);
    }

    i {
        color: #fff;
        font-size: 30px;
    }
`