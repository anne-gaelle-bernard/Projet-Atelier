import logo from '../assets/logos/atelier.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src={logo} alt="L'atelier by La Plateforme" />
          <p className="footer-tagline">L'Atelier de La Plateforme, la grande école du numérique pour tous.</p>
        </div>

        <div className="footer-liens">
          <a href="#valeurs">Nos valeurs</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#">Retour en haut ↑</a>
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
