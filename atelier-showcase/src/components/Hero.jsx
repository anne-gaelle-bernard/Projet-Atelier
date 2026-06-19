import logo from '../assets/logo laplateforme.png'
import badge from '../assets/logo atelier.png'

export default function Hero() {
  return (
    <header>

      <img src={logo} alt="Logo La Plateforme" />
      <img src={badge} alt="L'atelier by La Plateforme" />

      <div className="presentation">
        <div className="blue-block"></div>

        <div className="presentation-text">
          <h2>Présentation</h2>
          <p>Atelier Memories : regroupe les témoignages et les photos des anciens étudiants et membres du staff de l'Atelier de La Plateforme.</p>
        </div>

        <div className="blue-block"></div>
      </div>

    </header>
  )
}
