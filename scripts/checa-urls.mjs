// Confere o dist/ depois do build. Falha se:
// - faltar uma URL legada (estão nos apps, na Play Console e no Search Console);
// - um rascunho perder o noindex;
// - alguma página pedir recurso a terceiros (fontes, scripts, estilos): o site promete não ter.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

const LEGADAS = [
  "index.html",
  "404.html",
  "google4557c4a635160fdb.html",
  "smartdespensa/index.html",
  "smartdespensa/privacidade.html",
  "smartdespensa/excluir-conta.html",
  "daisy/index.html",
  "daisy/privacidade.html",
  "farmacinha/index.html",
  "farmacinha/privacidade.html",
  "farmacinha/termos.html",
  "farmacinha/excluir-dados.html",
];

const RASCUNHOS = ["farmacinha/privacidade.html", "farmacinha/termos.html", "farmacinha/excluir-dados.html"];

const erros = [];

for (const url of LEGADAS) {
  if (!existsSync(join(dist, url))) erros.push(`URL legada ausente: /${url}`);
}

for (const url of RASCUNHOS) {
  const arquivo = join(dist, url);
  if (existsSync(arquivo) && !readFileSync(arquivo, "utf8").includes('name="robots" content="noindex"')) {
    erros.push(`rascunho sem noindex: /${url}`);
  }
}

const paginas = (dir) =>
  readdirSync(dir).flatMap((nome) => {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) return paginas(caminho);
    return nome.endsWith(".html") || nome.endsWith(".css") ? [caminho] : [];
  });

// src, href de <link> e url() externos. Links <a> para fora são permitidos.
const externo = /(?:<script[^>]+src|<link[^>]+href|<img[^>]+src|url\()\s*=?\s*["']?(https?:)?\/\/(?!efabtec\.github\.io)/i;
for (const arquivo of paginas(dist)) {
  const texto = readFileSync(arquivo, "utf8");
  const tags = texto.match(/<(?:script|link|img)\b[^>]*>|url\([^)]*\)/gi) ?? [];
  for (const tag of tags) {
    if (/rel="canonical"/.test(tag)) continue;
    if (externo.test(tag)) erros.push(`recurso de terceiro em /${relative(dist, arquivo)}: ${tag}`);
  }
}

if (erros.length) {
  console.error(erros.join("\n"));
  process.exit(1);
}
console.log(`checa-urls: ${LEGADAS.length} URLs legadas presentes, rascunhos com noindex, sem recursos de terceiros.`);
