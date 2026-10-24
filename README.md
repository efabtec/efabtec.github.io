# efabtec.github.io

Site da EFAB Tecnologia, com as páginas públicas do SmartDespensa e do Daisy exigidas pela Play Console.

HTML e CSS estáticos, sem build, sem JavaScript e sem cookies. Publicado pelo GitHub Pages a partir da `main`.

| Página | URL |
|---|---|
| Site da empresa | https://efabtec.github.io/ |
| SmartDespensa | https://efabtec.github.io/smartdespensa/ |
| Política de privacidade do SmartDespensa | https://efabtec.github.io/smartdespensa/privacidade.html |
| Exclusão de conta | https://efabtec.github.io/smartdespensa/excluir-conta.html |
| Daisy | https://efabtec.github.io/daisy/ |
| Política de privacidade do Daisy | https://efabtec.github.io/daisy/privacidade.html |

## Rodar localmente

```sh
python3 -m http.server 8000
```

Abra http://localhost:8000/.

## Manutenção

- Mudou um SDK, uma permissão ou uma Cloud Function do app? Revise `smartdespensa/privacidade.html` ou `daisy/privacidade.html`, atualize a data de vigência e o formulário "Segurança dos dados" na Play Console.
- O cabeçalho e o rodapé se repetem em cada página: altere todos juntos.
- A URL da política do Daisy está no app (`URL_POLITICA_PRIVACIDADE`, no aviso antes da primeira foto da carteirinha): não mude o caminho.
