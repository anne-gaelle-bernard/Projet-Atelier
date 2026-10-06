import './Hero.css'

function Hero() {
  return (
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
  )
}

export default Hero
