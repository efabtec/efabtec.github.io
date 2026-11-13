// Copia o tokens.json e os logos SVG de cada app dos clones irmãos para src/themes/tokens/ e public/logos/.
// Rode localmente quando um tema mudar (os repos dos apps são privados, o CI não os lê).
import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apps = { smartdespensa: "SmartDespensa", farmacinha: "farmacinha", daisy: "daisy" };

// O repo pode estar em ../efab-site ou num worktree em ../efab-site.worktrees/<id>.
const candidatos = [process.env.APPS_DIR, join(raiz, ".."), join(raiz, "..", "..")].filter(Boolean);
const base = candidatos.find((dir) => existsSync(join(dir, "SmartDespensa")));
if (!base) {
  console.error("Não achei os clones dos apps. Defina APPS_DIR com a pasta que contém SmartDespensa, farmacinha e daisy.");
  process.exit(1);
}

for (const [slug, repo] of Object.entries(apps)) {
  const origem = join(base, repo, "docs", "design-system", "tokens.json");
  copyFileSync(origem, join(raiz, "src", "themes", "tokens", `${slug}.json`));
  console.log(`${slug}: ${origem}`);

  const logos = join(base, repo, "docs", "design-system", "logos");
  if (!existsSync(logos)) continue;
  const destino = join(raiz, "public", "logos", slug);
  mkdirSync(destino, { recursive: true });
  for (const arquivo of readdirSync(logos).filter((f) => f.endsWith(".svg"))) {
    copyFileSync(join(logos, arquivo), join(destino, arquivo));
  }
}
