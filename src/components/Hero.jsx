import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Guillermo Zubieta Caballero</h1>
        <h2 className="hero-subtitle">Front-End Developer</h2>
        <h3 className="hero-subtitle-small">Industrial Engineer & UX/UI Designer</h3>
        <p className="hero-description">
          Welcome to my portfolio! Here you'll find more information about my background, skills, and the projects I've worked on as a developer. I hope you enjoy exploring my work!
        </p>
        <a
          href="/GZResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          See my Resume
        </a>

        <div className="home-buttons">
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </div>
    </section>
  )
}

export default Hero;