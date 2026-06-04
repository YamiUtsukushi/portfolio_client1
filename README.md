# Portfolio — Davisen Ellapen

> 🌐 **Site en ligne :** [https://davisen-ellapen.netlify.app](https://davisen-ellapen.netlify.app)

Portfolio personnel développé en React & Tailwind CSS, sous forme de Single Page Application (SPA) moderne, responsive et performante.

---

## 🛠 Stack technique

| Technologie | Usage |
|---|---|
| **React 18** | Framework UI |
| **Vite** | Bundler & dev server |
| **Tailwind CSS 3** | Styling utilitaire |
| **React Router DOM** | Navigation SPA & pages détail |
| **Lucide React** | Bibliothèque d'icônes |
| **Google Fonts** | Montserrat + Dancing Script |
| **Netlify** | Hébergement & déploiement |

---

## 📁 Architecture du projet

```
portfolio_dav/
├── netlify/
│   └── functions/
│       └── send-email.js        # Netlify Function — envoi d'email via Brevo
├── public/
│   ├── assets/                  # Images, logos, PDFs des projets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Header.jsx           # Navbar fixe avec indicateur de section active
│   ├── data/
│   │   └── portfolio.js         # Données centralisées (projets, expériences, outils)
│   ├── pages/
│   │   └── ProjetDetail.jsx     # Page détail dynamique par projet (/projets/:id)
│   ├── sections/
│   │   ├── Hero.jsx             # Section Accueil
│   │   ├── Apropos.jsx          # Section À propos
│   │   ├── Projets.jsx          # Section Mes projets (grille + KPIs)
│   │   ├── Competences.jsx      # Section Compétences
│   │   ├── Experiences.jsx      # Section Expériences (timeline)
│   │   └── Contact.jsx          # Section Contact (formulaire + bannière)
│   ├── App.jsx                  # Routing principal (BrowserRouter)
│   └── main.jsx                 # Point d'entrée React
├── netlify.toml                 # Config Netlify (build, fonctions, redirects SPA)
├── tailwind.config.js           # Charte graphique (couleurs, polices, ombres)
├── vite.config.js
└── package.json
```

---

## 🎨 Design System

### Couleurs
| Nom | Hex | Usage |
|---|---|---|
| Vert Sapin | `#1a4d2e` | Boutons, titres, accents principaux |
| Vert Sauge | `#6b9e7e` | Bordures, badges, éléments secondaires |
| Crème | `#f7f5ee` | Fond général |
| Blanc cassé | `#fdfcf9` | Fond des sections |

### Typographie
- **Montserrat** — police principale (titres, textes, boutons)
- **Dancing Script** — police cursive (sous-titres manuscrits en section Contact)

### Composants
- Coins très arrondis (`rounded-2xl` / `rounded-3xl`)
- Ombres douces (`shadow-card`)
- Cards blanches sur fond crème

### Responsive
Toutes les sections sont adaptées pour **mobile et tablette** via les classes responsives Tailwind :
- `< 768px` — mobile : layouts en colonne, photo Hero en fond plein écran, cartes compactes
- `768px – 1023px` — tablette : grilles 2 colonnes, éléments redimensionnés
- `≥ 1024px` — desktop : design original complet

---

## 📄 Sections

### 1. Accueil (Hero)
Titre d'accroche, photo détourée, badge ISG, widget "Compétences clés" et indicateur d'expériences.

### 2. À propos
Présentation, donut chart "+15 projets menés", badges d'information, philosophie de travail.

### 3. Mes projets
- Grille 2 colonnes de **14 projets** (professionnels, personnel, académiques, parcours scolaire)
- **5 KPIs** dynamiques calculés depuis les données
- Badges colorés par catégorie
- Chaque carte redirige vers sa **page détail** (`/projets/:id`)
- Bannière CTA en bas

### 4. Page détail projet (`/projets/:id`)
- Header : catégorie + titre en majuscules + description
- Layout 2 colonnes : image du projet + espace texte
- 3 blocs : Objectifs / Actions réalisées / Résultats attendus
- Section fichier téléchargeable (PDF) ou lien du site
- Navigation prev/next entre projets (boutons + **swipe tactile** sur mobile)
- Bannière CTA

### 5. Compétences
- KPIs, illustration graphique
- Grille de cartes par famille d'outils
- 3 grandes colonnes de compétences clés

### 6. Expériences
- Timeline verticale avec logos d'entreprises
- KPIs : 5 expériences, Marketing, Coordination, Relation Client
- Bannière CTA

### 7. Contact
- Formulaire (Nom, Prénom, Email, Téléphone, Message)
- Coordonnées (Email, Téléphone, Localisation, Permis)
- Bannière "Disponibilité & réactivité" avec 3 engagements + citation cursive

---

## ✉️ Formulaire de contact (Netlify Function + Brevo)

Le formulaire de contact utilise une **Netlify Function** (`netlify/functions/send-email.js`) qui appelle l'API transactionnelle **Brevo** pour envoyer les messages.

### Variables d'environnement requises

| Variable | Description |
|---|---|
| `BREVO_API_KEY` | Clé API Brevo (format `xkeysib-...`) — à créer dans *Brevo → Profil → SMTP & API → API Keys* |

**En local**, créer un fichier `.env` à la racine :
```env
BREVO_API_KEY=xkeysib-votre-cle-api
```

**Sur Netlify**, ajouter la variable dans *Site settings → Environment variables*, puis redéployer.

> ⚠️ Ne pas confondre avec les identifiants SMTP (`xsmtpsib-...`) — l'API REST requiert une clé API (`xkeysib-...`).

---

## 🚀 Installation & lancement

```bash
# Cloner le repo
git clone https://github.com/ton-repo/portfolio_dav.git
cd portfolio_dav

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 🗂 Données projets (`src/data/portfolio.js`)

Chaque projet contient :

```js
{
  id: 'identifiant-unique',        // utilisé dans l'URL /projets/:id
  icon: 'NomIconeLucide',          // icône affichée sur la carte
  categorie: 'Projet professionnel',
  categoryLabel: 'EXPÉRIENCES PROFESSIONNELLES', // affiché sur la page détail
  titre: 'Nom du projet',
  description: '...',
  tags: ['Tag1', 'Tag2'],
  image: '/assets/nom-image.png',  // image de la page détail
  espaceTexte: '...',              // paragraphe de réflexion personnelle
  objectifsLabel: 'Objectifs',     // label custom (optionnel)
  objectifs: [...],
  actionsLabel: 'Actions réalisées', // label custom (optionnel)
  actions: [...],
  resultats: [...],
  pdf: '/assets/fichier.pdf',      // null si pas de fichier
  pdfNom: 'fichier.pdf',
  pdfDescription: '...',
  pdfTaille: 'PDF · XX pages',
  showPdf: true,                   // false pour masquer la section fichier
  lienUrl: 'https://...',          // si lien de site au lieu d'un PDF
  fichierLabel: 'Fichier du projet', // label custom (optionnel)
}
```

---

## 📦 Assets (`public/assets/`)

```
assets/
├── photo-davisen.png
├── logo-atmosphere.png
├── logo-toutes-en-sante.png
├── logo-frozier.png
├── logo-cee.png
├── logo-idf-autos.png
├── fiches-produits-atmosphere.png
├── plan-marketing-stratégique.png
├── presentation-entreprise.png
├── plan-action-boutique.png
├── hackescape.png
├── isg-football-club.png
├── nud-cosmetiques.png
├── stella-marque-luxe.png
├── rapport-stage-assistant-commercial.png
├── rapport-stage-cee-bourget.png
├── memoire-fin-etudes.png
├── rapport-alternance-atmosphere.png
├── ld-global-co.png
├── HackEscape.pdf
├── NUD.pdf
├── ISG_Football_Club_President.pdf
├── Stella_Davisen_Ellapen.pdf
├── Rapport_Stage_Assistant_Commercial.pdf
├── Rapport_Davisen_Ellapen_PGE3.pdf
├── Memoire_Davisen_Ellapen_2024-2025.pdf
└── Rapport_Alternance_Davisen_Ellapen_2024-2025.pdf
```

---

## 🌍 Déploiement

Le site est déployé sur **Netlify** avec déploiement continu depuis GitHub.

**URL de production :** [https://davisen-ellapen.netlify.app](https://davisen-ellapen.netlify.app)

> ℹ️ La configuration Netlify est centralisée dans `netlify.toml` (build, fonctions serverless et redirect SPA). Aucun fichier `_redirects` séparé n'est nécessaire.

---

## 👤 Auteur

Projet réalisé par **Jayson MOOKEN**  
🔗 [LinkedIn](https://www.linkedin.com/in/jayson-mooken/)

---

⭐ Si ce projet t'a été utile, n'hésite pas à laisser une étoile sur le repo !
