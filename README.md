# Portfolio — Salas Merzouk

> Portfolio personnel de **Salas Merzouk**, développeur Full Stack & architecte logiciel.
> Applications web robustes, architectures microservices, IA et DevOps.

[![Site en ligne](https://img.shields.io/badge/site-salasmerzouk.dev-3e497a?style=flat-square)](https://salasmerzouk.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![MUI](https://img.shields.io/badge/MUI-5-007FFF?style=flat-square&logo=mui&logoColor=white)](https://mui.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**[Voir le site](https://salasmerzouk.dev)** · **[GitHub](https://github.com/Salas3108)** · **[LinkedIn](https://www.linkedin.com/in/salas-merzouk-2a7217290/)** · **[Email](mailto:salas.merzouk54@gmail.com)**

---

## Aperçu

Ce projet est mon portfolio personnel : une application React (SPA) qui présente
mon parcours, mes projets et mon expérience professionnelle. Le site est entièrement
bilingue (français / anglais), responsive, accessible et disponible en thème clair
ou sombre.

## Fonctionnalités

- **Bilingue FR / EN** — changement de langue instantané, préférence sauvegardée dans le `localStorage`.
- **Thème clair / sombre** — bascule instantanée, préférence sauvegardée et respectée au rechargement.
- **4 pages** — Accueil, Projets, Formation et Expérience professionnelle, avec transitions animées.
- **Téléchargement du CV** — via le bouton CV de la barre de navigation.
- **Animations** — apparitions au scroll et transitions de page avec Framer Motion.
- **Responsive** — navigation mobile, grilles et timeline adaptatives.
- **Accessibilité** — lien d'évitement, styles de focus visibles, attributs ARIA, respect de `prefers-reduced-motion`.
- **SEO** — titres par page, métadonnées Open Graph / Twitter, données structurées JSON-LD, `sitemap.xml` et `robots.txt`.

## Stack technique

| Domaine        | Technologies                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| Interface      | React 18, React Router 6, Material UI 5, icônes MUI                          |
| Animations     | Framer Motion 12, react-vertical-timeline-component                          |
| Styles         | CSS3, variables CSS (thèmes clair / sombre), media queries                   |
| SEO            | react-helmet-async, JSON-LD, Open Graph, sitemap                             |
| Build          | Create React App 5 (`react-scripts`)                                         |
| Contenu        | Fichiers de traduction JavaScript (`src/translations/en.js`, `fr.js`)        |

## Démarrage rapide

**Prérequis :** Node.js 24.x (version indiquée dans `package.json`) et npm.

```bash
# 1. Cloner le dépôt
git clone https://github.com/Salas3108/Portfolio.git
cd Portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm start
```

Le site est alors disponible sur [http://localhost:3000](http://localhost:3000).
La page se recharge automatiquement à chaque modification.

## Scripts disponibles

| Commande        | Description                                                            |
| --------------- | ---------------------------------------------------------------------- |
| `npm start`     | Lance l'application en mode développement sur le port 3000.            |
| `npm run build` | Génère le bundle de production optimisé dans le dossier `build/`.      |
| `npm test`      | Lance le runner de tests en mode interactif.                           |
| `npm run eject` | Éjecte la configuration CRA (opération irréversible, rarement utile).  |

## Structure du projet

```text
Portfolio/
├── public/
│   ├── assets/                 # Photo de profil et ressources statiques
│   ├── projects/               # Visuels des projets
│   ├── Salas_Merzouk_CV.pdf    # CV téléchargeable
│   ├── index.html              # Métadonnées SEO, Open Graph et JSON-LD
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/                 # Images importées par les composants
│   ├── components/             # Navbar, Footer, transitions, titres de page…
│   ├── context/                # Contextes React : thème et langue
│   ├── pages/                  # Accueil, Projets, Formation, Expérience
│   ├── styles/                 # Feuilles de style par page
│   ├── translations/           # Textes FR et EN
│   ├── App.js                  # Routage et mise en page globale
│   └── index.js                # Point d'entrée de l'application
├── package.json
└── README.md
```

## Personnalisation

- **Textes et traductions** — modifier `src/translations/fr.js` et `src/translations/en.js`.
  Une clé manquante retombe automatiquement sur la version anglaise.
- **Projets** — les cartes de la page d'accueil sont définies dans `src/pages/Home.js`,
  la liste complète dans `src/pages/Projects.js`. Les images se trouvent dans
  `public/projects/` ou `src/assets/`.
- **CV** — remplacer `public/Salas_Merzouk_CV.pdf` par le nouveau fichier, puis mettre à jour
  le lien dans `src/components/navbar.js` si le nom change.
- **Couleurs et thèmes** — modifier les variables CSS `:root` et `[data-theme="dark"]`
  dans `src/App.css`.
- **SEO** — mettre à jour les balises de `public/index.html`, ainsi que `robots.txt` et
  `sitemap.xml` en cas de changement de domaine.

## Déploiement

Le projet se déploie sur n'importe quel hébergement statique (Netlify, Vercel,
GitHub Pages, Nginx, etc.) :

```bash
npm run build
```

Le contenu du dossier `build/` constitue le site prêt à être publié.

> **Important :** l'application utilise `BrowserRouter`. L'hébergeur doit donc rediriger
> toutes les routes vers `index.html` (fallback SPA), sans quoi un rechargement sur
> `/projects` ou `/experience` renverra une erreur 404.

Exemple de règle pour Netlify (`public/_redirects`) :

```text
/*  /index.html  200
```

## Auteur

**Salas Merzouk** — Développeur Full Stack & Architecte logiciel

- Site : [salasmerzouk.dev](https://salasmerzouk.dev)
- GitHub : [@Salas3108](https://github.com/Salas3108)
- LinkedIn : [salas-merzouk-2a7217290](https://www.linkedin.com/in/salas-merzouk-2a7217290/)
- Email : [salas.merzouk54@gmail.com](mailto:salas.merzouk54@gmail.com)
