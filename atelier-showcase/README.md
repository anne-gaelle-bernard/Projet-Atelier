# Atelier Memories

One-page React + Vite présentant les témoignages des membres de l'Atelier de La Plateforme.

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

```
src/
├── main.jsx              # point d'entrée, importe les styles globaux
├── App.jsx               # assemble les sections de la page
├── components/           # un composant = un .jsx (+ son .css)
│   ├── Hero.jsx / Hero.css
│   ├── Testimonials.jsx / Testimonials.css
│   ├── TestimonialCard.jsx
│   └── YearTabs.jsx
├── data/
│   └── testimonials.js   # contenu des témoignages, par année
├── assets/
│   ├── logos/
│   └── photos/
└── styles/
    └── global.css        # reset, typo, styles de section partagés
```

## Ajouter des témoignages

1. Déposer la photo dans `src/assets/photos/`.
2. L'importer en haut de `src/data/testimonials.js` et ajouter l'entrée dans l'année voulue.
3. Pour une nouvelle année, ajouter une clé en tête de l'objet : l'onglet apparaît automatiquement.
