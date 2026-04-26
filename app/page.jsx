const characters = [
  {
    name: "Bugs Bunny",
    role: "Lapin gris et blanc",
    description:
      "Le maître du calme imperturbable, toujours prêt à retourner la situation avec humour et intelligence.",
    accent: "Ennemi juré d'Elmer Fudd et de Marvin le Martien.",
  },
  {
    name: "Daffy Duck",
    role: "Canard noir",
    description:
      "Un tourbillon d'ego, d'énergie et de drame comique, aussi imprévisible qu'inoubliable.",
    accent: "Devient aussi Duck Dodgers et Stupor Duck.",
  },
  {
    name: "Duck Dodgers",
    role: "Héros galactique de Daffy",
    description:
      "L'avatar intersidéral de Daffy, convaincu d'être le plus grand défenseur de la galaxie.",
    accent: "Rival emblématique de Marvin le Martien.",
  },
  {
    name: "Stupor Duck",
    role: "Version super-héroïque de Daffy",
    description:
      "Une parodie de justicier en collants, héroïque dans l'intention mais rarement dans l'exécution.",
    accent: "Toujours théâtral, jamais discret.",
  },
  {
    name: "Cluck Trent",
    role: "Alter ego façon Superman",
    description:
      "Un double héroïque volontairement excessif, pensé comme une parodie des grands sauveurs en cape.",
    accent: "Le versant super-héros le plus appuyé du délire cartoon.",
  },
  {
    name: "Elmer Fudd",
    role: "Chasseur humain",
    description:
      "L'adversaire obstiné de Bugs Bunny, davantage redoutable en théorie qu'efficace en pratique.",
    accent: "Toujours en chasse, rarement victorieux.",
  },
  {
    name: "Porky Pig",
    role: "Cochon au grand cœur",
    description:
      "Le personnage le plus posé du groupe, souvent là pour rééquilibrer le chaos autour de lui.",
    accent: "Meilleur ami de Duck Dodgers.",
  },
  {
    name: "Cadet de l'espace",
    role: "Avatar zélé de Porky Pig",
    description:
      "Aussi appelé Eager Young Space Cadet, il sert Duck Dodgers avec un sérieux que l'univers ne mérite pas toujours.",
    accent: "Second loyal et enthousiaste dans les aventures spatiales.",
  },
  {
    name: "Titi",
    role: "Canari",
    description:
      "Petit par la taille, immense par la malice, il transforme chaque poursuite en victoire élégante.",
    accent: "Toujours une longueur d'avance sur Grosminet.",
  },
  {
    name: "Sylvestre",
    role: "Chat noir et blanc",
    description:
      "Alias Grosminet, prédateur malchanceux dont tous les plans contre Titi tournent à la catastrophe.",
    accent: "Ennemi numéro 1 de Titi.",
  },
  {
    name: "Mémé",
    role: "Propriétaire de Titi, Sylvestre et Hector",
    description:
      "Figure protectrice et bienveillante, elle veille sur sa petite tribu sans toujours voir les bêtises en cours.",
    accent: "Pilier domestique de l'univers de Titi.",
  },
  {
    name: "Bip Bip",
    role: "Grand géocoucou",
    description:
      "Flèche bleue et violette du désert, il laisse derrière lui un nuage de poussière et un coyote désespéré.",
    accent: "Sa vitesse rend Vil Coyote fou.",
  },
  {
    name: "Vil Coyote",
    role: "Coyote inventif",
    description:
      "Ingénieur des pièges impossibles, il poursuit Bip Bip avec une persévérance aussi absurde que légendaire.",
    accent: "Toujours ambitieux, toujours victime de ses plans.",
  },
  {
    name: "Marvin le Martien",
    role: "Martien stratège",
    description:
      "Froid, méthodique et déterminé, il se pose en adversaire redoutable de Bugs Bunny, du Cadet de l'espace et de Duck Dodgers.",
    accent: "Menace cosmique récurrente.",
  },
  {
    name: "Speedy Gonzales",
    role: "Souris mexicaine au sombrero",
    description:
      "Le personnage le plus rapide du monde cartoon, agile, rusé et toujours prêt à secourir les siens.",
    accent: "Silhouette blanche et énergie fulgurante.",
  },
  {
    name: "Taz",
    role: "Diable de Tasmanie",
    description:
      "Une tornade vivante plus proche de la force brute que du raisonnement, mais toujours spectaculaire à l'écran.",
    accent: "Chaos pur en rotation continue.",
  },
  {
    name: "Charlie le coq",
    role: "Grand coq blanc",
    description:
      "Plus bavard que discret, il domine chaque scène avec sa voix tonitruante et son aplomb surdimensionné.",
    accent: "Présence comique immédiate.",
  },
  {
    name: "Pépé le putois",
    role: "Sconse romantique",
    description:
      "Séducteur convaincu de son charme, il transforme chaque apparition en poursuite sentimentale décalée.",
    accent: "Une parodie de romantique beaucoup trop sûr de lui.",
  },
  {
    name: "Sam le pirate",
    role: "Petit homme roux barbu aux longues moustaches",
    description:
      "Connu aussi comme Yosemite Sam, il compense sa petite taille par une rage et une présence énormes.",
    accent: "Explosif, braillard et impossible à ignorer.",
  },
];

const highlights = [
  {
    title: "Projet désormais en français",
    text: "Les titres, descriptions, appels à l'action et explications ont été réécrits pour une lecture entièrement francophone.",
  },
  {
    title: "Galerie Looney Tunes complète",
    text: "La page met maintenant en avant les personnages demandés, leurs identités, leurs avatars et leurs rivalités majeures.",
  },
  {
    title: "Toujours prêt pour Umami",
    text: "La logique d'intégration analytics reste en place dans le layout pour un branchement ultérieur sans refaire la structure.",
  },
];

const rivalries = [
  "Bugs Bunny face à Elmer Fudd et Marvin le Martien",
  "Duck Dodgers et le Cadet de l'espace contre Marvin le Martien",
  "Titi contre Sylvestre, sous l'œil de Mémé",
  "Bip Bip poursuivi sans relâche par Vil Coyote",
  "Daffy Duck décliné en versions héroïques toujours plus absurdes",
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Looney Tunes en français</p>
          <h1>La grande galerie des personnages</h1>
          <p className="hero-text">
            Cette version du projet remplace l’ancienne troupe par une sélection
            complète de héros, rivaux et alter ego cultes : Bugs Bunny, Daffy
            Duck, Duck Dodgers, Titi, Sylvestre, Marvin le Martien, Speedy
            Gonzales, Taz et bien d’autres.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#troupe">
              Voir les personnages
            </a>
            <a className="secondary-button" href="#umami">
              Voir la version française
            </a>
          </div>
          <div className="hero-stats">
            <article className="stat-card">
              <strong>19</strong>
              <span>personnages et avatars</span>
            </article>
            <article className="stat-card">
              <strong>100 %</strong>
              <span>interface en français</span>
            </article>
            <article className="stat-card">
              <strong>5</strong>
              <span>duos et rivalités majeurs</span>
            </article>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="panel-kicker">À l’affiche</p>
          <ul className="panel-list">
            <li>Bugs Bunny, lapin gris et blanc au sang-froid légendaire</li>
            <li>Daffy Duck et ses avatars Duck Dodgers et Stupor Duck</li>
            <li>Titi, Sylvestre, Mémé et tout l’univers domestique</li>
            <li>Bip Bip, Vil Coyote, Marvin, Taz, Speedy et Sam</li>
          </ul>
        </aside>
      </section>

      <section className="content-section" id="troupe">
        <div className="section-heading">
          <p className="section-label">Personnages</p>
          <h2>Les héros, rivaux et avatars désormais présents</h2>
        </div>

        <div className="character-grid">
          {characters.map((character) => (
            <article className="character-card" key={character.name}>
              <p className="card-role">{character.role}</p>
              <h3>{character.name}</h3>
              <p>{character.description}</p>
              <span className="card-accent">{character.accent}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="section-heading">
          <p className="section-label">Cette version</p>
          <h2>Un projet recentré sur l’univers Looney Tunes</h2>
        </div>

        <div className="highlight-grid">
          {highlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-label">Rivalités</p>
          <h2>Les grands face-à-face et alliances de la sélection</h2>
        </div>

        <ol className="episode-list">
          {rivalries.map((rivalry) => (
            <li className="episode-item" key={rivalry}>
              {rivalry}
            </li>
          ))}
        </ol>
      </section>

      <section className="content-section cta-section" id="umami">
        <div className="cta-card">
          <p className="section-label">Umami</p>
          <h2>La structure analytics est conservée dans cette version française</h2>
          <p>
            Le layout global contient toujours la logique conditionnelle pour
            charger Umami plus tard. Il ne manque que les variables
            d’environnement dans un fichier <code>.env.local</code>.
          </p>
          <p className="cta-note">
            Commence avec <code>NEXT_PUBLIC_ENABLE_UMAMI=false</code>, puis passe
            à <code>true</code> quand tu voudras mesurer les visites.
          </p>
        </div>
      </section>
    </main>
  );
}
