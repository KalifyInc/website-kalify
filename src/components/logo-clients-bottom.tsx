import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClientsBottom: React.FC = () => {
    return (
        <SliderContainer initalOffsetX={80} contentWidth={1759} marginTop={24}>
            <div className="logo-container logo-container-bottom">
                <div className="logo-container__item">
                    <img src="https://yagasaki7k.github.io/website-youconnectstart/images/pic01.png" alt="YouConnectStart" />
                </div>
                <div className="logo-container__item">
                    <img src="https://github.com/Yagasaki7K/website-onigirihardcore/blob/main/src/logotipo-1.png?raw=true" alt="Onigiri Hardcore" />
                </div>
                <div className="logo-container__item">
                    <img src="https://recuperaboleto-mpp.netlify.app/assets/logotipo-header.png" alt="Recupera Boletos" />
                </div>
                <div className="logo-container__item">
                    <img src="https://www.marryperryparis.com.br/assets/wp-content/uploads/2021/02/logo-marry-perry-topo.png" alt="Marry Perry Paris" />
                </div>
                <div className="logo-container__item">
                    <img src="https://github.com/Yagasaki7K/website-nlwmoveit/raw/main/public/logo-full.svg" alt="Move.it" />
                </div>
                <div className="logo-container__item">
                    <img src="https://raw.githubusercontent.com/Yagasaki7K/website-nlwpodcastr/7e50e74c35f403ea7ef94d094409c38ed9dee3a0/public/logo.svg" alt="Podcastr" />
                </div>
                <div className="logo-container__item">
                    <img src="https://agenciaclipper.netlify.app/img/logotipo.png" alt="Agência Clipper" />
                </div>
            </div>
        </SliderContainer>
    );
};

export default LogoClientsBottom;
