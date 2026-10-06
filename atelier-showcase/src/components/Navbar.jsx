import logo from '../assets/logos/laplateforme.png'
import atelierLogo from '../assets/logos/atelier.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="https://laplateforme.io/" target="_blank">
          <img className="navbar-logo" src={logo} alt="La Plateforme" />
        </a>
        <div className="navbar-links">
          <a href="#valeurs">Nos valeurs</a>
          <a href="#temoignages">Témoignages</a>
          <img className="navbar-atelier" src={atelierLogo} alt="L'atelier by La Plateforme" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
