// @ts-check
import { existsSync } from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Endereço público do site: o único lugar a mudar quando houver domínio próprio
// (junto com public/CNAME e as URLs na Play Console e nos apps).
const SITE = "https://efabtec.github.io";

// Páginas em rascunho (noindex) ficam fora do sitemap.
const RASCUNHOS = ["/farmacinha/privacidade", "/farmacinha/termos", "/farmacinha/excluir-dados"];

/**
 * Leva a URL do sitemap para a forma canônica: pasta com barra final, página com .html.
 * @param {string} url
 */
function canonica(url) {
  const u = new URL(url);
  const caminho = u.pathname.replace(/\/$/, "");
  if (caminho === "" || caminho.endsWith(".html")) return u.href;
  const ehPasta = existsSync(new URL(`./src/pages${caminho}/index.astro`, import.meta.url));
  u.pathname = ehPasta ? `${caminho}/` : `${caminho}.html`;
  return u.href;
}

export default defineConfig({
  site: SITE,
  // privacidade.astro vira privacidade.html: as URLs legadas estão nos apps e na Play Console.
  build: { format: "preserve" },
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (pagina) => !RASCUNHOS.some((r) => pagina.includes(r)) && !pagina.includes("/404"),
      serialize: (item) => ({ ...item, url: canonica(item.url) }),
    }),
  ],
});
