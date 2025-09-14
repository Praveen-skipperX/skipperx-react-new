import bgImage from '../assets/hero-landing-hd.png';
import './Hero.css';


const Hero = () => {
  return (
    <div className="hero-img-wrapper">
      <img src={bgImage} alt="background" className="hero-img" />
      <div className="overlayp">
        <h1>
          Your dream skill is, not days, not hours but <span className="highlight-red">minutes </span> away
        </h1>
        <p>Built for Innovators, Entrepreneur & Hustlers</p>
        <button
          className="btn red"
          onClick={() => {
            const section = document.getElementById("innovators");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Programs
        </button>

      </div>
    </div>
  );
};

export default Hero;
