import { useState } from 'react'
import temoignages from '../data/testimonials'
import './Testimonials.css'

// un témoignage : si le texte est long, on affiche le début + un bouton "Lire la suite"
function Temoignage({ personne }) {
  const [ouvert, setOuvert] = useState(false)

  const estLong = personne.texte.length > 200

  let texte = personne.texte
  if (estLong && !ouvert) {
    texte = personne.texte.slice(0, 200) + "..."
  }

  return (
    <div className="bulle">
      <div className="card-author">
        {personne.photo ? (
          <img className="avatar" src={personne.photo} alt={personne.nom} />
        ) : (
          <div className="avatar avatar-vide">{personne.nom.charAt(0)}</div>
        )}
        <h3 className="card-name">{personne.nom}</h3>
        <span className="guillemet">“</span>
      </div>

      <p className="card-text">{texte}</p>

      {estLong && (
        <button className="lire-suite" onClick={() => setOuvert(!ouvert)}>
          {ouvert ? "Réduire" : "Lire la suite"}
        </button>
      )}
    </div>
  )
}

function Testimonials() {
  const [annee, setAnnee] = useState("2025-2026")

  const personnes = temoignages[annee]

  return (
    <section id="temoignages">
      <h2 className="section-title">Témoignages</h2>
      <p className="section-subtitle">Ce que nos membres disent de l'Atelier</p>

      <div className="testimonials-header">
        <div className="annee-tabs">
          <button
            className={annee === "2025-2026" ? "badge-annee active" : "badge-annee"}
            onClick={() => setAnnee("2025-2026")}
          >
            2025 – 2026
          </button>
          <button
            className={annee === "2023-2024" ? "badge-annee active" : "badge-annee"}
            onClick={() => setAnnee("2023-2024")}
          >
            2023 – 2024
          </button>
          <button
            className={annee === "2022-2023" ? "badge-annee active" : "badge-annee"}
            onClick={() => setAnnee("2022-2023")}
          >
            2022 – 2023
          </button>
        </div>
        <span className="members-count">{personnes.length} membres</span>
      </div>

      <div className="cards">
        {personnes.map((personne) => (
          <Temoignage key={annee + personne.nom} personne={personne} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
