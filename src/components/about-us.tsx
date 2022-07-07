import "../styles/about-us.scss";
import Member from "./member";

const AboutUs: React.FC = () => {

	return (
		<section className="container">
			<div>
				<div className="container-quote">
					<p className="container-quote__paragraph">
						<strong>We will help you building better apps, faster and like a GAMER. </strong>
						Our team of expert developers and open source volunteers created the best user experiences in some of the most popular apps in the world. And we are building solutions through the web for society. Uniting creativity, open source and solutions.
					</p>
				</div>
			</div>
			<div className="ourteam">
				<h2 className="ourteam__title">Kalify Crew</h2>
				<div className="ourteam__sub-title">Devs who helped us</div>
			</div>
			<div className="members">
				<Member name="Anderson Marlon" socialId="@Yagasaki7K" link="https://github.com/Yagasaki7K" linkStaticImage="https://github.com/Yagasaki7K.png" />

				<Member name="Aron Felippe" socialId="@Nirayuki" link="https://github.com/Nirayuki" linkStaticImage="https://github.com/Nirayuki.png" />

				<Member name="Cícero Lino" socialId="@CiceroLino" link="https://github.com/CiceroLino" linkStaticImage="https://github.com/CiceroLino.png" />
				
				<Member name="Caio Miranda" socialId="@cailir" link="https://github.com/cailir" linkStaticImage="https://github.com/cailir.png" />
				
				<Member name="Luciano Dantas" socialId="@ldantas-s" link="https://github.com/ldantas-s" linkStaticImage="https://github.com/ldantas-s.png" />
				
				<Member name="Jean Jacques" socialId="@jjeanjacques10" link="https://github.com/jjeanjacques10" linkStaticImage="https://github.com/jjeanjacques10.png" />
				
				<Member name="Pamella Fernandes" socialId="@pamellafernandes" link="https://github.com/pamellafernandes" linkStaticImage="https://github.com/pamellafernandes.png" />
				
				<Member name="Guilherme Hamalainen" socialId="@Ludycrous" link="https://github.com/Ludycrous" linkStaticImage="https://github.com/Ludycrous.png" />
				
				<Member name="Arthur Fernandes" socialId="@LawliL" link="https://github.com/LawliL" linkStaticImage="https://github.com/LawliL.png" />
				
				<Member name="Deivid Gabriel" socialId="@Fukubi" link="https://github.com/Fukubi" linkStaticImage="https://github.com/Fukubi.png" />
				
				<Member name="Henrique Nitatori" socialId="@henrique-nitatori" link="https://github.com/henrique-nitatori" linkStaticImage="https://github.com/henrique-nitatori.png" />
			</div>
		</section>
	);
};

export default AboutUs;
