import React from 'react'
import SubPageDetails from './SubPageDetails'
import ContentDetails from './ContentDetails'

import BgPizza from '../assets/pic04.png'
import PicArthur from '../assets/pic03.jpg'
import PicYokaida from '../assets/yokaida.png'

const Equipe = () => {
    return (
        <SubPageDetails>
            <ContentDetails>
                <div className="content" id="team">
                    <img src={BgPizza} alt="kalify-tech" />
                    <div className="kalifycrew" id="equipe">
                        <h2>A Equipe</h2>

                        <div className="img-crew">
                            <a href="https://github.com/Yagasaki7K" target="_blank">
                                <img src="https://github.com/yagasaki7k.png" alt="Anderson Marlon" />
                            </a>
                        </div>

                        <div className="content-crew">
                            <strong>Anderson "Yagasaki" Marlon</strong> <br /><br />
                            <b>Co-Fundador & Presidente</b> <br />
                            <p>
                                Nascido e residente da cidade de Campinas, interior de São Paulo,
                                possuí formação no curso de Introdução a Ciências da Computação (CS50) da
                                Universidade de Harvard e chegou a conquistar o Terceiro Lugar no Hackathon
                                da AMBEV com a Shawee, além de já ter trabalhado na Cenário Capital e na Linx/Stone.
                            </p>
                            <p>
                                Graduado na CS50 - Harvard em Ciências da Computação
                            </p>
                        </div>

                        <div className="img-crew spacing">
                            <a href="https://github.com/gabrielUpON" target="_blank">
                                <img src="https://github.com/gabrielUpON.png" alt="Gabriel Barbosa" />
                            </a>
                        </div>

                        <div className="content-crew">
                            <strong>Gabriel Barbosa</strong> <br /><br />
                            <b>Desenvolvedor Back-end</b> <br />
                            <p>
                                Estudando Bacharelado de Ciências da Computação na Universidade Estácio de Sá, possuí experiência em manutenção e rede de computadores; em suporte, instalação e configuração de software; e em desenvolvimento de programas em linguagem C/C++, Javascript e Python.
                            </p>
                            <p>
                                Estudante de Ciências da Computação na Universidade Estácio de Sá
                            </p>
                        </div>

                        <div className="img-crew spacing">
                            <a href="https://github.com/HelenCris" target="_blank">
                                <img src="https://github.com/HelenCris.png" alt="Gabriel Barbosa" />
                            </a>
                        </div>

                        <div className="content-crew disabled">
                            <strong>Helen Cris Morais</strong> <br /><br />
                            <b>Desenvolvedora Mobile</b> <br />
                            <p>
                                Estudando Bacharelado de Ciências da Computação na Universidade Estácio, possuí experiência de arquitetura utilizada no desenvolvimento de aplicativos para implantação nos sistemas operacionais Google Android e Apple IOS utilizando TypeScript, React Native, Firebase, Dart e Flutter
                            </p>
                            <p>
                                Estudante de Ciências da Computação na Universidade Estácio
                            </p>
                        </div>

                        <div className="img-crew spacing disabled">
                            <a href="https://github.com/pamellafernandes" target="_blank">
                                <img src="https://github.com/pamellafernandes.png" alt="Pamella Fernandes" />
                            </a>
                        </div>

                        <div className="content-crew disabled">
                            <strong>Pamella "Pam" Fernandes</strong> <br /><br />
                            <b>Sócia & Desenvolvedora Mobile</b> <br />
                            <p>
                                Desenvolvedora desde Agosto de 2021, é focada em Javascript e Typescript, tendo como outros auxiliares o React, React Native, NodeJS e React Native. Chegou a trabalhar na CPQi Group até chegar a Desenvolvedora Mobile pela Kalify Inc.
                            </p>
                            <p>
                                Graduada em Análise de Sistemas na Estácio
                            </p>
                        </div>

                        <div className="img-crew spacing disabled">
                            <a href="https://instagram.com/yokaida" target="_blank">
                                <img src={PicYokaida} alt="Marcelo Vinícius" />
                            </a>
                        </div>

                        <div className="content-crew disabled">
                            <strong>Marcelo "Yokaida" Vinícius</strong> <br /><br />
                            <b>Analista de Projetos {`&`} Design Gráfico</b> <br />
                            <p>
                                Nascido e residente da cidade de Campinas, interior de São Paulo, possuí formação em Web Design e Design Gráfico pela MacPoli, chegou a passar por grandes empresas como Burger King, Rota 320 Burguers e Adélia Boulangerie, até retornar a carreira de Design Gráfico pela Kalify Inc.
                            </p>
                            <p>Estudante de Administração pela PUC - Pontifícia Universidade Católica de Campinas</p>
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
                </div>
            </ContentDetails>
        </SubPageDetails >
    )
}

export default Equipe