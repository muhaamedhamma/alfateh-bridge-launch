import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { I18nProvider, useT } from "@/i18n/I18nProvider";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const t = useT();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.notFound.desc}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.notFound.back}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AL FATEH" },
      {
        name: "description",
        content:
          "AL FATEH, hub de distribution agroalimentaire en Côte d'Ivoire. Pont entre marques industrielles et réseau retail national, plus de 40 ans d'expertise.",
      },
      { property: "og:title", content: "AL FATEH" },
      {
        property: "og:description",
        content:
          "Le partenaire stratégique des usines et marques pour conquérir le marché ivoirien.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AL FATEH" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AL FATEH" },
      {
        name: "twitter:description",
        content: "Le partenaire stratégique des usines et marques pour conquérir le marché ivoirien.",
      },
      { name: "google-site-verification", content: "iQ6vPwpFKzgpkntb1JI7CfB8FCyjK_MZuxUOWmAJoV8" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://alfateh-bridge-launch.lovable.app/#organization",
              name: "AL FATEH",
              url: "https://alfateh-bridge-launch.lovable.app",
              email: "contact@alfateh.ci",
              address: { "@type": "PostalAddress", addressLocality: "Abidjan", addressCountry: "CI" },
            },
            {
              "@type": "WebSite",
              "@id": "https://alfateh-bridge-launch.lovable.app/#website",
              name: "AL FATEH",
              url: "https://alfateh-bridge-launch.lovable.app",
              publisher: { "@id": "https://alfateh-bridge-launch.lovable.app/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
