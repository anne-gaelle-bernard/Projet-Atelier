import logo from '../assets/logos/laplateforme.png'
import atelierLogo from '../assets/logos/atelier.png'
import { testimonialsByYear } from '../data/testimonials'
import './Hero.css'

const years = Object.keys(testimonialsByYear)
const everyone = Object.values(testimonialsByYear).flat()

const stats = [
  { value: years.length, label: "promotions" },
  { value: everyone.length, label: "témoignages" },
  { value: years[years.length - 1].slice(0, 4), label: "année de création" },
]

export default function Hero() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="https://laplateforme.io/" target="_blank" rel="noreferrer">
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

        <ul className="hero-stats">
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </header>
    </>
  )
}
