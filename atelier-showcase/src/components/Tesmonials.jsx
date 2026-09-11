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
import kamelia from '../assets/kamelia.png'
import abakar from '../assets/Ali.png'
import guillaume from '../assets/guillaume.png'
import oussema from '../assets/Oussama.png'
import oroitz from '../assets/Oroitz.png'
import emmanuelle from '../assets/Emmanuelle.png'
import annegaelle from '../assets/Anne-gaelle.png'
import kheira from '../assets/Kiara.png'
import yanis from '../assets/yanis.png'
import konstantine from '../assets/konstantine.png'
import abdellah from '../assets/Abdhellah.png'
import arthur from '../assets/Arthur.png'

const annees = {
  "2025-2026": [
    { nom: "Kamelia Mohamdi", photo: kamelia, texte: "Arriver à l'Atelier m'a permis de vraiment prendre confiance en mes compétences. J'apprécie particulièrement la liberté qu'on nous laisse pour proposer nos idées sur les projets, tout en sachant qu'on peut toujours compter sur l'équipe en cas de besoin." },
    { nom: "Abakar Issa Ali", photo: abakar, texte: "L'ambiance de travail est excellente et les projets sont stimulants. J'apprends énormément aux côtés d'une équipe bienveillante et passionnée." },
    { nom: "Guillaume Bomben", photo: guillaume, texte: "Une belle découverte du monde professionnel. Chaque projet est l'occasion d'apprendre de nouvelles technologies et de progresser en autonomie." },
    { nom: "Oussema Fatnassi", photo: oussema, texte: "L'Atelier m'a permis de monter rapidement en compétences grâce à un accompagnement de qualité et des projets variés et enrichissants." },
    { nom: "Oroitz Lago Ramos", photo: oroitz, texte: "Une expérience très formatrice, portée par une équipe soudée et exigeante qui pousse à toujours donner le meilleur de soi-même." },
    { nom: "Emmanuelle Mellinand-Richier", photo: emmanuelle, texte: "En B2, j'ai pu découvrir le développement web dans de bonnes conditions, avec un encadrement patient et des projets adaptés à notre progression." },
    { nom: "Anne-Gaelle Bernard", photo: annegaelle, texte: "L'Atelier offre un cadre idéal pour apprendre en pratiquant, avec une équipe toujours prête à partager son expérience et ses conseils." },
    { nom: "Kheira Lakhezoum", photo: kheira, texte: "Le support IT à l'Atelier, c'est avant tout une aventure humaine : accompagner chacun au quotidien dans un environnement dynamique et bienveillant." },
    { nom: "Yanis Bennadji", photo: yanis, texte: "En tant qu'élève de M1, l'Atelier m'a permis de mettre en pratique mes connaissances sur des projets réels, dans une ambiance stimulante et collaborative." },
    { nom: "Konstantine Garozashvili", photo: konstantine, texte: "L'Atelier propose un vrai suivi technique et humain, qui permet de progresser rapidement tout en gardant du plaisir à développer." },
    { nom: "Abd-ellah Hiun", photo: abdellah, texte: "Une équipe accueillante et des projets concrets qui donnent tout leur sens à l'apprentissage. Je suis ravi de faire partie de cette aventure." },
    { nom: "Arthur Descourvieres", photo: arthur, texte: "L'Atelier m'a donné l'opportunité de développer mes compétences techniques tout en travaillant sur des projets qui ont un vrai impact." },
  ],
  "2023-2024": [
    { nom: "Julien Athomas", photo: julien, texte: "Nous avons passé une année très riche, au cours de laquelle nous avons pu construire nos process et affirmer l'identité de l'atelier. Nous avons développé de nombreux projets variés qui nous ont permis de tirer de précieuses leçons sur nos méthodes, nos outils, et notre manière de chiffrer les projets. Nous avons également adapté nos méthodes de travail pour améliorer les échanges avec nos alternants et nos clients. Je tiens à remercier toute l'équipe de l'atelier !" },
    { nom: "Jérôme Savajols", photo: jerome, texte: "Une très belle année marquée par la montée en compétences de toutes les équipes des alternants et la cohésion de l'équipe d'encadrement et des lead dev. Nous avons beaucoup progressé sur nos méthodes d'avant-projet et de chiffrage. Nous avons une infrastructure très performante sur les dernières technologies du marché. La qualité des réalisations progresse. L'enthousiasme de toutes et de tous pour atteindre nos objectifs fait plaisir à voir." },
    { nom: "Ana Stanko", photo: ana, texte: "Merci à toutes et à tous pour cette année riche en aventures. Nous avons réalisé de beaux projets comme WELL, PLD, SRIAS ou encore CDPI. Nous avons acquis des expériences importantes cette année, ce qui nous permet d'affirmer notre position au sein de l'entreprise. Nous gagnons chaque jour en efficacité et en précision, que ce soit dans les chiffrages, les propositions commerciales ou les livraisons. Good job dream team !" },
    { nom: "Morad Labrid", photo: morad, texte: "Après 2 ans à l'Atelier, j'ai eu l'occasion de réaliser un certain nombre de projets aussi enrichissants les uns que les autres qui comportent tous leurs défis. L'équipe permet de travailler dans un climat bienveillant avec toujours de la bonne humeur." },
    { nom: "Fatima Elmouhine", photo: fatima, texte: "Je suis Fatima El Mouhine, lead dev à l'Atelier depuis maintenant 1 an. Mon rôle va être d'accompagner sur le plan technique les alternants et de développer des projets. Je suis sûre que tous ensemble on va réaliser des choses incroyables cette année aussi. De toute façon avec la dream team qu'on a, on ne peut que tout déchirer !" },
    { nom: "Mohamed El Amine Necib", photo: amine, texte: "Mon année passée au sein de l'Atelier a été une expérience véritablement enrichissante. En presque deux ans d'alternance, j'ai eu l'opportunité de m'épanouir sur des projets variés, gagnant en autonomie tout en bénéficiant d'un environnement de travail collaboratif. L'esprit d'équipe qui règne à l'Atelier est exceptionnel. L'Atelier m'a permis de développer un sens accru de la responsabilité et de l'engagement, des valeurs qui me guideront dans la suite de ma carrière." },
    { nom: "Thomas Spinec", photo: thomas, texte: "Cette année à l'Atelier a été très enrichissante, toute l'équipe est bienveillante et accessible si l'on a une question. Les moments de partage et de détente, que ce soit autour d'un café ou lors des activités de team building, ont renforcé les liens entre nous. Les projets variés m'ont permis de développer mes compétences techniques, de découvrir de nouveaux langages. Je suis reconnaissant pour cette expérience et j'ai hâte de voir ce que cette nouvelle année nous réserve." },
    { nom: "Alexandre Aloesode", photo: alex, texte: "Après bientôt 2 années passées à l'Atelier, je constate avec enthousiasme ma montée en compétence en tant que développeur WEB, permise par un encadrement à l'écoute et bienveillant. J'ai beaucoup appris sur divers langages informatiques, sur des méthodes modernes d'organisation du travail, et divers soft skills qui me seront très utiles pour la suite de ma carrière." },
    { nom: "Jean-Bernard Laguerre", photo: jb, texte: "Pour ma première année à l'Atelier, j'ai eu l'occasion de travailler sur des projets très variés et enrichissants ainsi que de rencontrer plusieurs clients, ce qui m'a permis de progresser énormément dans tous les domaines. J'ai pu devenir un développeur plus complet et gagner en confiance en mes compétences. L'équipe est géniale, je me suis toujours senti bien encadré et accueilli. Personnellement, je trouve que le bilan de cette année est fantastique. Je n'y changerais presque rien et j'ai très hâte de la suite." },
    { nom: "Rabaou Ibrahim", photo: rabaou, texte: "Après bientôt 2 années passées à l'Atelier, je constate avec enthousiasme ma montée en compétence en tant que développeur WEB, permise par un encadrement à l'écoute et bienveillant. J'ai beaucoup appris sur divers langages informatiques, sur des méthodes modernes d'organisation du travail, et divers soft skills qui me seront très utiles pour la suite de ma carrière." },
    { nom: "Tchèssi PRE", photo: null, texte: "Je tiens à vous remercier sincèrement pour votre soutien et votre accompagnement tout au long de cette période à l'Atelier. Grâce à vous, j'ai pu m'épanouir dans ma reconversion professionnelle, et chaque jour passé avec vous tous a été une véritable opportunité d'apprendre et de grandir intellectuellement. Votre bienveillance et votre disponibilité ont fait toute la différence dans mon parcours. Je suis très reconnaissant d'évoluer au sein d'une équipe aussi formidable. Encore un grand merci à toute l'équipe !" },
    { nom: "Johan Bouguermouh", photo: johan, texte: "Je suis profondément honoré d'avoir pu partager une expérience si riche en compagnie de l'équipe de l'atelier. Cette expérience a été enrichissante, tant par le contenu du travail que nous devions fournir que par l'encadrement prodigué par Jérôme, Julien, Ana, Fatima et Morad, qui ont su, à travers leur bienveillance, créer un espace accueillant et propice à une évolution pérenne. Merci encore à toute l'équipe de l'Atelier." },
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
  const [annee, setAnnee] = useState("2025-2026")

  const personnes = annees[annee]

  return (
    <section>
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
        {personnes.map((p) => (
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
