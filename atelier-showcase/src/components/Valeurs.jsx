import './Valeurs.css'

function Valeurs() {
  return (
    <div className="valeurs-fond">
      <section id="valeurs">
        <h2 className="section-title">La raison d'être et les valeurs de l'Atelier</h2>

        <div className="valeurs-contenu">
          <div className="raison">
            <h3 className="valeurs-sous-titre">Notre raison d'être</h3>
            <p className="raison-texte">
              À l'atelier de La Plateforme, nous transmettons notre passion des technologies, du travail en
              équipe et notre exigence du résultat pour la réussite des étudiants et des projets qui nous sont
              confiés.
            </p>
          </div>

          <div className="valeurs">
            <h3 className="valeurs-sous-titre">Nos valeurs</h3>
            <div className="valeurs-liste">
              <div className="valeur">
                <span className="valeur-numero">01</span>
                <p>La transmission</p>
              </div>
              <div className="valeur">
                <span className="valeur-numero">02</span>
                <p>La confiance</p>
              </div>
              <div className="valeur">
                <span className="valeur-numero">03</span>
                <p>L'engagement</p>
              </div>
              <div className="valeur">
                <span className="valeur-numero">04</span>
                <p>Faire réussir les autres</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Valeurs
