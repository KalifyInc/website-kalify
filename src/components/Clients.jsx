import React from 'react'
import SubPageDetails from './SubPageDetails'
import BgKalify from '../assets/pic07.jpg'

const Clients = () => {
    return (
        <SubPageDetails>
            <div className="content" id="story">
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
                <hr />
                <h1 style={{ marginTop: '3rem' }} id="clients">Nossos clientes</h1>
                <p>
                    Temos uma série de clientes que confiaram e que confiam até hoje em nosso trabalho e no nosso profissionalismo. Prestamos serviços desde a época em que a Kalify se tornou uma marca para nós, um grupo de pessoas trabalhando junto para ajudar pessoas e solucionar problemas através da tecnologia, e bem, desde 2014 a lista não para de crescer, nossos clientes são e já foram:
                </p>

                <p>
                    ABREF Campinas • Alexandre Cabral • Companhia de Comando (11ª Bda Inf L) • Crowns Burger • Cumpadre's Snooker Bar • Doglivery • Donna Pandora • JG Burguer • Standard Stores / Sneakers • Maicon Queiroz - Centro de Treinamento • Marcos Alves Advocacia • Natus Nexu • Newlights City • Marry Perry Paris • Pipocas Marãna • Rota 320 - Shakes {`&`} Burgers • Sabrina Ceneme • Santa Fé Barbecue • Stefani Folhados • William Risati • YouConnectStart • 430º Pizza Napoletana • Doutora Suzikelli Souza • PWR Crossfit • Santabike • Irene Moreira • Unna Negócios Imobiliários • DonnaH Store • Thaise Rizzali • VMM Sports • Zmile Clinic
                </p>
            </div>
        </SubPageDetails>
    )
}

export default Clients