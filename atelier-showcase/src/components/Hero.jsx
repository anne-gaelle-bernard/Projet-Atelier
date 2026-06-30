import logo from '../assets/logo laplateforme.png'

export default function Hero() {
  return (
    <header>
      <div className="hero-logo-cards">
        <div className="hero-logo-card hero-logo-card--white">
          <img src={logo} alt="Logo La Plateforme" />
        </div>
        <div className="hero-logo-card hero-logo-card--blue">
          <span className="atelier-badge">ATELIER DE LA PLATEFORME</span>
        </div>
      </div>

      <div className="presentation">
        <h2>Atelier Memories</h2>
        <p>Retrouvez les témoignages et les souvenirs des étudiants et membres du staff de l'Atelier de La Plateforme, année après année.</p>
      </div>
    </header>
  )
}
