import Link from "next/link";
import {
  characters,
  getCharacterPath,
  highlights,
  rivalries,
} from "../lib/characters";

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
            <Link
              className="character-card character-link"
              href={getCharacterPath(character)}
              key={character.name}
            >
              <p className="card-role">{character.role}</p>
              <h3>{character.name}</h3>
              <p>{character.description}</p>
              <span className="card-accent">{character.accent}</span>
              <span className="card-link-label">Ouvrir la page du personnage</span>
            </Link>
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
            Chaque personnage a maintenant sa propre URL, ce qui te permettra de
            comparer les pages les plus consultées dans Umami.
          </p>
        </div>
      </section>
    </main>
  );
}
