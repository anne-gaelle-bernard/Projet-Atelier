import { useState } from 'react'
import temoignages from '../data/testimonials'
import './Testimonials.css'

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
          <div className="card" key={personne.nom}>
            <p className="card-text">{personne.texte}</p>

            <div className="card-author">
              {personne.photo ? (
                <img className="avatar" src={personne.photo} alt={personne.nom} />
              ) : (
                <div className="avatar avatar-placeholder">{personne.nom.charAt(0)}</div>
              )}
              <h3 className="card-name">{personne.nom}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
