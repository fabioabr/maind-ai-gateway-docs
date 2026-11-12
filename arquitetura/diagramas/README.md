# Diagramas da arquitetura do mAIg

Três diagramas do Archify, na versão "Maind" (casca `archify-maind`), desenhados a partir de `../componentes.md` (seção 6, as
conexões), de `../tecnologia.md` e das decisões do `../../README.md`.

| Página | O que mostra | Fonte |
| --- | --- | --- |
| `maig-visao-geral.html` | O mAIg na casa do cliente, em blocos, com os periféricos e os provedores de login (o Google e, na segunda versão, o IdP da empresa); o ambiente do mAIg na Maind e a nuvem dos apps, em duas áreas separadas | `fontes/maig-visao-geral.json` (architecture) |
| `maig-por-dentro.html` | Os componentes do núcleo e o caminho de um pedido, da ligação ao banco ou à IA e de volta | `fontes/maig-por-dentro.json` (architecture) |
| `maig-nascimento-da-organizacao.html` | Do Gerenciador ao PDF com senha, à interface de setup, à instalação no estilo npm, ao primeiro owner e à liberação do app | `fontes/maig-nascimento-da-organizacao.json` (sequence) |

## Como ver

Cada página é um arquivo autossuficiente. Sirva a pasta por HTTP (o navegador não abre o diagrama embutido por `file:`):

```bash
python -m http.server 8000 --directory .
```

## Para mudar um diagrama

Edite o JSON em `fontes/`, rode o `finalize` do Archify (saída `fontes/<tema>.archify.html`) e a casca `archify-maind` (saída
`<tema>.html`). A página de cima é derivada; editá-la à mão se perde. Rode os comandos a partir desta pasta e dê a cada `finalize` uma
pasta `--out-dir` nova:

```bash
node "<archify>/bin/archify.mjs" finalize <architecture|sequence> fontes/<tema>.json fontes/<tema>.archify.html \
  --quality showcase --out-dir fontes/<tema>-review-<n> --json
```

**Formato do bloco: o clássico do Archify.** Os três diagramas usam a casca da versão **0.5.1** do plugin DocX, a de antes do cartão de
componente (CLOUD-CARD-001, que veio na 0.6.0), pela mesma decisão do dono do Horus de 08/11/2026: dentro da largura máxima do desenho, o
texto do cartão ficava miúdo perto do resto da página. As fontes não têm campos de cartão; os blocos têm o tamanho do bloco clássico
(200 × 72). A casca 0.5.1 sai da tag `docx--v0.5.1` do repositório `Maindtech-Plugins`:

```bash
git -C <Maindtech-Plugins> show docx--v0.5.1:plugins/docx/skills/archify-maind/scripts/skin.mjs > skin-0.5.1.mjs
node skin-0.5.1.mjs --html fontes/<tema>.archify.html --spec fontes/<tema>.json --out <tema>.html
```

Guarde o `skin-0.5.1.mjs` fora desta pasta. A casca de hoje (0.6 em diante) desenha o cartão em todo diagrama de arquitetura; fora o
cartão, a 0.5.1 é igual a ela.

## O que fica fora do git

Os `*.archify.html`, os recibos `*.archify.*.json` e as pastas `*-review-*` são os artefatos dos gates do Archify e trazem caminhos da
máquina; o `.gitignore` desta pasta os deixa de fora. Publica-se só a página da casca.
