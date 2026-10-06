import logo from '../assets/logos/laplateforme.png'
import atelierLogo from '../assets/logos/atelier.png'
import './Hero.css'

function Hero() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="https://laplateforme.io/" target="_blank">
            <img className="navbar-logo" src={logo} alt="La Plateforme" />
          </a>
          <div className="navbar-links">
            <a href="#temoignages">Témoignages</a>
            <img className="navbar-atelier" src={atelierLogo} alt="L'atelier by La Plateforme" />
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <p className="hero-kicker">L'Atelier de La Plateforme</p>
          <h1 className="hero-title">
            Atelier Memories, <span>les souvenirs de l'Atelier !</span>
          </h1>
          <p className="hero-text">
            Retrouvez les témoignages des étudiants et membres du staff de l'Atelier, année après année.
          </p>
          <a className="btn" href="#temoignages">Lire les témoignages</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <strong>3</strong>
            <span>promotions</span>
          </div>
          <div className="stat">
            <strong>37</strong>
            <span>témoignages</span>
          </div>
          <div className="stat">
            <strong>2019</strong>
            <span>année de création</span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero
