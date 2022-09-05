import React from 'react'
import Navigation from '../components/Navigation'
import SubPageDetails from '../components/SubPageDetails'

import BgKalify from '../assets/pic07.jpg'

const Clientes = () => {
    return (
        <SubPageDetails>
            <div className="navigation">
                <Navigation />
            </div>
            <div className="content">
                <img src={BgKalify} alt="kalify-tech" />
                <h1>Nossos clientes</h1>
                <p>
                    Temos uma série de clientes que confiaram e que confiam até hoje em nosso trabalho e no nosso profissionalismo. Prestamos serviços desde a época em que a Kalify se tornou uma marca para nós, um grupo de pessoas trabalhando junto para ajudar pessoas e solucionar problemas através da tecnologia, e bem, desde 2014 a lista não para de crescer, nossos clientes são: 

                    <li>ABREF Campinas</li>
                    <li>Alexandre Cabral</li>
                    <li>Companhia de Comando (11ª Bda Inf L)</li> 
                    <li>Crowns Burger</li>
                    <li>Cumpadre's Snooker Bar</li>
                    <li>Doglivery</li>
                    <li>Donna Pandora</li>
                    <li>JG Burguer</li>
                    <li>Standard Stores / Sneakers</li>
                    <li>Maicon Queiroz • Centro de Treinamento</li>
                    <li>Marcos Alves Advocacia</li>
                    <li>Natus Nexu</li>
                    <li>Newlights City</li>
                    <li>Marry Perry Paris</li>
                    <li>Pipocas Marãna</li>
                    <li>Rota 320 • Shakes {`&`} Burgers</li>
                    <li>Sabrina Ceneme</li>
                    <li>Santa Fé Barbecue</li>
                    <li>Stefani Folhados</li>
                    <li>William Risati</li>
                    <li>YouConnectStart</li>
                    <li>430º Pizza Napoletana</li>
                    <li>Doutora Suzikelli Souza</li>
                    <li>PWR Crossfit</li>
                    <li>Santabike</li>
                    <li>Irene Moreira</li>
                    <li>Unna Negócios Imobiliários</li>
                    <li>DonnaH Store</li>
                    <li>Thaise Rizzali</li>
                    <li>VMM Sports</li>
                    <li>Zmile Clinic</li>
                </p>
                <p>Veja a <a href="/equipe">nossa equipe</a></p>
            </div>
        </SubPageDetails>
    )
}

export default Clientes