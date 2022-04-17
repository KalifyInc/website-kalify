import React from 'react'
import NavDetails from './NavDetails'

const Navigation = () => {
    return (
        <NavDetails>
            <a href="/">
                <img src="/src/assets/logo.png" alt="logo" />
            </a>

            <div className="items">
                <a className="hover-underline-animation" href="/#sobre-nos">Sobre Nós</a>
                <a className="hover-underline-animation" href="">Projetos</a>
                <a className="hover-underline-animation" href="">Cultura</a>
                <a className="hover-underline-animation" href="">Carreira</a>
                <a className="hover-underline-animation" href="">Blog</a>
                <button href="">Vamos conversar!</button>
            </div>
        </NavDetails>
    )
}

export default Navigation