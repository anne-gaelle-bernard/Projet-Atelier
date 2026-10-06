export default function YearTabs({ years, selected, onSelect }) {
  return (
    <div className="annee-tabs">
      {years.map((year) => (
        <button
          key={year}
          className={year === selected ? "badge-annee active" : "badge-annee"}
          onClick={() => onSelect(year)}
        >
          {year.replace("-", " – ")}
        </button>
      ))}
    </div>
  )
}
