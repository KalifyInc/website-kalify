import React from 'react'
import SubPageDetails from './SubPageDetails'

const Projetos = () => {
    return (
        <SubPageDetails>
            <div className="content" id="projects">
                <h1>Nossos projetos</h1>
                <p>Existem várias idéias que compartilhamos diariamente entre nossos membros, que saem do papel e são produzidas. Quando elas são concluídas, é gratificante ver o esforço e a colaboração de nossa equipe para construir algo juntos. Esses são os projetos de que temos orgulho de apresentar e que fazem parte da nossa trajetória:</p>

                <h3>Essentials</h3>
                <p className="description">Um website em formato de aplicativo para mostrar softwares essenciais e necessários para a instalação do seu computador</p>
                <p className="links"><a href="https://webessentials.com.br" target="_blank">Website Oficial</a> - <a href="https://github.com/Yagasaki7K/website-essentials" target="_blank">Projeto no Github</a></p>

                <h3>Onigiri Hardcore</h3>
                <p className="description">Um portal de notícias sobre animes, jogos, mangás, filmes, séries, tecnologia, eventos e muitos mais .. Tudo sobre a cultura nerd</p>
                <p className="links"><a href="https://onigirihardcore.vercel.app/" target="_blank">Website Oficial</a> - <a href="https://github.com/Yagasaki7K/website-onigirihardcore" target="_blank">Projeto no Github</a></p>

                <h3>FindYourPet</h3>
                <p className="description">Um aplicativo web para informar sobre resgate, adoção ou avisar a respeito de perdas de animais domésticos na cidade e região</p>
                <p className="links"><a href="https://findyourpet.vercel.app/" target="_blank">Website Oficial</a> - <a href="https://github.com/Yagasaki7K/website-findyourpet" target="_blank">Projeto no Github</a></p>

                <h3>AlôGarapa</h3>
                <p className="description">Um aplicativo web para informar sobre comércios próximos a você que vendem caldo de cana, facilitando aos moradores locais encontrarem pequenos empreendimentos da área</p>
                <p className="links"><a href="https://alogarapa.vercel.app/" target="_blank">Website Oficial</a> - <a href="https://github.com/Yagasaki7K/website-alogarapa" target="_blank">Projeto no Github</a></p>
                <hr />
            </div>
        </SubPageDetails>
    )
}

export default Projetos