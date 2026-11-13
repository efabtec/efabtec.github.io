# efabtec.github.io

Site da EFAB Tecnologia e as páginas públicas dos apps (SmartDespensa, Daisy e Farmacinha), incluindo
as exigidas pela Play Console.

Feito com [Astro](https://astro.build) e gerado como HTML estático: sem JavaScript no navegador, sem
cookies, sem analytics, e as fontes vêm do próprio site, sem pedido a terceiros. O GitHub Pages
publica pelo workflow `.github/workflows/pages.yml` a cada push na `main`. Decisão no
[ADR 0051](https://github.com/efabtec/handbook/blob/main/decisoes/0051-site-da-efabtec-em-astro.md).

| Página | URL |
|---|---|
| Site da empresa | https://efabtec.github.io/ |
| Sobre a EFAB | https://efabtec.github.io/sobre.html |
| SmartDespensa | https://efabtec.github.io/smartdespensa/ |
| Política de privacidade do SmartDespensa | https://efabtec.github.io/smartdespensa/privacidade.html |
| Exclusão de conta | https://efabtec.github.io/smartdespensa/excluir-conta.html |
| Daisy | https://efabtec.github.io/daisy/ |
| Política de privacidade do Daisy | https://efabtec.github.io/daisy/privacidade.html |
| Farmacinha | https://efabtec.github.io/farmacinha/ |
| Política de privacidade da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/privacidade.html |
| Termos de uso da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/termos.html |
| Como apagar os dados da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/excluir-dados.html |

## Rodar localmente

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # gera dist/ e roda scripts/checa-urls.mjs
npm run preview   # serve o dist/
```

## Onde fica cada coisa

| Caminho | O que é |
|---|---|
| `src/data/apps/*.ts` | Conteúdo de cada app: textos, recursos, status, links e páginas legais. O tipo está em `src/data/tipos.ts`. |
| `src/data/efab.ts` | Razão social, CNPJ, cidade e e-mail. |
| `src/conteudo/legal/<app>/*.html` | Texto das políticas, termos e páginas de exclusão, em HTML puro. |
| `src/pages/` | Uma página por URL. `privacidade.astro` vira `privacidade.html` (`build.format: 'preserve'`). |
| `src/layouts/` | `Base` (head e SEO), `Efab`, `App` e um layout por app em `apps/`, que carrega o tema e as fontes dele. |
| `src/themes/tokens/` | Cópia do `docs/design-system/tokens.json` de cada app. |
| `src/themes/gerado/` | CSS dos temas, gerado por `npm run tokens`. Não edite à mão. |
| `public/` | Arquivos servidos como estão: logos dos apps, `favicon.svg` da EFAB, `robots.txt` e a verificação do Search Console. |

## Temas

Cada app tem as cores, as fontes e os cantos do seu design system. `scripts/tokens-to-css.mjs`
traduz os tokens de cada app para as variáveis do site (`--fundo`, `--marca`, `--tinta`...),
escopadas em `[data-tema="<app>"]`, e falha se algum par de texto ficar sem contraste.

Mudou um tema ou um logo num app? Rode `npm run sync-tokens`, que copia os tokens e os logos dos
clones irmãos (`../SmartDespensa`, `../farmacinha`, `../daisy`) e regera o CSS. O CI não lê os
repositórios dos apps, que são privados: o resultado é commitado aqui.

## Manutenção

- Os princípios da home ("sem anúncios", "comece sem cadastro"...) valem para os três apps hoje. Se um app passar a ter anúncios ou exigir conta, revise `src/pages/index.astro`.

- **Não mude os caminhos das URLs da tabela.** Estão nos apps (Configurações da Farmacinha,
  `URL_POLITICA_PRIVACIDADE` do Daisy), na Play Console e no Search Console.
  `scripts/checa-urls.mjs` falha o build se alguma sumir.
- Mudou um SDK, uma permissão ou uma Cloud Function de um app? Revise a política dele em
  `src/conteudo/legal/`, atualize a data de vigência e o formulário "Segurança dos dados" na Play Console.
- As páginas legais da Farmacinha estão em rascunho (aviso no topo, `noindex` e fora do sitemap)
  até a revisão jurídica e o lançamento; a origem do texto é `docs/legal/` no repo do app. Ao
  publicar, tire o `noindex` da página e a entrada em `RASCUNHOS` de `astro.config.mjs` e de
  `scripts/checa-urls.mjs`.
- Domínio próprio: mude `SITE` em `astro.config.mjs`, crie `public/CNAME` e atualize as URLs na
  Play Console e nos apps.
