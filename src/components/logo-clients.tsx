import React from "react";
import SliderContainer from "./slider";
import "../styles/logo-clients.scss";

const LogoClients: React.FC = () => {
	return (
		<SliderContainer initalOffsetX={0} contentWidth={1759}>
			<div className="logo-container">
				<div className="logo-container__item sera">
					<img src="https://webessentials.com.br/Logo.png" alt="Web Essentials" />
				</div>
				<div className="logo-container__item">
					<img src="https://findyourpet.vercel.app/assets/logotipo-white.83cf607a.png" alt="FindYourPet"/>
				</div>
				<div className="logo-container__item">
					<img src="https://cenariocapital.com.br/assets/img/logo.png" alt="Cenário Capital" />
				</div>
				<div className="logo-container__item">
					<img src="https://github.com/filipedeschamps.png" alt="Newsletterchamps" />
				</div>
				<div className="logo-container__item">
					<img src="https://static.2bebot.com.br/media/bebot/svg/logo-h.svg" alt="2BeBot" />
				</div>
				<div className="logo-container__item">
					<img src="https://blackessentials.vercel.app/assets/logo.8b78b48f.png" alt="Black Essentials" />
				</div>
				<div className="logo-container__item">
					<img src="https://previdenciarista.com/blog/wp-content/uploads/2019/03/logo-horizontal-660x102-1.png" alt="Previdenciarista" />
				</div>
				<div className="logo-container__item">
					<img src="https://github.com/Yagasaki7K/website-alogarapa/raw/main/src/images/logo.png" alt="AloGarapa" />
				</div>
				<div className="logo-container__item">
					<img src="https://yagasaki7k.github.io/website-rota320/assets/logotipo.png" alt="Rota 320" />
				</div>
			</div>
		</SliderContainer>
	);
};

export default LogoClients;
