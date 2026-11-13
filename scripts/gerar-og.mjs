// Gera as imagens de compartilhamento (Open Graph, 1200 × 630) em public/og/, com o tema, a fonte e o
// símbolo de cada app. Rode localmente quando mudar o nome, a chamada, o tema ou o logo de um app:
//
//   npm i --no-save playwright@1.64.1 && node scripts/gerar-og.mjs
//
// Usa o Chrome instalado na máquina (channel: "chrome"). As imagens são commitadas: o CI não as gera.
import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const saida = join(raiz, "public", "og");
mkdirSync(saida, { recursive: true });

const fonte = (pacote, arquivo) =>
  pathToFileURL(join(raiz, "node_modules", "@fontsource-variable", pacote, "files", `${arquivo}-latin-wght-normal.woff2`)).href;

const fontes = {
  smartdespensa: { titulo: ["Baloo 2", fonte("baloo-2", "baloo-2")], texto: ["Nunito Sans", fonte("nunito-sans", "nunito-sans")] },
  daisy: { titulo: ["Fraunces", fonte("fraunces", "fraunces")], texto: ["Figtree", fonte("figtree", "figtree")] },
  farmacinha: {
    titulo: ["Bricolage Grotesque", fonte("bricolage-grotesque", "bricolage-grotesque")],
    texto: ["Figtree", fonte("figtree", "figtree")],
  },
  efab: { titulo: ["Figtree", fonte("figtree", "figtree")], texto: ["Figtree", fonte("figtree", "figtree")] },
};

/** Variáveis do tema claro, lidas do CSS gerado por tokens-to-css. */
function cores(slug) {
  const css = readFileSync(join(raiz, "src", "themes", "gerado", `${slug}.css`), "utf8");
  const claro = css.slice(0, css.indexOf("@media"));
  return Object.fromEntries([...claro.matchAll(/--([a-z-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]));
}

/** Campos simples do arquivo de dados do app (evita importar TypeScript aqui). */
function dadosDoApp(slug) {
  const ts = readFileSync(join(raiz, "src", "data", "apps", `${slug}.ts`), "utf8");
  const campo = (nome) => new RegExp(`\\n  ${nome}:\\s*"([^"]+)"`).exec(ts)?.[1];
  return { nome: campo("nome"), chamada: campo("chamada") ?? campo("slogan"), simbolo: campo("simbolo") };
}

const cartoes = [
  ...["smartdespensa", "daisy", "farmacinha"].map((slug) => {
    const d = dadosDoApp(slug);
    return {
      slug,
      titulo: d.nome,
      frase: d.chamada,
      simbolo: d.simbolo && pathToFileURL(join(raiz, "public", "logos", slug, d.simbolo)).href,
      rodape: `efabtec.github.io/${slug} · EFAB Tecnologia`,
    };
  }),
  {
    slug: "efab",
    titulo: "EFAB Tecnologia",
    frase: "Aplicativos que simplificam a rotina da casa",
    rodape: "efabtec.github.io · SmartDespensa · Daisy · Farmacinha",
  },
];

const escapar = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function html({ slug, titulo, frase, simbolo, rodape }) {
  const c = cores(slug);
  const f = fontes[slug];
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @font-face { font-family: "T"; src: url("${f.titulo[1]}") format("woff2"); font-weight: 100 900; }
    @font-face { font-family: "X"; src: url("${f.texto[1]}") format("woff2"); font-weight: 100 900; }
    * { box-sizing: border-box; margin: 0; }
    body { width: 1200px; height: 630px; overflow: hidden; background: ${c.fundo}; color: ${c.tinta}; font-family: "X"; }
    .faixa { position: absolute; inset: 0 0 auto 0; height: 14px; background: ${c["marca-fundo"]}; }
    .bolha { position: absolute; right: -90px; top: -60px; width: 560px; height: 560px;
      border-radius: 32% 68% 55% 45% / 45% 40% 60% 55%; background: ${c.arte}; }
    .simbolo { position: absolute; right: 90px; top: 120px; width: 300px; height: 300px; }
    .texto { position: absolute; left: 80px; top: 110px; width: ${simbolo ? 660 : 1000}px; }
    .nome { font: 700 34px/1.2 "T"; color: ${c.marca}; margin-bottom: 18px; }
    .frase { font: 700 ${frase.length > 48 ? 64 : 76}px/1.08 "T"; letter-spacing: -0.02em; }
    .rodape { position: absolute; left: 80px; bottom: 64px; font: 600 26px/1 "X"; color: ${c["tinta-suave"]}; }
  </style></head><body>
    <div class="faixa"></div>
    ${simbolo ? `<div class="bolha"></div><img class="simbolo" src="${simbolo}">` : ""}
    <div class="texto"><p class="nome">${escapar(titulo)}</p><p class="frase">${escapar(frase)}</p></div>
    <p class="rodape">${escapar(rodape)}</p>
  </body></html>`;
}

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
const temp = join(raiz, "node_modules", ".og-temp.html");
const { writeFileSync, rmSync } = await import("node:fs");
for (const cartao of cartoes) {
  writeFileSync(temp, html(cartao));
  await page.goto(pathToFileURL(temp).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: join(saida, `${cartao.slug}.png`) });
  console.log(`og/${cartao.slug}.png`);
}
rmSync(temp);
await browser.close();
