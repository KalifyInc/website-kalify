import React from "react";
import { UilInstagram, UilTwitter, UilGithub, UilDiscord } from "@iconscout/react-unicons";

import AppDetails from "../components/AppDetails";
import Navigation from "../components/Navigation";
import Content from "../components/Content";

import VideoBackground from "../assets/home.webm";

import Clients from "../components/Clients";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Career from "../components/Career";

function App() {
  return (
    <AppDetails>
      <div className="header">
        <video id="background-video" autoPlay loop muted preload="auto">
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
          <a href="#story" className="buttonSignUp">
            Conheça a nossa história
          </a>
        </div>

        <div className="socialmedia">
          <a href="https://instagram.com/yagasaki.dev" target="_blank">
            <UilInstagram />
          </a>
          <a href="https://twitter.com/KalifyInc" target="_blank">
            <UilTwitter />
          </a>
          <a href="https://github.com/KalifyInc" target="_blank">
            <UilGithub />
          </a>
          <a href="https://discord.gg/jhSepmE7nN" target="_blank">
            <UilDiscord  />
          </a>
        </div>
      </div>

      <Content />
      <Clients />
      <Projects />
      <Career />
      <Team />
      {/* <Projects/>
            <Culture/>
            
            <Blog/> */}
    </AppDetails>
  );
}

export default App;
