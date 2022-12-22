import React from 'react'
import NavDetails from './NavDetails'
import Logo from '/src/assets/logo.png'

function redirectDiscord() {
    window.open('https://discord.gg/jhSepmE7nN', "_blank");
}

const Navigation = () => {
    return (
        <NavDetails>
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>

            <div className="items">
                <a className="hover-underline-animation" href="#story">Nossa história</a>
                <a className="hover-underline-animation" href="#clients">Clientes</a>
                <a className="hover-underline-animation" href="#team">A Equipe</a>
                <a className="hover-underline-animation" href="#projects">Projetos</a>
                <a className="hover-underline-animation" href="https://twitter.com/KalifyInc" target="_blank">Twitter</a>
                <button onClick={redirectDiscord} target="_blank">Vamos conversar!</button>
            </div>
        </NavDetails>
    )
}

export default Navigation