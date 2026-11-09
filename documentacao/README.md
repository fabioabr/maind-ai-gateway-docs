# Documentação de visão do Maind AI Gateway (mAIg)

Situação: rascunho para o dono da Maind revisar (visão do produto em quatro páginas, com quatro desenhos) · Data: 08/11/2026

Esta pasta é a fonte do site de documentação do mAIg. O site gerado fica em [`../docs/`](../docs/). As 18 decisões do dono da Maind estão no
[README do repositório](../README.md); a visão resumida, em [`../visao.md`](../visao.md).

## O que há aqui

```
documentacao/
├── docx.json                          ← a configuração do site (4 páginas, 4 diagramas, índice por macro tema em `portal.macros`)
├── marca/maind-claro.png, maind-escuro.png  ← os logos da Maind (tema claro e tema escuro)
├── content/<página>.html              ← um fragmento por página (ver a lista abaixo)
├── diagramas/
│   ├── maig-<tema>.html               ← a casca de cada diagrama (Archify + casca Maind, abas Diagrama e Explicações)
│   └── fontes/maig-<tema>.json        ← a fonte de cada diagrama (o que se edita: posições, ligações, cartões "Explicações")
└── .gitignore                         ← site/, *.archify.html e os recibos dos gates ficam fora do git
```

As quatro páginas, por macro tema:

- **Comece por aqui:** `visao` (o problema, a ideia, os cinco objetivos, o mercado).
- **Como funciona:** `nucleo-e-apps` (o que o mAIg traz pronto, o app em duas partes, a conexão de dentro para fora) e `organizacoes-e-contratacao`
  (instâncias e organizações, os papéis, a contratação e o fim do contrato).
- **Decisões e acompanhamento:** `decisoes` (as 18 decisões, com os motivos, e o que falta decidir por papel).

Toda página de assunto segue o mesmo molde: *Em uma frase*, *O desenho*, *Como funciona* e *O que falta decidir nesta parte*.

Os quatro diagramas: `maig-visao-geral` (o mAIg na casa do cliente), `maig-por-dentro` (o núcleo e os apps), `maig-instancia-organizacoes`
(uma instância, várias organizações) e `maig-contratacao` (da contratação ao uso, em sequência).

## Como ver

- **O portal inteiro:** gere o site de teste e sirva a pasta `site/` por HTTP (o navegador não abre os diagramas por `file:`).
- **Um diagrama só:** abra `diagramas/maig-<tema>.html` (é um arquivo autossuficiente).

```bash
python "<plugin docx>/scripts/docx.py" gerar --config docx.json                 # gera em site/ (o git ignora)
python "<plugin docx>/scripts/docx.py" gerar --config docx.json --saida ../docs # gera o site publicado
python "<plugin docx>/scripts/docx.py" validar --site ../docs
```

Para isolar a marca de qualquer configuração do usuário, aponte `CLAUDE_USER_HOME` para uma pasta vazia.

## Para mudar um diagrama

Edite o JSON em `diagramas/fontes/`, rode o `finalize` do Archify (saída `fontes/<tema>.archify.html`) e a casca `archify-maind` (saída
`diagramas/<tema>.html`), e gere o site de novo. A página de `diagramas/` é derivada; editá-la à mão se perde.

**Formato do bloco: o clássico do Archify.** Os diagramas usam a casca da versão **0.5.1** do plugin DocX, a de antes do cartão de componente
(CLOUD-CARD-001, que veio na 0.6.0), por decisão do dono da Maind: dentro da largura máxima do desenho, o texto do cartão ficava miúdo perto do
resto da página. A casca 0.5.1 sai da tag `docx--v0.5.1` do repositório `Maindtech-Plugins`:

```bash
git -C <Maindtech-Plugins> show docx--v0.5.1:plugins/docx/skills/archify-maind/scripts/skin.mjs > skin-0.5.1.mjs
node skin-0.5.1.mjs --html fontes/<tema>.archify.html --spec fontes/<tema>.json --out <tema>.html
```

A casca de hoje (0.6 em diante) desenha o cartão em todo diagrama de arquitetura. Fora o cartão, a 0.5.1 é igual a ela.

## O que ainda não foi feito

- O dono da Maind não revisou o texto. Os pontos que as 18 decisões não cobrem aparecem em cada página, em "O que falta decidir nesta parte", e na
  página `decisoes`, reunidos por papel. Ainda não são pendências registradas.
- **O mAIg ainda não tem logo próprio:** o portal usa o logo da Maind (decisão 7), um PNG para o tema claro e outro para o escuro, em `marca/`. A
  configuração da marca (nome, logos, cor de destaque, rodapé) está em `../.claude/plugins-data/kbr-docs/docs-brand.yml`; a cor foi calculada a
  partir do próprio logo, com contraste mínimo de 4,5:1 em cada tema.
- O GitHub Pages não está ligado; o site publicado em `../docs/` só vai ao ar com a ordem do dono da Maind.
- Cada diagrama foi conferido só por captura de tela; os cliques e os popups da casca não foram testados um a um.
