// Dados estruturados (schema.org) para buscadores.
import type { App } from "./tipos";
import { efab } from "./efab";

// URL base vinda de `site` no astro.config.mjs.
const SITE = import.meta.env.SITE.replace(/\/$/, "");

export const organizacao = {
  "@type": "Organization",
  name: efab.nome,
  legalName: efab.razaoSocial,
  url: `${SITE}/`,
  email: efab.email,
  logo: `${SITE}/favicon.svg`,
  address: { "@type": "PostalAddress", addressLocality: "Curitiba", addressRegion: "PR", addressCountry: "BR" },
};

export const jsonldEfab = { "@context": "https://schema.org", ...organizacao };

// Categoria do schema.org mais próxima da categoria na Play.
const categoria: Record<App["slug"], string> = {
  smartdespensa: "LifestyleApplication",
  daisy: "LifestyleApplication",
  farmacinha: "HealthApplication",
};

/** O app é gratuito: a oferta é de preço zero. O Premium é compra dentro do app. */
export function jsonldApp(app: App) {
  return {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: app.nome,
    description: app.descricao,
    url: `${SITE}/${app.slug}/`,
    image: `${SITE}/og/${app.slug}.png`,
    operatingSystem: "Android",
    applicationCategory: categoria[app.slug],
    inLanguage: "pt-BR",
    offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    publisher: organizacao,
    ...(app.links.play ? { installUrl: app.links.play } : {}),
  };
}
