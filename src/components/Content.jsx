import React from 'react'
import ContentDetails from './ContentDetails'
import PicArthur from '/src/assets/pic03.jpg'
import PicYokaida from '/src/assets/yokaida.png'
import PicYagasaki from '/src/assets/pic02.jpg'
import BgKalify from '/src/assets/pic07.jpg'
import BgPied from '/src/assets/pic04.png'

const Content = () => {
    return (
        <ContentDetails>
            <div className="content">
                <div className="kalifytech" id="sobre-nos">
                    <div className="circle-centralized">
                        {/* <div className="circleKalify" /> */}
                    </div>
                    <h2 id="kalify">Tragetória da Kalify</h2>
                    <p>
                        Em sua ideia original, a Kalify era uma produtora de jogos para
                        entretenimento através do RPG, criando e contando histórias de
                        aventura e fantasia. Antes do real nome que carregamos agora, éramos
                        conhecidos como WorldMagic RPG, HabbyCry,
                        até se tornar Antech Productions, Kindred Publicidade e depois Kalify Inc (se oficializando).
                    </p>
                    <p>
                        Com o surgimento do Web Essentials, uma ferramenta que surgiu para simplificar
                        a vida dos usuários de computadores, a Kalify foi responsável por englobar esse
                        e muitos outros projetos como FindYourPet, Jhenny's Book, <s>Aperture Laboratories</s> e colocá-los embaixado das asas e se tornar a equipe de desenvolvimento por trás da criação de ferramentas para soluções e entretenimento.
                    </p>
                    <p>
                        Dessa maneira, a Kalify é responsável pela criação de soluções através da web, seja através de um website ou aplicativo para resolver problemas, facilitar vidas e entreter.
                    </p><br/><br/>

                    <h2 id="clientes">Nossos clientes</h2>
                    <p>
                        A lista de clientes que estão conosco ou já estiveram com a gente nessa jornada é grande, mas recheado de experiências e pessoas e empresas de grandes nomes: <br/><br/>
                        
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
                        <li>Stefani Folhados, William Risati</li>
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
                    <img src={BgKalify} alt="kalify-tech" />
                </div>

                <div className="kalifycrew" id="equipe">
                    <h2>A Equipe</h2>

                    <div className="img-crew">
                        <a href="https://yagasaki.vercel.app/" target="_blank">
                            <img src={PicYagasaki} alt="Anderson Marlon"/>
                        </a>
                    </div>

                    <div className="content-crew">
                        <strong>Anderson "Yagasaki" Marlon</strong> <br /><br />
                        <b>Fundador/CTO</b> <br />
                        <p>
                            Nascido e residente da cidade de Campinas, interior de São Paulo,
                            possuí formação no curso de Introdução a Ciências da Computação (CS50) da
                            Universidade de Harvard, chegou a conquistar o Terceiro Lugar no Hackathon
                            da AMBEV com a Shawee, Javascript Evangelist e é responsável por várias inovações como Web Essentials, FindYourPet, Jhenny's Book e vários outros pela Kalify Inc.
                        </p>
                        <p>
                            <u>Desenvolvedor de Software</u> pela Kalify Inc
                        </p>
                    </div>

                    <div className="img-crew spacing">
                        <a href="https://github.com/pamellafernandes" target="_blank">
                            <img src="https://github.com/pamellafernandes.png" alt="Pamella Fernandes"/>
                        </a>
                    </div>

                    <div className="content-crew">
                        <strong>Pamella "Pam" Fernandes</strong> <br /><br />
                        <b>Sócia Majoritária</b> <br />
                        <p>
                            Desenvolvedora desde Agosto de 2021, é focada em Javascript e Typescript, tendo como outros auxiliares o React, React Native, NodeJS e React Native. Chegou a trabalhar na CPQi Group até chegar a Desenvolvedora de Software pela Kalify Inc.
                        </p>
                        <p>
                            Graduada em Análise de Sistemas na Estácio
                        </p>
                    </div>

                    <div className="img-crew spacing">
                        <a href="https://isntagram.com/yokaida" target="_blank">
                            <img src={PicYokaida} alt="Marcelo Vinícius"/>
                        </a>
                    </div>

                    <div className="content-crew">
                        <strong>Marcelo "Yokaida" Vinícius</strong> <br /><br />
                        <b>Analista de Projetos {`&`} Design Gráfico</b> <br />
                        <p>
                        Nascido e residente da cidade de Campinas, interior de São Paulo, possuí formação em Web Design e Design Gráfico pela MacPoli, chegou a passar por grandes empresas como Burger King, Rota 320 Burguers e Adélia Boulangerie, até retornar a carreira de Design Gráfico pela Kalify Inc.
                        </p>
                    </div>

                    <div className="img-crew spacing disabled">
                        <img src={PicArthur} alt="Arthur Alves"/>
                    </div>

                    <div className="content-crew disabled">
                        <strong>Arthur "Animatrix" Alves</strong> <br /><br />
                        <b>Co-Fundador/COO</b> <br />
                        <p>
                            Nascido e residente da cidade de Campinas, interior de São Paulo, atualmente é
                            Analista de Crédito da WestRock Brasil, tem sido Estagiário
                            de administração com foco em RH na GGTE, Management Group
                            Tecnologias Educacionais na UNICAMP, Auxiliar Administrativo no
                            Centro de Tecnologia da Informação e Renato Archer, Instrutor
                            de Informática pela Acessa Escola. 
                        </p>
                        <p>
                            Bacharel em Administração de Empresas pela Universidade da Mackenzie
                        </p>
                    </div>

                    <img src={BgPied} className="banner" alt="kalify-tech" />

                    <div className="copyright">
                        <p>
                            © Copyright 2018 - {new Date().getFullYear()} - <a href="/">Kalify Inc</a> - Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </ContentDetails>
    )
}

export default Content