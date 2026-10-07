import './Banniere.css'

function Banniere() {
  return (
    <header className="banniere">
      <div className="banniere-content">
        <p className="banniere-laplateforme">L'Atelier de La Plateforme</p>
        <h1 className="banniere-title">
          Atelier Memories,
        </h1>
        <p className="banniere-text">
          Retrouvez les témoignages des étudiants et membres du staff de l'Atelier, année après année.
        </p>
        <a className="btn" href="#temoignages">Lire les témoignages</a>
      </div>

      <div className="banniere-stats">
        <div className="stat">
          <strong>3</strong>
          <span>promotions</span>
        </div>
        <div className="stat">
          <strong>37</strong>
          <span>témoignages</span>
        </div>
        <div className="stat">
          <strong>2019</strong>
          <span>année de création</span>
        </div>
      </div>
    </header>
  )
}

export default Banniere
