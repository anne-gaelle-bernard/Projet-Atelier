import { useState } from 'react'
import { testimonialsByYear } from '../data/testimonials'
import YearTabs from './YearTabs'
import TestimonialCard from './TestimonialCard'
import './Testimonials.css'

const years = Object.keys(testimonialsByYear)

export default function Testimonials() {
  const [annee, setAnnee] = useState(years[0])

  const personnes = testimonialsByYear[annee]

  return (
    <section id="temoignages">
      <h2 className="section-title">Témoignages</h2>
      <p className="section-subtitle">Ce que nos membres disent de l'Atelier</p>

      <div className="testimonials-header">
        <YearTabs years={years} selected={annee} onSelect={setAnnee} />
        <span className="members-count">{personnes.length} membres</span>
      </div>

      <div className="cards">
        {personnes.map((p) => (
          <TestimonialCard key={p.nom} {...p} />
        ))}
      </div>
    </section>
  )
}
