import Link from "next/link";
import { notFound } from "next/navigation";
import {
  characters,
  getCharacterBySlug,
  getCharacterPath,
} from "../../../lib/characters";

export async function generateStaticParams() {
  return characters.map((character) => ({
    slug: getCharacterPath(character).split("/").pop(),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);

  if (!character) {
    return {
      title: "Personnage introuvable",
    };
  }

  return {
    title: `${character.name} | Galerie Looney Tunes`,
    description: `${character.name} : ${character.description}`,
  };
}

export default async function CharacterPage({ params }) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);

  if (!character) {
    notFound();
  }

  const relatedCharacters = characters
    .filter((item) => item.name !== character.name)
    .slice(0, 3);

  return (
    <main className="home-page character-page">
      <section className="character-hero">
        <Link className="back-link" href="/">
          Retour a l&apos;accueil
        </Link>

        <div className="character-hero-card">
          <p className="card-role">{character.role}</p>
          <h1>{character.name}</h1>
          <p className="character-summary">{character.description}</p>
          <p className="character-accent-text">{character.accent}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-label">Pourquoi cette page compte</p>
          <h2>Une URL dediee pour suivre l&apos;interet dans Umami</h2>
        </div>

        <div className="highlight-grid character-detail-grid">
          <article className="highlight-card">
            <h3>Page unique</h3>
            <p>
              Cette fiche vit sur sa propre route, ce qui permet a Umami de la
              compter separement dans les statistiques de pages.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Comparaison simple</h3>
            <p>
              Tu pourras comparer facilement les pages personnages entre elles
              dans le tableau de bord et voir lesquelles attirent le plus de visites.
            </p>
          </article>
          <article className="highlight-card">
            <h3>Base extensible</h3>
            <p>
              Cette structure te laisse ajouter plus tard des images, anecdotes,
              biographies, ou contenus enrichis sans changer le routage.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="section-label">Autres personnages</p>
          <h2>Poursuivre la visite</h2>
        </div>

        <div className="character-grid">
          {relatedCharacters.map((item) => (
            <Link
              className="character-card character-link"
              href={getCharacterPath(item)}
              key={item.name}
            >
              <p className="card-role">{item.role}</p>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="card-accent">{item.accent}</span>
              <span className="card-link-label">Voir cette fiche</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
