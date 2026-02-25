import "./HeroSection.css";
import HeroLeft from "./hero-left/HeroLeft";
import HeroRight from "./hero-right/HeroRight";

function HeroSection() {
	return (

		// Hero component
		
		<section className="hero">
      <div className="hero-container">
        <HeroLeft />
        <HeroRight />
      </div>
    	</section>
	);
}

export default HeroSection;
