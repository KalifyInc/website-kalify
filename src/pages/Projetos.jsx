import React from 'react'
import Navigation from '../components/Navigation'
import SubPageDetails from '../components/SubPageDetails'

import Gema from '../assets/pic01.png'

const Projetos = () => {
    return (
        <SubPageDetails>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="content">
                <img src={Gema} alt="kalify-tech" />
                <h1>Nossos projetos</h1>
                <p>Existe uma série de idéias que compartilhamos todos os dias entre nossos membros, existe uma série de idéias que finalmente saem do papel e começam a se produzidos e quando eles são finalizados, é realmente gratificante o quanto a nossa equipe se empenhou a se ajudar e construir algo juntos. Esses são os nossos projetos que temos o orgulho de apresentar e carregar no peito como parte de nossa trajetória:</p>

                <h3>Web Essentials</h3>
                <p className="description">Um website em formato de aplicativo para mostrar softwares essenciais e necessários para a instalação do seu computador</p>
                <p className="links"><a href="https://webessentials.com.br" target="_blank">Website oficial</a> - <a href="https://github.com/Yagasaki7K/website-essentials" target="_blank">Projeto no Github</a></p>
                
                <h3>Onigiri Hardcore</h3>
                <p className="description">Um portal de notícias sobre animes, jogos, mangás, filmes, séries, tecnologia, eventos e muitos mais .. Tudo sobre a cultura nerd</p>
                <p className="links"><a href="https://onigirihardcore.vercel.app/" target="_blank">Website oficial</a> - <a href="https://github.com/Yagasaki7K/website-onigirihardcore" target="_blank">Projeto no Github</a></p>

                <h3>FindYourPet</h3>
                <p className="description">Um aplicativo para informar sobre resgate, adoção ou avisar a respeito de perdas de animais domésticos na cidade e região</p>
                <p className="links"><a href="https://findyourpet.vercel.app/" target="_blank">Website oficial</a> - <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank">Projeto no Github</a></p>

            </div>
        </SubPageDetails>
    )
}

export default Projetos