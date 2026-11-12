# efabtec.github.io

Site da EFAB Tecnologia, com as páginas públicas do SmartDespensa exigidas pela Play Console.

HTML e CSS estáticos, sem build, sem JavaScript e sem cookies. Publicado pelo GitHub Pages a partir da `main`.

| Página | URL |
|---|---|
| Site da empresa | https://efabtec.github.io/ |
| SmartDespensa | https://efabtec.github.io/smartdespensa/ |
| Política de privacidade | https://efabtec.github.io/smartdespensa/privacidade.html |
| Exclusão de conta | https://efabtec.github.io/smartdespensa/excluir-conta.html |
| Farmacinha | https://efabtec.github.io/farmacinha/ |
| Política de privacidade da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/privacidade.html |
| Termos de uso da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/termos.html |
| Como apagar os dados da Farmacinha (rascunho) | https://efabtec.github.io/farmacinha/excluir-dados.html |

## Rodar localmente

```sh
python3 -m http.server 8000
```

Abra http://localhost:8000/.

## Manutenção

- Mudou um SDK, uma permissão ou uma Cloud Function do app? Revise `smartdespensa/privacidade.html`, atualize a data de vigência e o formulário "Segurança dos dados" na Play Console.
- O cabeçalho e o rodapé se repetem em cada página: altere todos juntos.
- As páginas da Farmacinha estão marcadas como rascunho (aviso no topo e `noindex`) até a revisão jurídica e o lançamento; a origem do texto é `docs/legal/` no repo do app. As URLs estão no app (tela Configurações): não mude os caminhos.
