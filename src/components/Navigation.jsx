import React from 'react'
import NavDetails from './NavDetails'
import Logo from '/src/assets/logo.png'

function redirectDiscord() {
    window.open('https://wa.me/5519998018174?text=Olá%20estou%20interessado%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Kalify%20Inc.', "_blank");
}

const Navigation = () => {
    return (
        <NavDetails>
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>

            <div className="items">
                <a className="hover-underline-animation" href="/#story">Nossa História</a>
                <a className="hover-underline-animation" href="/#clients">Clientes</a>
                <a className="hover-underline-animation" href="/#projects">Projetos</a>
                <a className="hover-underline-animation" href="/#team">Equipe</a>
                <a className="hover-underline-animation" href="/docs/intro">Open Source</a>
                <button onClick={redirectDiscord}>Vamos conversar!</button>
            </div>
        </NavDetails>
    )
}

export default Navigation