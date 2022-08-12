import React from 'react'
import NavDetails from './NavDetails'
import Logo from '/src/assets/logo.png'

function redirectDiscord() {
    window.open('https://discord.gg/CFhzRE6ztp', "_blank");
}

const Navigation = () => {
    return (
        <NavDetails>
            <a href="/">
                <img src={Logo} alt="logo" />
            </a>

            <div className="items">
                <a className="hover-underline-animation" href="#kalify">Nossa história</a>
                <a className="hover-underline-animation" href="#clientes">Clientes</a>
                <a className="hover-underline-animation" href="#equipe">A Equipe</a>
                <a className="hover-underline-animation" href="">Carreira</a>
                <a className="hover-underline-animation" href="">Blog</a>
                <button onClick={redirectDiscord} target="_blank">Vamos conversar!</button>
            </div>
        </NavDetails>
    )
}

export default Navigation