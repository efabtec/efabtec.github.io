# efab-site

Site da EFAB Tecnologia, com as páginas públicas do SmartDespensa exigidas pela Play Console.

HTML e CSS estáticos, sem build, sem JavaScript e sem cookies. Publicado pelo GitHub Pages a partir da `main`.

| Página | URL |
|---|---|
| Site da empresa | https://koicrafts.github.io/efab-site/ |
| SmartDespensa | https://koicrafts.github.io/efab-site/smartdespensa/ |
| Política de privacidade | https://koicrafts.github.io/efab-site/smartdespensa/privacidade.html |
| Exclusão de conta | https://koicrafts.github.io/efab-site/smartdespensa/excluir-conta.html |

## Rodar localmente

```sh
python3 -m http.server 8000
```

Abra http://localhost:8000/.

## Manutenção

- Mudou um SDK, uma permissão ou uma Cloud Function do app? Revise `smartdespensa/privacidade.html`, atualize a data de vigência e o formulário "Segurança dos dados" na Play Console.
- O cabeçalho e o rodapé se repetem em cada página: altere todos juntos.
