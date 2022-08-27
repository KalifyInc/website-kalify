import React from 'react'
import Navigation from '../components/Navigation'
import SubPageDetails from '../components/SubPageDetails'

import BgKalify from '../assets/pic07.jpg'

const Historia = () => {
    return (
        <SubPageDetails>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="content">
                <img src={BgKalify} alt="kalify-tech" />
                <h1>Nossa história</h1>
                <p>
                    A Kalify Inc surgiu em 2018 como uma marca de desenvolvimento de software. Nossa história vai muito antes disso, começamos lá em 2008, com o surgimento da World Magic RPG, uma equipe de produtora de jogos para criação e entretenimento através do RPG, contando histórias de aventura e fantasia. Após isso surgiu vários outros como HabbyCry, Antech Productions, tudo seguindo a mesma ideia, até surgir a Kindred Publicidades, onde o nosso foco começou em desenvolvimento, dali em diante fomos apenas evoluindo, até se tornar o que é hoje, a Kalify Inc.
                </p>
                <p>
                    Com o surgimento do Web Essentials, uma ferramenta que surgiu para simplificar
                    a vida dos usuários de computadores, e nosso primeiro desenvolvimento, a Kalify surgiu e se responsabilizou por englobar esse e muitos outros projetos como FindYourPet, Jhenny's Book, <s>Aperture Laboratories</s> e colocá-los embaixado das nossas asas, se tornando e formando uma equipe de desenvolvimento por trás da criação de ferramentas para soluções e entretenimento.
                </p>
                <p>
                    Atualmente, a Kalify é responsável pela criação de soluções através da web com muitos nomes, seja através de um website ou aplicativo para resolver problemas, facilitar vidas ou até mesmo entreter.
                </p>
                <p>Nosso foco é desenvolver soluções através da tecnologia</p>
                <p>Veja <a href="/projetos">nossos projetos</a></p>
            </div>
        </SubPageDetails>
    )
}

export default Historia