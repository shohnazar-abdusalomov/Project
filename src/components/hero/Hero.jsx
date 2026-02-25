import "./Hero.css";
import HeroLeft from "./hero-left/HeroLeft";
import HeroRight from "./hero-right/HeroRight";

function Hero() {
	return (

		// Hero component
		
		<section className="hero">
			<div className="container">
				<div className="hero-content">
					<HeroLeft />
					<HeroRight />
				</div>
			</div>
		</section>
	);
}

export default Hero;
