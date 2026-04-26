const characters = [
  {
    name: "Lapi le malicieux",
    role: "Le cerveau calme",
    description:
      "Un meneur detendu qui improvise des plans malins avant que la scene ne parte dans tous les sens.",
    accent: "Carottes, malice et repartie rapide.",
  },
  {
    name: "Dafi le dramatique",
    role: "Le roi du spectacle",
    description:
      "Toujours pret a exagerer la situation, il transforme chaque petite idee en numero de theatre cartoon.",
    accent: "Beaucoup de panache, tres peu de discretion.",
  },
  {
    name: "Speedio l'eclair",
    role: "Le sprinteur legendaire",
    description:
      "Il traverse la page a toute vitesse et donne au site son energie la plus vive.",
    accent: "Des demarrages fulgurants et un humour express.",
  },
];

const highlights = [
  {
    title: "Decors de poursuite",
    text: "Des aplats colores, des cercles souples et une mise en page qui rappelle les anciens cartoons du samedi matin.",
  },
  {
    title: "Base facile a lire",
    text: "Le projet reste volontairement simple pour que tu puisses comprendre le role du layout, de la page et du CSS global.",
  },
  {
    title: "Umami pret a brancher",
    text: "Le point d'integration existe deja dans le layout. Il suffira d'ajouter les variables d'environnement le jour du test.",
  },
];

const episodes = [
  "Ouverture hero avec promesse claire",
  "Presentation de la troupe et de son energie",
  "Section expliquant pourquoi la base est pedagogique",
  "Appel a action pour lancer la suite du projet",
];

export default function Home() {
  // Le composant Home represente la route "/".
  // Avec App Router, chaque fichier page.jsx dans le dossier app devient une page.
  return (
    <main className="home-page">
      {/* 
        Cette section hero sert de premiere impression.
        Elle pose l'univers du site et donne tout de suite le ton cartoon.
      */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Next.js + App Router + JSX</p>
          <h1>Toon Sprint Club</h1>
          <p className="hero-text">
            Une vitrine inspiree des grands du cartoon: un lapin malin, un
            canard survolte et un coureur supersonique dans un monde de
            poursuites, de gags et de vitesse.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#troupe">
              Voir la troupe
            </a>
            <a className="secondary-button" href="#umami">
              Preparer Umami
            </a>
          </div>
        </div>

        {/* 
          Ce panneau remplace une image hero classique.
          Le but est de garder un visuel expressif sans utiliser d'assets officiels.
        */}
        <aside className="hero-panel">
          <p className="panel-kicker">Ambiance du site</p>
          <ul className="panel-list">
            <li>Palette vive et contrastee</li>
            <li>Formes rondes et ombres epaises</li>
            <li>Textes courts qui donnent du rythme</li>
            <li>Clin d&#39;oeil aux poursuites de cartoon retro</li>
          </ul>
        </aside>
      </section>

      {/* 
        Cette section montre une technique tres courante en React:
        on part d'un tableau JavaScript puis on le transforme en cartes avec map().
      */}
      <section className="content-section" id="troupe">
        <div className="section-heading">
          <p className="section-label">La troupe</p>
          <h2>Trois archetypes pour installer l&#39;univers</h2>
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

      {/* 
        Cette partie explique ce que le projet veut demontrer:
        du style, de la lisibilite et une future place pour l'analytics.
      */}
      <section className="content-section alt-section">
        <div className="section-heading">
          <p className="section-label">Ce que tu testes ici</p>
          <h2>Une base simple, visuelle et facile a faire evoluer</h2>
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

      {/* 
        La timeline aide a montrer que la page est composee de sections reutilisables.
        Chaque ligne peut ensuite devenir un composant si le projet grossit.
      */}
      <section className="content-section">
        <div className="section-heading">
          <p className="section-label">Storyboard</p>
          <h2>Le deroule de la page comme une mini scene de cartoon</h2>
        </div>

        <ol className="episode-list">
          {episodes.map((episode) => (
            <li className="episode-item" key={episode}>
              {episode}
            </li>
          ))}
        </ol>
      </section>

      {/* 
        Cette zone parle explicitement d'Umami.
        Le tracking n'est pas encore actif, mais l'utilisateur sait deja ou agir.
      */}
      <section className="content-section cta-section" id="umami">
        <div className="cta-card">
          <p className="section-label">Umami</p>
          <h2>Le projet est pret pour un essai d&#39;analytics respectueux</h2>
          <p>
            Le layout global contient deja la logique conditionnelle pour charger
            Umami plus tard. Il ne manque que les variables d&#39;environnement dans
            un fichier <code>.env.local</code>.
          </p>
          <p className="cta-note">
            Commence avec <code>NEXT_PUBLIC_ENABLE_UMAMI=false</code>, puis passe
            a <code>true</code> quand tu voudras mesurer les visites.
          </p>
        </div>
      </section>
    </main>
  );
}
