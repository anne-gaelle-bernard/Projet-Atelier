import logo from '../assets/logos/laplateforme.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src={logo} alt="La Plateforme" />
          <p className="footer-tagline">L'Atelier de La Plateforme, la grande école du numérique pour tous.</p>
        </div>
        <a className="btn" href="https://laplateforme.io/" target="_blank">
          Découvrir La Plateforme
        </a>
      </div>
      <p className="footer-bottom">© La Plateforme – Atelier Memories</p>
    </footer>
  )
}

export default Footer
