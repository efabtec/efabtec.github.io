// Gera src/themes/gerado/<tema>.css a partir dos tokens.json dos apps e do tema da EFAB.
//
// Cada app nomeia as cores do seu jeito (o SmartDespensa descreve o tema do Compose; Farmacinha e
// Daisy usam nomes web). Aqui elas viram um vocabulário único do site (--fundo, --marca, ...),
// escopado em [data-tema="<app>"], para que uma página use um tema e o hub mostre vários.
// O script também confere o contraste dos pares de texto e falha se algum ficar abaixo do mínimo.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lerTokens = (slug) => JSON.parse(readFileSync(join(raiz, "src", "themes", "tokens", `${slug}.json`), "utf8"));

// Papel no site -> nome do token no app. Tudo que não é cor vem em `extras`.
const mapas = {
  smartdespensa: {
    cores: {
      fundo: "background",
      superficie: "surface",
      "superficie-recuada": "surface-variant",
      linha: "outline",
      "linha-forte": "ink-muted",
      tinta: "ink",
      "tinta-suave": "ink-muted",
      // primary (#1D9E75) não tem contraste de texto sobre a areia no claro: links usam a tinta
      // verde-escura, que é a cor de texto do próprio tema; no escuro, o primary claro serve.
      marca: { light: "ink", dark: "primary" },
      "marca-fundo": "primary",
      "sobre-marca": { light: "ink", dark: "on-primary" },
      // No escuro, primary-container é um verde médio sem contraste com a tinta clara.
      "marca-suave": { light: "primary-container", dark: "surface-variant" },
      destaque: "secondary",
      "destaque-suave": "secondary-container",
      // Fundo das ilustrações: o mascote é verde-água como o primary-container e sumiria nele.
      arte: "secondary-container",
      calor: "tertiary",
      ok: "status-sucesso",
      alerta: "status-alerta",
      critico: "status-critico",
    },
    raios: (t) => ({ sm: dp(t.shape.extraSmall), md: dp(t.shape.medium), lg: dp(t.shape.extraLarge) }),
    sombra: () => ({ light: "none", dark: "none" }),
    fontes: { titulo: "'Baloo 2 Variable', system-ui, sans-serif", texto: "'Nunito Sans Variable', system-ui, sans-serif" },
  },
  farmacinha: {
    cores: {
      fundo: "surface",
      superficie: "surface-raised",
      "superficie-recuada": "surface-sunken",
      linha: "line",
      "linha-forte": "line-strong",
      tinta: "ink",
      "tinta-suave": "ink-muted",
      marca: "brand",
      "marca-fundo": "brand",
      "sobre-marca": "on-brand",
      "marca-suave": "brand-soft",
      destaque: "coral-ink",
      "destaque-suave": "coral-soft",
      arte: "brand-soft",
      calor: "coral",
      ok: "status-ok",
      alerta: "status-warn",
      critico: "status-expired",
    },
    raios: raiosWeb,
    sombra: sombraWeb,
    fontes: { titulo: "'Bricolage Grotesque Variable', 'Figtree Variable', system-ui, sans-serif", texto: "'Figtree Variable', system-ui, sans-serif" },
  },
  daisy: {
    cores: {
      fundo: "surface",
      superficie: "surface-raised",
      "superficie-recuada": "surface-sunken",
      linha: "line",
      "linha-forte": "line-strong",
      tinta: "ink",
      "tinta-suave": "ink-muted",
      marca: "orange-ink",
      "marca-fundo": "orange",
      "sobre-marca": "on-orange",
      "marca-suave": "orange-soft",
      destaque: "orange-deep",
      "destaque-suave": "tip-soft",
      arte: "orange-soft",
      calor: "orange",
      ok: "status-ok",
      alerta: "status-soon",
      critico: "status-late",
    },
    raios: raiosWeb,
    sombra: sombraWeb,
    fontes: { titulo: "'Fraunces Variable', Georgia, serif", texto: "'Figtree Variable', system-ui, sans-serif" },
  },
};

// Tema da EFAB: o verde neutro do site original (assets/style.css do SD-85).
const efab = {
  cores: {
    fundo: { light: "#fbfaf7", dark: "#131715" },
    superficie: { light: "#ffffff", dark: "#1b201e" },
    "superficie-recuada": { light: "#f3f1ec", dark: "#0f1311" },
    linha: { light: "#e3e0d8", dark: "#2c3330" },
    "linha-forte": { light: "#8a918d", dark: "#6c7571" },
    tinta: { light: "#1d2321", dark: "#e8ebe9" },
    "tinta-suave": { light: "#5b6460", dark: "#a3aca8" },
    marca: { light: "#2f6b4f", dark: "#7cc4a0" },
    "marca-fundo": { light: "#2f6b4f", dark: "#7cc4a0" },
    "sobre-marca": { light: "#ffffff", dark: "#0f1a14" },
    "marca-suave": { light: "#e6f0ea", dark: "#1f2d26" },
    destaque: { light: "#2f6b4f", dark: "#7cc4a0" },
    "destaque-suave": { light: "#e6f0ea", dark: "#1f2d26" },
    arte: { light: "#e6f0ea", dark: "#1f2d26" },
    calor: { light: "#2f6b4f", dark: "#7cc4a0" },
    ok: { light: "#2f6b4f", dark: "#7cc4a0" },
    alerta: { light: "#8a4b00", dark: "#f5c26b" },
    critico: { light: "#a3261b", dark: "#ff9c90" },
  },
  raios: { sm: "8px", md: "12px", lg: "20px" },
  sombra: { light: "0 1px 2px rgba(29, 35, 33, 0.06), 0 2px 8px rgba(29, 35, 33, 0.05)", dark: "none" },
  fontes: { titulo: "'Figtree Variable', system-ui, sans-serif", texto: "'Figtree Variable', system-ui, sans-serif" },
};

// Pares que viram texto: [texto, fundo, mínimo]. 4.5 para texto corrido, 3 para botão grande e negrito.
const pares = [
  ["tinta", "fundo", 4.5],
  ["tinta", "superficie", 4.5],
  ["tinta-suave", "fundo", 4.5],
  ["tinta-suave", "superficie", 4.5],
  ["marca", "fundo", 4.5],
  ["marca", "superficie", 4.5],
  ["sobre-marca", "marca-fundo", 3],
  ["tinta", "marca-suave", 4.5],
  ["tinta", "destaque-suave", 4.5],
];

function dp(valor) {
  return String(valor).replace("dp", "px");
}

function raiosWeb(t) {
  const r = Object.fromEntries(t.radius.tokens.map((x) => [x.name, x.value]));
  return { sm: r["radius-sm"], md: r["radius-md"], lg: r["radius-lg"] };
}

function sombraWeb(t) {
  const s = t.shadow.tokens.find((x) => x.name === "shadow-card");
  return s.value;
}

function resolverCores(tokens, mapa) {
  const porNome = Object.fromEntries(tokens.color.tokens.map((x) => [x.name, x.value]));
  const valor = (nome, tema) => {
    let v = porNome[nome];
    if (v === undefined) throw new Error(`token de cor inexistente: ${nome}`);
    if (typeof v === "string") v = { light: v, dark: v };
    let s = v[tema];
    // Referência a outro token, como "{brand}".
    const ref = /^\{(.+)\}$/.exec(s);
    if (ref) return valor(ref[1], tema);
    return s;
  };
  const cores = {};
  for (const [papel, origem] of Object.entries(mapa)) {
    const nomes = typeof origem === "string" ? { light: origem, dark: origem } : origem;
    cores[papel] = { light: valor(nomes.light, "light"), dark: valor(nomes.dark, "dark") };
  }
  return cores;
}

function luminancia(hex) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const lin = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

function contraste(a, b) {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

function bloco(seletor, cores, tema, raios, sombra, fontes) {
  const linhas = Object.entries(cores).map(([papel, v]) => `  --${papel}: ${v[tema]};`);
  if (tema === "light") {
    linhas.push(`  --raio-sm: ${raios.sm};`, `  --raio-md: ${raios.md};`, `  --raio-lg: ${raios.lg};`);
    linhas.push(`  --fonte-titulo: ${fontes.titulo};`, `  --fonte-texto: ${fontes.texto};`);
  }
  linhas.push(`  --sombra-cartao: ${sombra[tema]};`, `  color-scheme: ${tema};`);
  return `${seletor} {\n${linhas.join("\n")}\n}`;
}

function gerar(slug, cores, raios, sombra, fontes) {
  const falhas = [];
  for (const tema of ["light", "dark"]) {
    for (const [texto, fundo, minimo] of pares) {
      const c = contraste(cores[texto][tema], cores[fundo][tema]);
      if (c < minimo) falhas.push(`${slug} ${tema}: ${texto} sobre ${fundo} = ${c.toFixed(2)} (mínimo ${minimo})`);
    }
  }
  if (falhas.length) {
    console.error(falhas.join("\n"));
    process.exitCode = 1;
  }
  const sel = `[data-tema="${slug}"]`;
  const css = [
    `/* Gerado por scripts/tokens-to-css.mjs a partir de src/themes/tokens. Não edite à mão. */`,
    bloco(sel, cores, "light", raios, sombra, fontes),
    `@media (prefers-color-scheme: dark) {\n${bloco(sel, cores, "dark", raios, sombra, fontes).replace(/^/gm, "  ")}\n}`,
    "",
  ].join("\n\n");
  writeFileSync(join(raiz, "src", "themes", "gerado", `${slug}.css`), css);
  console.log(`${slug}.css`);
}

for (const [slug, mapa] of Object.entries(mapas)) {
  const t = lerTokens(slug);
  gerar(slug, resolverCores(t, mapa.cores), mapa.raios(t), mapa.sombra(t), mapa.fontes);
}
gerar("efab", efab.cores, efab.raios, efab.sombra, efab.fontes);
