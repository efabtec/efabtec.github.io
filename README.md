# efabtec.github.io

Site da EFAB Tecnologia, com as páginas públicas do SmartDespensa exigidas pela Play Console.

HTML e CSS estáticos, sem build, sem JavaScript e sem cookies. Publicado pelo GitHub Pages a partir da `main`.

| Página | URL |
|---|---|
| Site da empresa | https://efabtec.github.io/ |
| SmartDespensa | https://efabtec.github.io/smartdespensa/ |
| Política de privacidade | https://efabtec.github.io/smartdespensa/privacidade.html |
| Exclusão de conta | https://efabtec.github.io/smartdespensa/excluir-conta.html |

## Rodar localmente

```sh
python3 -m http.server 8000
```

Abra http://localhost:8000/.

## Manutenção

- Mudou um SDK, uma permissão ou uma Cloud Function do app? Revise `smartdespensa/privacidade.html`, atualize a data de vigência e o formulário "Segurança dos dados" na Play Console.
- O cabeçalho e o rodapé se repetem em cada página: altere todos juntos.
