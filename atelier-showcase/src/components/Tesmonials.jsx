import { useState } from 'react'
import julien from '../assets/Julien.png'
import jerome from '../assets/Jerome.png'
import ana from '../assets/Ana.png'
import fatima from '../assets/fatima.png'
import amine from '../assets/Amine.png'
import thomas from '../assets/Thomas.png'
import alex from '../assets/Alex.png'
import jb from '../assets/JB.png'
import rabaou from '../assets/Rabaou.png'
import johan from '../assets/Johan.png'

const personnes = [
  { nom: "Julien Athomas", photo: julien, texte: "Nous avons passé une année très riche, au cours de laquelle nous avons pu construire nos process et affirmer l'identité de l'atelier." },
  { nom: "Jérôme Savajols", photo: jerome, texte: "Une très belle année marquée par la montée en compétences de toutes les équipes des alternants et la cohésion de l'équipe." },
  { nom: "Ana Stanko", photo: ana, texte: "Merci à toutes et à tous pour cette année riche en aventures. Good job dream team !" },
  { nom: "Fatima Elmouhine", photo: fatima, texte: "Je suis sur que tous ensemble on va réaliser des choses incroyable cette année aussi." },
  { nom: "Mohamed El Amine Necib", photo: amine, texte: "Mon année passée au sein de l'Atelier a été une expérience véritablement enrichissante." },
  { nom: "Thomas Spinec", photo: thomas, texte: "Cette année à l'Atelier a été très enrichissante, toute l'équipe est bienveillante et accessible." },
  { nom: "Alexandre Aloesode", photo: alex, texte: "Après bientôt 2 années passées à l'Atelier, je constate avec enthousiasme ma montée en compétence." },
  { nom: "Jean-Bernard Laguerre", photo: jb, texte: "Pour ma première année à l'Atelier, j'ai eu l'occasion de travailler sur des projets très variés." },
  { nom: "Rabaou Ibrahim", photo: rabaou, texte: "J'ai beaucoup appris sur divers langages informatiques et des méthodes modernes d'organisation du travail." },
  { nom: "Johan Bouguermouh", photo: johan, texte: "Je suis profondément honoré d'avoir pu partager une expérience si riche en compagnie de l'équipe de l'atelier." },
]

export default function Testimonial() {
  const [index, setIndex] = useState(0)

  return (
    <section>

      <div className="testimonials-header">
        <h2 className="badge-annee">Année 2023-2024</h2>
        <div>
          <button className="nav-btn" onClick={() => setIndex(index - 3)} disabled={index === 0}>{"<"}</button>
          <button className="nav-btn" onClick={() => setIndex(index + 3)} disabled={index + 3 >= personnes.length}>{">"}</button>
        </div>
      </div>

      <div className="cards">
        {personnes.slice(index, index + 3).map((p) => (
          <div className="card" key={p.nom}>
            <div className="card-header">
              <img src={p.photo} alt={p.nom} />
              <strong>{p.nom}</strong>
            </div>
            <p className="card-text">{p.texte}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
