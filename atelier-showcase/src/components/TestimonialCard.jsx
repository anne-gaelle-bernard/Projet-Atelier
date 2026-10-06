export default function TestimonialCard({ nom, photo, texte }) {
  return (
    <article className="card">
      <blockquote className="card-text">{texte}</blockquote>
      <div className="card-author">
        {photo ? (
          <div className="avatar">
            <img src={photo} alt={nom} />
          </div>
        ) : (
          <div className="avatar avatar-placeholder">{nom.charAt(0)}</div>
        )}
        <h3 className="card-name">{nom}</h3>
      </div>
    </article>
  )
}
