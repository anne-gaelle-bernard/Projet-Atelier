import { useState } from 'react'
import julien from '../assets/Julien.png'
import jerome from '../assets/jerome.png'
import ana from '../assets/Ana.png'
import fatima from '../assets/FATIMA.png'
import amine from '../assets/Amine.png'
import thomas from '../assets/thomas.png'
import alex from '../assets/alex.png'
import jb from '../assets/JB.png'
import rabaou from '../assets/rabaou.png'
import johan from '../assets/johan.png'
import morad from '../assets/Morad.png'

const annees = {
  "2023-2024": [
    { nom: "Julien Athomas", photo: julien, texte: "Nous avons passé une année très riche, au cours de laquelle nous avons pu construire nos process et affirmer l'identité de l'atelier. Nous avons développé de nombreux projets variés qui nous ont permis de tirer de précieuses leçons sur nos méthodes, nos outils, et notre manière de chiffrer les projets." },
    { nom: "Jérôme Savajols", photo: jerome, texte: "Une très belle année marquée par la montée en compétences de toutes les équipes des alternants et la cohésion de l'équipe d'encadrement et des lead dev. Nous avons beaucoup progressé sur nos méthodes d'avant-projet et de chiffrage." },
    { nom: "Ana Stanko", photo: ana, texte: "Merci à toutes et à tous pour cette année riche en aventures. Nous avons réalisé de beaux projets comme WELL, PLD, SRIAS ou encore CDPI. Nous gagnons chaque jour en efficacité et en précision. Good job dream team !" },
    { nom: "Morad Labrid", photo: morad, texte: "Après 2 ans à l'Atelier, j'ai eu l'occasion de réaliser un certain nombre de projets aussi enrichissants les uns que les autres. L'équipe permet de travailler dans un climat bienveillant avec toujours de la bonne humeur." },
    { nom: "Fatima Elmouhine", photo: fatima, texte: "Je suis lead dev à l'Atelier depuis maintenant 1 an. Mon rôle va être d'accompagner sur le plan technique les alternants et de développer des projets. Avec la dream team qu'on a, on ne peut que tout déchirer !" },
    { nom: "Mohamed El Amine Necib", photo: amine, texte: "Mon année passée au sein de l'Atelier a été une expérience véritablement enrichissante. L'esprit d'équipe qui règne est exceptionnel. L'Atelier m'a permis de développer un sens accru de la responsabilité et de l'engagement." },
    { nom: "Thomas Spinec", photo: thomas, texte: "Cette année à l'Atelier a été très enrichissante. Les projets variés m'ont permis de développer mes compétences techniques, de découvrir de nouveaux langages. Je suis reconnaissant pour cette expérience et j'ai hâte de voir ce que la nouvelle année nous réserve." },
    { nom: "Alexandre Aloesode", photo: alex, texte: "Après bientôt 2 années passées à l'Atelier, je constate avec enthousiasme ma montée en compétence en tant que développeur WEB, permise par un encadrement à l'écoute et bienveillant." },
    { nom: "Jean-Bernard Laguerre", photo: jb, texte: "Pour ma première année à l'Atelier, j'ai travaillé sur des projets très variés et rencontré plusieurs clients. J'ai pu devenir un développeur plus complet. Le bilan de cette année est fantastique, je n'y changerais presque rien." },
    { nom: "Rabaou Ibrahim", photo: rabaou, texte: "J'ai beaucoup appris sur divers langages informatiques, sur des méthodes modernes d'organisation du travail et divers soft skills qui me seront très utiles pour la suite de ma carrière." },
    { nom: "Tchèssi PRE", photo: null, texte: "Grâce à vous, j'ai pu m'épanouir dans ma reconversion professionnelle. Chaque jour passé avec vous a été une véritable opportunité d'apprendre et de grandir. Votre bienveillance et votre disponibilité ont fait toute la différence." },
    { nom: "Johan Bouguermouh", photo: johan, texte: "Je suis profondément honoré d'avoir pu partager une expérience si riche avec l'équipe de l'Atelier. L'encadrement de Jérôme, Julien, Ana, Fatima et Morad a créé un espace accueillant et propice à une évolution pérenne." },
  ],
  "2022-2023": [
    { nom: "Julien Athomas", photo: julien, texte: "L'année 2023 marque le lancement officiel de l'Atelier. Ce qui a commencé avec une équipe réduite s'est élargi à plus de 10 personnes, ayant à leur actif plusieurs dizaines de projets réalisés. Je suis extrêmement heureux de l'évolution du projet, du staff et des alternants." },
    { nom: "Jérôme Savajols", photo: jerome, texte: "Une très belle année marquée par des projets variés. C'est aussi l'année de l'organisation interne et de la mise en place de méthodes plus structurées. Nous avons démontré que notre offre de service répond à un besoin réel des entreprises." },
    { nom: "Ana Stanko", photo: ana, texte: "Belle année qui a permis d'agrandir l'équipe, compléter notre offre technique avec des solutions d'hébergement et définir nos méthodes de travail en agile. Merci à nos alternants pour votre montée en compétences, c'est une belle preuve que nous sommes sur la bonne voie." },
    { nom: "Fatima Elmouhine", photo: fatima, texte: "L'Atelier en un mot : Génial ! Que ce soit dans l'organisation, l'accompagnement technique ou l'équipe, tout était trop bien. On a su naviguer entre fou rire et sérieux quand il le fallait. Je recommande à 100% !" },
    { nom: "Mohamed El Amine Necib", photo: amine, texte: "Mon alternance à l'Atelier a été des plus enrichissantes. L'Atelier aborde la méthodologie de travail de manière similaire à une véritable entreprise. Chaque journée apporte son lot de défis stimulants grâce à la diversité des projets." },
    { nom: "Alexandre Aloesode", photo: alex, texte: "J'ai rejoint l'Atelier en mars 2023 avec pour but de devenir développeur back-end. Grâce à la pédagogie de nos encadrants, j'ai découvert d'autres aspects du développement WEB et acquis des soft skills très importants comme le travail en équipe et les méthodes agiles." },
    { nom: "Morad Labrid", photo: morad, texte: "Je tiens à exprimer ma gratitude pour le temps que j'ai passé à l'Atelier. Travailler avec une équipe aussi extraordinaire a été une expérience incroyablement inspirante. Les missions que nous avons accomplies ensemble resteront gravées dans ma mémoire." },
    { nom: "Tchèssi Pre", photo: null, texte: "Je tenais à vous exprimer ma sincère gratitude pour votre précieux soutien tout au long de mon alternance à l'Atelier. Votre mentorat, vos conseils avisés et votre expertise m'ont été d'une aide inestimable dans l'accomplissement de mes missions." },
    { nom: "Ifanl Ibrahim", photo: null, texte: "Ce fut une année enrichissante, au cours de laquelle j'ai beaucoup appris et progressé aux côtés de tous. J'ai eu la chance de travailler avec une équipe humaine, à l'écoute et bienveillante au quotidien. Je pars avec de précieux souvenirs et de solides compétences." },
    { nom: "Max Machin", photo: null, texte: "Une superbe année à l'atelier, entouré d'une équipe techniquement et humainement au top ! Des technologies et solutions récentes, de nombreux projets m'ayant permis une montée en compétence rapide. Et surtout une bonne ambiance tous les jours." },
    { nom: "Ridha Boughediri", photo: null, texte: "Je tiens à partager mon immense gratitude pour l'année que j'ai passée en tant que développeur web. Travailler aux côtés de Julien Athomas et d'Ana Stanko a été une expérience inestimable. Leur leadership exceptionnel a été un moteur de succès et d'inspiration." },
    { nom: "Thibault Pattieu", photo: null, texte: "Une année riche en enseignement auprès de collaborateurs passionnants et enthousiastes. L'Atelier a démontré que le concept commercial était bon et le concept social encore meilleur avec de beaux progrès de tous nos alternant·es." },
    { nom: "Louise Décombe", photo: null, texte: "Ma participation à l'Atelier en tant qu'intervenante externe a été extrêmement enrichissante : j'ai autant appris des alternants que j'ai pu répondre à leurs questions. Le point fort de cette équipe c'est la qualité de sa communication et sa mise en application des principes agiles !" },
  ],
}

export default function Testimonial() {
  const [annee, setAnnee] = useState("2023-2024")
  const [index, setIndex] = useState(0)

  const personnes = annees[annee]

  function changerAnnee(a) {
    setAnnee(a)
    setIndex(0)
  }

  const page = Math.floor(index / 3) + 1
  const totalPages = Math.ceil(personnes.length / 3)

  return (
    <section>
      <h2 className="section-title">Témoignages</h2>
      <p className="section-subtitle">Ce que nos membres disent de l'Atelier</p>

      <div className="testimonials-header">
        <div className="annee-tabs">
          <button
            className={annee === "2023-2024" ? "badge-annee active" : "badge-annee"}
            onClick={() => changerAnnee("2023-2024")}
          >
            2023 – 2024
          </button>
          <button
            className={annee === "2022-2023" ? "badge-annee active" : "badge-annee"}
            onClick={() => changerAnnee("2022-2023")}
          >
            2022 – 2023
          </button>
        </div>
        <div className="nav-controls">
          <button className="nav-btn" onClick={() => setIndex(index - 3)} disabled={index === 0}>←</button>
          <span className="nav-counter">{page} / {totalPages}</span>
          <button className="nav-btn" onClick={() => setIndex(index + 3)} disabled={index + 3 >= personnes.length}>→</button>
        </div>
      </div>

      <div className="cards">
        {personnes.slice(index, index + 3).map((p) => (
          <div className="card" key={p.nom}>
            <div className="card-header">
              {p.photo ? (
                <img src={p.photo} alt={p.nom} />
              ) : (
                <div className="avatar-placeholder">{p.nom.charAt(0)}</div>
              )}
              <strong>{p.nom}</strong>
            </div>
            <div className="card-body">
              <div className="quote-mark">"</div>
              <p className="card-text">{p.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
