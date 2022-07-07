import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testtimonial: React.FC = () => {
	return (
		<Carousel>
			<CarouselItem index={0}>
				<Review by='Rosilene Sakanaka' content='“Hardworking, creative, competent, dedicated, punctual and responsible. Excellent professional who always seeks the best options to offer to customers without losing the quality of service.“' />
			</CarouselItem>
			<CarouselItem index={1}>
				<Review by='Pedro Henrique' content="“An excellent professional, very dedicated. Always looking to learn, constantly evolving, agile in tasks. Success!“" />
			</CarouselItem>
			<CarouselItem index={2}>
				<Review by='Alexandre Carvalho (CTO of Cenário Capital)' content="“An excellent professional with a rapid evolution, an organized professional, helpful and who does well with pressure!.“" />
			</CarouselItem>
			<CarouselItem index={3}>
				<Review by='Clinton ' content="“When we first found Kalify they seemed too good to be true. Professional, fast and ridiculously talented; the component they have developed for our React app is super smooth and responsive.“" />
			</CarouselItem>
			<CarouselItem index={4}>
				<Review by='Marcelo' content="“Working with the Kalify team feels like a cheat code. When it comes to building performant and scalable React apps, they're the best hands down.“" />
			</CarouselItem>
			<CarouselItem index={5}>
				<Review by='Roland' content="“We were hitting the inevitable pains of rapid growth and needed to level up our app quickly. What would have taken us months took the Kalify team mere days. There is nothing they can't figure out or make happen. Simply the best.“" />
			</CarouselItem>
		</Carousel>
	)
};

export default Testtimonial;
