import React, { useRef } from "react";
import AppDetails from "../components/AppDetails";
import Navigation from "../components/Navigation";
import Content from "../components/Content";

import VideoBackground from "../assets/home.webm";

import Clients from "../components/Clients";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Career from "../components/Career";
import Footer from "../components/Footer";

function redirectDiscord() {
    window.open('https://wa.me/5519998018174?text=Olá%20estou%20interessado%20em%20saber%20mais%20sobre%20os%20serviços%20da%20Kalify%20Inc.', "_blank");
}

function App() {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        // Check if video element exists
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <AppDetails>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
            <div className="header">
                <video ref={videoRef} id="background-video" loop muted preload="auto">
                    <source src={VideoBackground} type="video/webm" />
                </video>

                <div className="navigation">
                    <Navigation />
                </div>

                <div className="title">
                    <div className="content-header">
                        <h2>Desenvolvemos soluções através da tecnologia</h2>
                        <h4>
                            Com nossos serviços e ideais entregamos experiências e soluções
                            digitais que evoluem e inspiram pessoas e comunidades
                        </h4>
                    </div>
                    <div className="buttons">
                        <a href="#story" className="buttonSignUp">
                            Conheça a nossa história
                        </a>
                        <a onClick={handlePlayVideo} className="buttonSignUp">
                            <i className="uil uil-play"></i>
                        </a>
                    </div>
                </div>

                <div className="socialmedia">
                    {/* <a href="https://instagram.com/yagasaki.dev" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a> */}
                    <a href="https://twitter.com/KalifyInc" target="_blank">
                        <i className="uil uil-twitter"></i>
                    </a>
                    <a href="https://github.com/KalifyInc" target="_blank">
                        <i className="uil uil-github"></i>
                    </a>
                    <a href="https://discord.gg/jhSepmE7nN" target="_blank">
                        <i className="uil uil-club"></i>
                    </a>
                </div>

                <div className="scroll">
                    <div className="items">
                        <li><a className="hover-underline-animation" href="/#story">Nossa História</a></li>
                        <li><a className="hover-underline-animation" href="/#clients">Clientes</a></li>
                        <li><a className="hover-underline-animation" href="/#projects">Projetos</a></li>
                        <li><a className="hover-underline-animation" href="/#team">Equipe</a></li>
                        <li><a className="hover-underline-animation" href="/docs/intro">Open Source</a></li>
                        <button onClick={redirectDiscord}>Vamos conversar!</button>
                    </div>
                </div>

            </div>

            {/* <Content /> */}
            <Clients />
            <Projects />
            <Career />
            <Team />
            <Footer />
        </AppDetails>
    );
}

export default App;
