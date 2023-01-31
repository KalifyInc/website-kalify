import React from 'react'
import SubPageDetails from './SubPageDetails'
import BgKalify from '../assets/pic07.png'

const Clients = () => {
    return (
        <SubPageDetails>
            <div className="content" id="story">
                <img src={BgKalify} alt="kalify-tech" />
                <h1>Nossa história</h1>
                <p>
                    A Kalify Inc foi fundada em 2018 como um projeto de desenvolvimento de software, mas nossa história se estende muito além disso. Começamos em 2008 com a criação da World Magic RPG, uma equipe de jogos de RPG que contavam histórias de aventura e fantasia. A partir daí, criamos várias outros projetos, como HabbyCry e Antech Productions, sempre seguindo a mesma ideia, até chegar à Kindred Publicidades, onde nosso foco passou a ser o desenvolvimento. A partir daí, continuamos evoluindo até se tornarmos o que somos hoje, a Kalify Inc.
                </p>
                <p>
                    Com o surgimento do Web Essentials, uma ferramenta criada para simplificar a vida dos usuários de computadores e nosso primeiro desenvolvimento, a Kalify foi criada e passou a englobar projetos como FindYourPet, Jhenny's Book, Aperture Laboratories e muitos outros, se tornando uma equipe de desenvolvimento de soluções para entretenimento e facilitando a vida das pessoas.
                </p>
                <p>
                    Atualmente, a Kalify é responsável por criar soluções através da web, seja através de websites ou aplicativos, com o objetivo de resolver problemas, facilitar a vida das pessoas e entreter.
                </p>
                <p>Nosso foco é desenvolver soluções através da tecnologia.</p>
                <hr />
                <h1 style={{ marginTop: '3rem' }} id="clients">Nossos clientes</h1>
                <p>
                    Temos uma série de clientes que confiam em nosso trabalho e profissionalismo desde que a Kalify se tornou uma marca para nós. Desde 2014, nós, um grupo de pessoas trabalhando juntos, temos ajudado pessoas e solucionado problemas através da tecnologia e a lista de nossos clientes tem crescido constantemente. Nossos clientes atuais e anteriores incluem:
                </p>

                <p>
                    ABREF Campinas • Alexandre Cabral • Companhia de Comando (11ª Bda Inf L) • Crowns Burger • Cumpadre's Snooker Bar • Doglivery • Donna Pandora • JG Burguer • Standard Stores / Sneakers • Maicon Queiroz - Centro de Treinamento • Marcos Alves Advocacia • Natus Nexu • Newlights City • Marry Perry Paris • Pipocas Marãna • Rota 320 - Shakes {`&`} Burgers • Sabrina Ceneme • Santa Fé Barbecue • Stefani Folhados • William Risati • YouConnectStart • 430º Pizza Napoletana • Doutora Suzikelli Souza • PWR Crossfit • Santabike • Irene Moreira • Unna Negócios Imobiliários • DonnaH Store • Thaise Rizzali • VMM Sports • Zmile Clinic
                </p>
            </div>
        </SubPageDetails>
    )
}

export default Clients