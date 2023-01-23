import React from 'react'
import SubPageDetails from './SubPageDetails'
import ContentDetails from './ContentDetails'

import BgPizza from '../assets/pic04.png'
import PicArthur from '../assets/pic03.jpg'
import PicYokaida from '../assets/yokaida.png'
import PicYagasaki from '../assets/pic02.jpg'

const Equipe = () => {
    return (
        <SubPageDetails>
            <div className="content" id="team">
                <ContentDetails>
                    <img src={BgPizza} alt="kalify-tech" className="BgPizza" />
                    <div className="kalifycrew" id="equipe">
                        <h2>A Equipe</h2>

                        <div className="img-crew">
                            <a href="https://yagasaki.vercel.app/" target="_blank">
                                <img src={PicYagasaki} alt="Anderson Marlon" />
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
                                <u>Desenvolvedor de Software</u> pela Stone Co.
                            </p>
                        </div>

                        <div className="img-crew spacing">
                            <a href="https://github.com/pamellafernandes" target="_blank">
                                <img src="https://github.com/pamellafernandes.png" alt="Pamella Fernandes" />
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
                                <img src={PicYokaida} alt="Marcelo Vinícius" />
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
                            <img src={PicArthur} alt="Arthur Alves" />
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
                    </div>
                </ContentDetails>
            </div>
        </SubPageDetails>
    )
}

export default Equipe