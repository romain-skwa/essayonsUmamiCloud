import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ces variables d'environnement servent plus tard a activer Umami sans
// modifier a nouveau le layout. Tant que NEXT_PUBLIC_ENABLE_UMAMI vaut "false",
// aucun script de tracking n'est injecte dans la page.
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiScriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
const shouldLoadUmami =
  process.env.NEXT_PUBLIC_ENABLE_UMAMI === "true" &&
  Boolean(umamiWebsiteId) &&
  Boolean(umamiScriptUrl);

export const metadata = {
  title: "Toon Sprint Club",
  description:
    "Une demo Next.js en JSX avec App Router et une base prete pour Umami.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}

        {/* 
          Ce bloc montre l'endroit ideal pour brancher Umami.
          Quand tu voudras l'activer, il suffira de renseigner .env.local
          avec l'URL du script et l'identifiant du site.
        */}
        {shouldLoadUmami ? (
          <Script
            async
            defer
            data-website-id={umamiWebsiteId}
            src={umamiScriptUrl}
          />
        ) : null}
      </body>
    </html>
  );
}
