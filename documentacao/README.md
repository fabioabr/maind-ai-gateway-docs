# Documentação das macro funcionalidades do mAIg

Esta pasta é a **documentação para quem vai contratar ou operar o Maind AI Gateway (mAIg)**: uma página por macro
funcionalidade (MF), em linguagem simples, com o que chega em cada onda, perguntas frequentes e, quando um fluxo ajuda, um
diagrama. Ela é **gerada com o plugin DocX** (design da Kinto), no mesmo formato do site das mfs do Horus v2.

**Situação:** em revisão (11/11/2026). Escritas: **as 12 macro funcionalidades** (MF-101 a MF-110, da primeira versão, e
MF-111 e MF-112, da segunda) e a página "Como ler". Substitui o portal de visão de 08/11/2026, que segue no histórico do
git (commit `1fe07cc` e anteriores).

## O que há aqui

```
documentacao/
├── docx.json              ← a configuração do portal (as macro funcionalidades por versão, a seção "Como ler", os diagramas)
├── content/               ← os fragmentos HTML, que são a fonte editável
│   ├── como-ler.html      ← o que é o mAIg, as ondas, os papéis, como cada página é organizada, o glossário
│   └── mf-101.html … mf-112.html   ← uma página por macro funcionalidade
├── diagramas/             ← a casca de cada diagrama; fontes/ guarda o JSON do Archify e os arquivos dos gates
├── marca/                 ← os logos da Maind (tema claro e tema escuro)
└── .gitignore             ← site/, *.archify.html e os recibos dos gates
```

A marca vem de `.claude/plugins-data/kbr-docs/docs-brand.yml`, na raiz do repositório. A saída que o GitHub Pages serve é
`../docs` (gerada, não se edita à mão).

## O formato de cada página de MF

Todas seguem a mesma ordem: **abertura** (com uma imagem do dia a dia) e o aviso de versão → **o que é** → **como funciona na
prática** (quem faz o quê, passo a passo, com um diagrama) → **o que chega em cada onda** (cada capacidade com o selo da onda)
→ **nos bastidores** → **o que ela não faz** e as **funcionalidades ligadas**, com o aviso "Ainda em definição" → **perguntas
frequentes** (seis por página).

- Os selos: <span>Onda 1.0</span> (`badge--success`), Onda 1.1 (`badge--info`), Segunda versão (`badge--warning`) e Não
  entra (`badge`, o neutro).
- Sem códigos de decisão no texto e sem o nome de nenhum app: os números das decisões ficam só nas tabelas de fontes abaixo.
- O manual do formato é o do Horus v2 (`horus-v2-docs/manuais/manual-geracao-doc-mf.md`), com as adaptações do mAIg:
  o aviso "Primeira versão, em construção" (ou "Segunda versão"), a seção "O que chega em cada onda" e os selos de onda.

## Gerar e validar

Da pasta `documentacao/`, com o plugin DocX (`docx@maindtech`, 0.6.1 ou superior):

```bash
python "<plugin docx>/scripts/docx.py" gerar --config docx.json                  # teste, em site/ (o git ignora)
python "<plugin docx>/scripts/docx.py" validar --site site
python "<plugin docx>/scripts/docx.py" gerar --config docx.json --saida ../docs   # publicação (só com ordem do dono)
python "<plugin docx>/scripts/docx.py" validar --site ../docs
```

Os diagramas: a fonte é `diagramas/fontes/mf-nnn-<slug>.json`; o `finalize` do Archify grava
`diagramas/fontes/mf-nnn-<slug>.archify.html` (fora da publicação), e a casca `archify-maind` grava
`diagramas/mf-nnn-<slug>.html`. Ao mudar a fonte, refaça o `finalize` e a casca.

## De onde veio o conteúdo

Cada afirmação das páginas vem da documentação em Markdown deste repositório: as **decisões** do `README.md` da raiz
(numeradas de 1 a 127; vale a mais recente e específica), as **mfs** em `produto/mfs/` e, quando preciso, a `visao.md` e o
mapa das macro funcionalidades.

### MF-101 · Entrar e agir só dentro do que foi permitido

| Assunto da página | Fonte |
|---|---|
| Abertura (a portaria, igual para todos os apps) | decisões 3 e 5; mf "Em uma frase", "Quem ganha" |
| O que é e quem usa | decisões 3, 5, 10, 12, 23, 32, 51, 56 e 99; mf "Autenticação e autorização" |
| A portaria, pedido a pedido; quando dá errado | decisões 4, 5, 33 e 96; mf "Autenticação e autorização" |
| Senha esquecida e tentativas erradas | decisões 50, 99 e 102 |
| Os jeitos de entrar | decisões 16, 37, 40, 50, 54, 85, 92 e 98; mf "Os jeitos de entrar na primeira versão" |
| A senha de quem configura tudo | decisões 24, 50, 54, 55 e 99 |
| O endereço do mAIg e o passe | decisões 32, 33, 37, 40, 48 e 86; mf "Onde se entra" |
| Certificado da organização | decisões 28, 44 e 126 |
| Tarefas marcadas | decisão 42 |
| Diagrama | decisões 5, 32, 33, 37, 40, 86 e 96; mf "Onde se entra", "As permissões" |
| Os quatro papéis | decisões 9, 10, 12, 39, 46, 65, 78, 81, 83, 84, 96, 97, 100, 114 e 119; mf "Os quatro papéis" |
| Separação de funções, fé pública, mais de um papel | decisões 12, 54, 67 e 96 |
| Os owners da organização | decisões 51, 54, 83, 84 e 85 |
| Os auditores | decisões 54, 79, 96, 97 e 127 |
| Os administradores da instância; a equipe da Maind | decisões 24, 68, 100, 102, 126 e 127 |
| As duas conferências, a recusa e o que fica com o app | decisões 4, 5, 9, 10, 60, 73 e 96; mf "As permissões" |
| Primeiro acesso do owner e servidor de e-mail | decisões 29, 51, 87, 90 e 125; mf "O primeiro acesso" |
| As pessoas: cadastro, login único, sem convite, em lote | decisões 23, 77 e 101 |
| Quando uma pessoa sai | decisões 15, 27 e 37 |
| Uma pessoa em duas organizações | decisões 9, 11, 40 e 66 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 92 e 95 |
| Nos bastidores | decisões 3, 5, 32, 33, 51, 54, 86, 96 e 99 |
| Limites e ligadas | mf "O que não inclui", "Depende de"; decisões 16, 50, 60, 73 e 77 |
| Ainda em definição | mf "O que ainda falta decidir"; decisões 37, 48, 50, 99 e 100 |
| Perguntas frequentes | decisões 5, 16, 27, 32, 37, 42, 48, 83, 84, 86, 96, 98 e 99 |

### MF-102 · Saber quem pediu o quê, quando e com que dado

| Assunto da página | Fonte |
|---|---|
| Abertura (livro de visitas; quem anota é o mAIg) | mf "Em uma frase", "O que cada linha do registro anota"; decisões 3, 5 e 12 |
| O que é; log, auditoria e registro; núcleo e módulo | mf "O que cada linha do registro anota"; decisões 3, 4, 5 e 12 |
| Quem faz o quê | mf "Quem consulta e quem não vê"; decisões 12, 29, 79, 96 e 97 |
| O que cada linha anota | mf; decisões 5, 22, 56 e 58 |
| Diagrama "Do pedido à linha do registro" | mf "O que cada linha do registro anota", "Sem anotar, não atende"; decisões 5, 12, 58 e 96 |
| O pedido recusado; sem anotar, não atende | mf; decisões 62, 96 e 124 |
| O que só o app vê | mf; decisões 59, 92, 95 e 104 |
| Em nome de quem; passe; tarefa marcada | mf "Em nome de quem"; decisões 23, 32, 37, 42 e 49 |
| Atos de quem configura | mf "Os atos de quem configura"; decisões 12, 96, 99 e 106 |
| Atos sensíveis, aviso de segurança, painel de alertas | mf; decisões 54, 64, 68, 74, 79, 83, 85, 89, 95, 111 e 126 |
| Atos do administrador da instância; registro da instância | mf; decisões 10, 29, 46, 47, 51, 81, 82, 83, 102 e 116 |
| Quem consulta; por que o administrador fica de fora | mf "Quem consulta e quem não vê"; decisões 9, 12 e 119 |
| Sigilo fora da tela; código de recuperação; cópia de segurança; suporte | mf; decisões 57, 65, 68, 87 e 116 |
| A guarda; parar não é desinstalar | mf "A guarda"; decisões 13, 14, 15, 21, 31, 56, 106 e 114 |
| Quem sai da organização | decisão 27 |
| A desinstalação vale para a instância; aviso com prazo | decisões 10, 15, 21 e 107 |
| Cópia assinada do registro | decisões 21, 54, 80, 105 e 106 |
| O que foi pedido, nunca os dados; filtro mascarado | mf "O conteúdo do que foi pedido"; decisões 20, 58, 103 e 111 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 92 e 95 e as de cada linha |
| Nos bastidores | decisões 5, 26, 29, 57 e 87; mf "O que ainda falta decidir" |
| O que não faz | mf "O que não inclui"; decisões 58, 59, 80, 89, 104 e 105 |
| Funcionalidades ligadas | mf "Depende de"; mapa |
| Ainda em definição | mf "O que ainda falta decidir"; decisões 27, 57 e 107 |
| Perguntas frequentes | decisões 12, 15, 27, 31, 57, 58, 79, 80, 87, 97, 103, 105, 106, 107 e 127 |

### MF-103 · Contratar e liberar um app com segurança

| Assunto da página | Fonte |
|---|---|
| Abertura e "O que é" | mf §Em uma frase, §Quem ganha; decisões 9, 10, 11 e 13 |
| Quem faz o quê | mf §Quem ganha, §O kit, §A situação do contrato; decisões 10, 12 e 94 |
| O caminho inteiro | mf §O caminho inteiro; decisões 6, 10, 13, 28 e 82 |
| O trâmite comercial e quem paga o quê | mf §O trâmite comercial, §O que não inclui; decisões 10, 11 e 17 |
| O kit de instalação | mf §O kit de instalação; decisões 10, 28 e 82 |
| Três peças e dois certificados | mf §Três peças; decisões 10, 28, 44, 56, 86 e 126 |
| A conferência da contratação | mf §O handshake contratual; decisões 6, 10, 11 e 56 |
| Uma contratação por organização; na hospedagem da Maind | mf §Uma contratação por organização, §Na infraestrutura da Maind; decisões 9, 11, 12 e 28 |
| Exemplo completo e segundo app | mf §Exemplo completo, §O segundo app; decisões 6 e 56 |
| A situação do contrato e o diagrama | mf §A situação do contrato, §A carência, §O handshake; decisões 12, 13, 56, 70 e 94 |
| O aviso do fim do contrato | mf §O aviso do fim do contrato; decisões 13, 56, 64, 83 e 126 |
| A carência e as duas formas de parar | mf §A carência, §Quando dá errado; decisões 11, 13, 14, 15, 56, 85 e 94 |
| A renovação | mf §A renovação; decisões 13, 14, 56 e 106 |
| O que chega em cada onda | mf §O que entra em cada onda; decisões 10, 11, 13, 14, 16, 56, 82, 94, 106 e 126 |
| Nos bastidores | decisões 6, 12, 28, 44, 56, 82, 86 e 94 |
| Limites e funcionalidades ligadas | mf §O que não inclui, §Depende de; decisões 8, 17, 70, 106 e 121 |
| Ainda em definição | mf §O que ainda falta decidir; decisões 10, 13 e 56 |
| Perguntas frequentes | decisões 6, 11, 13, 14, 28, 56, 86 e 94 |

### MF-104 · Instalar, pausar e retirar apps sem refazer nada

| Assunto da página | Fonte |
|---|---|
| Abertura e "O que é" | mf "Em uma frase", "Quem ganha"; decisões 3, 9, 14, 15, 46 e 106 |
| Quem faz o quê | mf "Quem ganha", "O ciclo de vida"; decisões 10, 12, 13, 56 e 94 |
| O ciclo de vida (tabela e diagrama) | mf "O ciclo de vida de um app"; decisões 10, 13, 14, 15, 46, 56 e 106 |
| Na onda 1.0, um app só para | mf "Em que onda"; decisões 94 e 106 |
| Instalar e liberar | mf "Instalar", "Liberar e configurar"; decisões 4, 10, 11, 72, 88 e 95 |
| As quatro partes da configuração | mf "Liberar e configurar"; decisões 10, 11 e 14 |
| Cockpit de ativação na onda 1.1 | decisões 72, 92 e 95 |
| Pausar e retomar | mf "Pausar e retomar"; decisões 14, 15, 70, 96 e 121 |
| Suspensão de emergência | mf "A suspensão de emergência"; decisões 29, 46 e 85 |
| Fim do contrato, parado, renovação | mf "Quando o app para depois do fim do contrato"; decisões 13, 14, 56 e 106 |
| O que fica guardado | mf "A configuração guardada"; decisões 14 e 106 |
| Atualizar sem reinstalar | mf "Atualizar um app e as versões que convivem"; decisões 29, 39, 45, 88, 109 e 121 |
| Retirar o app | mf "Retirar o app da organização"; decisões 15, 21, 80, 106 e 108 |
| Desinstalar, trava e aviso com prazo | mf "Desinstalar"; decisões 12, 15, 21, 31, 81, 85 e 107 |
| Encerramento e pedido de volta | mf "E se a organização for encerrada"; decisões 31, 78, 107 e 114 |
| Organização que não responde | mf "Desinstalar"; decisões 21, 78, 83 e 108 |
| Uma instância, várias organizações | mf "Uma instância, várias organizações"; decisões 9 e 11 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 10, 12, 13, 14, 15, 21, 29, 31, 45, 46, 72, 78, 80, 81, 85, 88, 92, 95, 96, 106, 107, 108 e 109 |
| Nos bastidores | mf "Instalar", "Desinstalar"; decisões 4, 12, 15, 29, 81 e 88 |
| Limites e funcionalidades ligadas | mf "O que não inclui", "Depende de"; decisões 70 e 108 |
| Ainda em definição | mf "O que ainda falta decidir"; decisões 107 e 109 |
| Perguntas frequentes | mf; decisões 14, 46, 88, 94, 106, 107, 108 e 109 |

### MF-105 · Usar os bancos da empresa sem expor a senha

| Assunto da página | Fonte |
|---|---|
| Abertura (o cofre do hotel) | mf "Em uma frase", "O cofre"; decisão 5 |
| O que é, em poucas palavras | mf "Em uma frase", "A decisão que passa a ser possível"; decisões 3, 4, 5, 6, 12, 61, 71 e 111 |
| Quem faz o quê | mf "Quem faz e quem vê o quê com os bancos"; decisões 9, 10, 12 e 67 |
| Cadastrar um banco | mf "O cofre: a senha entra uma vez e não sai mais"; decisões 5, 54, 61, 67 e 111 |
| O cofre (cifra, cópia de segurança, código de recuperação) | mf "O cofre é cifrado"; decisões 57, 65 e 87 |
| As colunas sensíveis | mf "As colunas sensíveis, no cadastro"; decisões 43, 54 e 111 |
| Quais bancos a primeira versão lê | mf "Quais bancos a primeira versão lê"; decisão 110 |
| Só ler, nunca alterar | mf "O acesso só de leitura"; decisões 5, 12, 43, 61 e 124 |
| Quais apps leem cada banco | mf "Quais apps leem cada banco"; decisões 5, 9 e 73 |
| O caminho de um pedido de dados e o diagrama | mf "O caminho de um pedido de dados, passo a passo"; decisões 4, 5, 6, 34, 43, 58, 74 e 124 |
| O que sai do mAIg | mf; decisões 34, 35, 43, 74, 95, 111 e 124 |
| A senha muda, o app para, o banco sai do cadastro | mf; decisões 14, 15 e 106 |
| Na casa do cliente ou na hospedagem da Maind | mf "Na hospedagem da Maind"; decisões 6, 9, 12, 19, 57, 90 e 91 |
| Quando dá errado; quem é avisado | mf "Quando dá errado"; decisões 5, 64, 71, 96 e 126 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 5, 43, 57, 61, 64, 67, 71, 73, 92, 95, 110, 111, 124 e 126 |
| Nos bastidores | mf; decisões 4, 5, 43, 57, 58 e 60 |
| O que não faz; funcionalidades ligadas | mf "O que não inclui", "Depende de"; decisões 5, 16, 60, 73, 92 e 110 |
| Ainda em definição | mf "O que ainda falta decidir"; decisões 61, 110 e 111 |
| Perguntas frequentes | decisões 5, 34, 48, 57, 61, 67, 73, 87, 91, 110 e 111 |

### MF-106 · Controlar quais IAs, quanto e a que custo

| Assunto da página | Fonte |
|---|---|
| Abertura (cartão corporativo; o que acontece a cada pedido) | mf §Em uma frase, §Os limites; decisões 5 e 22 |
| O que é, em poucas palavras | mf §Em uma frase, §O que se governa; decisões 1, 3, 5, 16 e 112 |
| Quem faz o quê | mf §Quem faz e quem vê o quê com a IA; decisões 12, 19, 22 e 96 |
| As chaves: no cofre, nunca num app | mf §As chaves; decisões 5, 22 e 96 |
| Os modelos permitidos, app por app | mf §Os modelos permitidos; decisões 5 e 96 |
| O limite de gasto de cada app | mf §Os limites; decisões 64, 75, 112 e 126 |
| O custo por app e a visão do consumo | mf §O custo por app; decisões 5, 12, 16, 22 e 112 |
| Um pedido de IA, passo a passo, e o diagrama | mf §Um pedido de IA; decisões 5, 6, 19, 20, 58, 62 e 75 |
| Para onde vai o pedido ao provedor | mf §Para onde vai o pedido; decisões 19, 34, 43, 63, 74 e 95 |
| As três camadas e o primeiro app na camada 1 | mf §O que o pedido pode levar; decisões 20, 54, 58, 62, 76 e 113 |
| Na casa do cliente ou na hospedagem da Maind | mf §Na hospedagem da Maind; decisões 9, 22 e 57 |
| Quando dá errado | mf §Quando dá errado; decisões 14, 15, 71, 96, 106 e 126 |
| O que chega em cada onda | mf §O que entra em cada onda; decisões 5, 16, 19, 20, 22, 54, 62, 71, 75, 76, 85, 92, 95, 96, 112, 113 e 126 |
| Nos bastidores | mf §O que se governa, §Quem é quem; decisões 3, 4, 5, 12, 96 e 112 |
| O que não faz e funcionalidades ligadas | mf §O que não inclui, §Depende de; mapa; decisões 20, 22, 58, 89 e 96 |
| Ainda em definição | mf §O que ainda falta decidir; decisões 20, 112 e 113 |
| Perguntas frequentes | decisões 5, 20, 22, 62, 75, 89, 96 e 112 |

### MF-107 · Atender várias organizações numa instalação, sem misturá-las

| Assunto da página | Fonte |
|---|---|
| Abertura: condomínio, instância, organização, empresa | mf §Instância, organização e empresa; decisões 9 e 11 |
| O que é / Quem faz o quê | mf §Quem ganha, §Criar, §Encerrar; decisões 9, 10, 12, 28, 39, 65, 78, 83, 87 e 115 |
| Várias organizações sem misturá-las | mf §Várias organizações numa instância; decisões 9, 10, 11, 12 e 23 |
| Organização e empresa | mf §Instância, organização e empresa; decisão 11 |
| O risco que se aceita | mf §Várias organizações; decisão 57 |
| Casa do cliente x hospedagem da Maind | mf §Onde a instância roda; decisões 9, 10, 26, 33, 39, 46, 47, 48, 90, 91, 96 e 125 |
| Endereço do mAIg e seu certificado | decisão 120 |
| Ligação obrigatória; mudar de lugar não entra | decisões 6, 15, 41, 117 e 122 |
| Do nascimento ao primeiro uso | mf §Criar uma organização, §A organização fica ativa; decisões 28, 29, 41, 51, 72, 86, 87 e 125 |
| Auditor e outros owners | decisões 12, 79, 83, 84 e 97 |
| Certificado de cada organização | decisões 28, 32, 44, 56 e 126 |
| Em configuração e ativa; cockpit de ativação | mf §A organização fica ativa; decisões 72, 83 e 95 |
| Painel da instância | mf §O painel da instância; decisões 12, 29, 39, 46, 83 e 119 |
| Registro da instância | decisões 81, 100, 102 e 116 |
| Atualizar o próprio mAIg | mf §Atualizar o próprio mAIg; decisões 2, 29, 39, 45, 47, 109 e 126 |
| Cópia de segurança e o código de recuperação | mf §A cópia de segurança; decisões 57, 65, 86, 87, 93, 102 e 116 |
| Encerrar uma organização | mf §Encerrar; decisões 15, 21, 31, 56, 78, 107, 114 e 115 |
| Saída do cliente | decisões 87 e 118 |
| Diagrama | decisões 15, 28, 31, 72, 78, 107, 114 e 115 |
| O que chega em cada onda | mf §O que entra em cada onda; decisões 92 e 95 |
| Nos bastidores | decisões 28, 32, 57, 86 e 123 |
| Limites e funcionalidades ligadas | mf §O que não inclui, §Depende de; decisões 11, 12, 31, 117 e 122 |
| Ainda em definição | mf §O que ainda falta decidir; decisões 9, 39, 107, 116 e 120 |
| Perguntas frequentes | decisões 9, 12, 28, 31, 39, 45, 47, 57, 65, 72, 87, 95, 114, 116, 117 e 118 |

### MF-108 · Funcionar sem abrir porta de entrada na rede

| Assunto da página | Fonte |
|---|---|
| Abertura (ramal de telefone; porta de entrada x saídas) | mf "A ligação que o mAIg abre para fora"; decisões 6 e 19 |
| O que é, em poucas palavras | mf "Em uma frase", "Como funciona"; decisões 4, 6 e 9 |
| Quem faz o quê | mf "Quem ganha", "O estado da ligação", "Quando a ligação cai"; decisões 6, 12, 19, 38, 39, 71, 74 e 98 |
| A ligação que o mAIg abre para fora | mf; decisão 6 |
| Uma ligação para todas as pessoas | mf "O que corre pela ligação"; decisões 3, 6, 32 e 33 |
| Sem a saída, não há mAIg na rede da empresa | mf "Sem modo sem ligação"; decisões 41 e 122 |
| As saídas que a TI do cliente libera | mf "Depende de"; decisões 19, 90, 92, 98 e 125 |
| O que corre pela ligação, e o que não corre | mf "O que corre pela ligação"; decisões 26, 32, 34, 35, 39, 43, 44, 56, 74, 95 e 103 |
| O mínimo de operação | decisão 123 |
| Um pedido, do começo ao fim, e o diagrama | mf; decisões 6, 19, 33, 43 e 69 |
| O certificado dentro da ligação | mf; decisões 6, 10, 11, 13, 14, 56 e 106 |
| Quando a ligação cai | mf "Quando algo dá errado"; decisão 6 |
| O que estava em andamento fica guardado | mf "Guardar o que estava em andamento"; decisões 6 e 69 |
| As tarefas marcadas esperam até uma hora | mf; decisões 42, 69 e 126 |
| O estado da ligação: quem vê e quem é avisado | mf; decisões 9, 12, 23, 26, 32, 33, 41, 64, 70, 71, 109, 121 e 126 |
| Ligação no ar, conversa recusada | mf; decisões 6, 10, 39, 45 e 109 |
| A ligação nas duas hospedagens | mf; decisões 9, 26, 32, 48, 90 e 91 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 6, 10, 12, 19, 33, 38, 45, 56, 69, 70, 71, 90, 92, 95, 121, 122, 123 e 126 |
| Nos bastidores | mf "Quem faz a ligação"; decisões 33, 38, 39 e 43 |
| O que não faz; funcionalidades ligadas | mf "O que não inclui", "Depende de"; decisões 19, 32, 39, 41, 56, 69, 70, 90, 91, 109, 121 e 122 |
| Ainda em definição | mf "O que ainda falta decidir"; decisões 6, 33, 38, 39, 69 e 121 |
| Perguntas frequentes | decisões 6, 19, 26, 33, 43, 69, 71, 90 e 123 |

### MF-109 · Rodar cada app isolado dentro do mAIg

| Assunto da página | Fonte |
|---|---|
| Abertura e "O que é" | mf §Em uma frase, §Por que esta mf existe, §A decisão que passa a ser possível; decisões 3, 4 e 5 |
| Quem faz o quê | mf §Quem ganha; decisões 10, 12, 43, 46, 54, 74, 89 e 111 |
| Um app, duas partes; instalar não é rodar | mf §O módulo; decisões 3, 4, 5, 10 e 34 |
| Da pergunta à resposta (passos e diagrama) | mf §Onde a pergunta vira resposta; decisões 5, 6, 34 e 43 |
| Ponto de atenção da hospedagem na Maind | mf §A ressalva da hospedagem na Maind; decisão 9 |
| A única porta, o que o módulo não faz | mf §A única porta do módulo; decisões 4, 5, 6, 12, 63 e 96 |
| O que volta à nuvem, painel e cache | mf §O que volta à nuvem do app; decisões 34, 35 e 93 |
| Teto e limite de pedidos | decisões 43, 54, 85, 89, 111 e 124 |
| Como se prova | decisão 36 |
| Saídas além da resposta pronta | decisões 43, 54, 61, 74, 95, 103 e 111 |
| As quatro garantias e o segundo app | mf §O que o isolamento tem de garantir; decisões 4, 12, 28, 32, 56 e 60 |
| O que o núcleo garante e o que é do app | decisões 5, 36, 43, 46, 60 e 73; visão §O que o núcleo garante |
| Um módulo, várias organizações | mf §Um módulo, várias organizações; decisões 9, 10, 11, 12, 28, 32, 56, 60 e 95 |
| Quando atende e quando deixa de atender | mf §Quando o módulo atende; decisões 10, 11, 13, 14, 15, 56, 94 e 106 |
| Quando dá errado | mf §Quando dá errado; decisões 4, 5, 6, 46, 69 e 121 |
| O que chega em cada onda | mf §O que entra em cada onda; decisões 4, 5, 9, 10, 11, 16, 34, 35, 43, 54, 62, 63, 74, 89, 92, 93, 95, 103 e 124 |
| Nos bastidores | decisões 4, 19, 63 e 88 |
| O que não faz | mf §O que não inclui; decisões 8, 60, 73 e 106 |
| Ainda em definição | mf §O que ainda falta decidir; decisões 4, 6, 89 e 93 |
| Perguntas frequentes | decisões 4, 5, 9, 34, 35, 43, 46, 60, 63, 74, 95 e 121 |

### MF-110 · Configurar tudo num lugar só

| Assunto da página | Fonte |
|---|---|
| Abertura (a sala da administração, um lugar só) | mf "Em uma frase", "Por que esta mf existe", "O console"; decisões 3 e 5 |
| O que é, em poucas palavras | mf "O console", "Cada papel vê só a sua parte"; decisões 10, 12 e 96 |
| Quem entra e o que vê | mf "Cada papel vê só a sua parte"; decisões 9, 10, 12, 96 e 119 |
| Do console vazio ao primeiro app em uso (passos e diagrama) | mf "A parte da instância", "A parte da organização"; decisões 5, 10, 28, 51, 82, 86, 88 e 125 |
| O que falta para ficar pronto (cockpit de ativação) | mf "Quando dá errado"; decisões 72 e 95 |
| A parte da instância | mf "A parte da instância"; decisões 39, 45, 46, 65, 83, 84, 88, 90, 100, 102, 114, 116, 119 e 125 |
| O que o administrador da instância não vê | decisões 12, 29, 67 e 119 |
| A parte da organização | mf "A parte da organização"; decisões 13, 14, 20, 23, 43, 64, 72, 74, 77, 79, 83, 89, 95, 96, 97, 98, 99, 101, 106, 111, 112 e 126 |
| Os atos sensíveis | decisões 54, 68, 74, 79, 80, 85, 95 e 111 |
| Por que é o owner quem configura; quando dá errado | decisões 5, 10, 14, 67, 68 e 106 |
| O auditor no console | mf "O auditor no console"; decisões 12, 80 e 96 |
| Os avisos do console | decisões 64, 71, 85 e 126 |
| O que fica fora do console | mf "O que fica fora do console"; decisões 42, 55, 77 e 120 |
| O mesmo console nas duas hospedagens | mf "O mesmo console nas duas hospedagens"; decisões 9, 26, 39, 47, 48, 57, 83, 91 e 96 |
| Ponto de atenção (console na internet, só com senha) | decisões 48, 50 e 92 |
| O suporte da equipe da Maind | mf "O suporte da equipe da Maind"; decisões 54, 67, 68 e 127 |
| Quando dá errado | mf "Quando dá errado"; decisões 70, 83, 99, 100, 120 e 121 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 10, 12, 26, 48, 64, 67, 68, 71, 85, 90, 92, 96, 125, 126 e 127 |
| Nos bastidores | mf "Quando dá errado"; decisões 24, 26, 55 e 57 |
| O que não faz e funcionalidades ligadas | mf "O que não inclui", "Depende de"; decisões 16, 50 e 92 |
| Ainda em definição | mf "O que não inclui", "O que ainda falta decidir"; decisões 89, 99, 100 e 120 |
| Perguntas frequentes | decisões 12, 23, 26, 48, 57, 67, 68, 77, 79, 96, 97 e 127 |

### MF-111 · Dar à IA as ferramentas da empresa, só para leitura

| Assunto da página | Fonte |
|---|---|
| Abertura (o balcão, o que a mf faz) | mf: "Em uma frase", "Os termos, pelo que fazem", "Por que existe"; decisão 5 |
| Aviso de segunda versão e o que a primeira deixa pronto | mf: "Em que onda", "Por que fica para a segunda versão"; decisões 16, 92 e 95 |
| O que é / Quem faz o quê | mf: "Quem ganha", "Só o owner da organização cadastra os servidores"; decisões 5 e 12 |
| Onde o servidor fica | mf: "Onde o servidor fica, e por que a IA só chega a ele pelo mAIg"; decisões 5, 9, 34 e 43 |
| Do cadastro à primeira resposta | mf: "Só o owner…", "Toda ferramenta nasce bloqueada", "Quem pode usar cada servidor" |
| Toda ferramenta nasce bloqueada | mf: "Toda ferramenta nasce bloqueada…" |
| O que o "só leitura" garante | mf: "O que o 'só leitura' garante…"; decisão 5 |
| Quem pode usar cada servidor | mf: "Quem pode usar cada servidor"; decisão 23 |
| Uma pergunta, passo a passo, e o diagrama | mf: "Uma pergunta que usa o servidor MCP, passo a passo"; decisões 5, 6, 12 e 15 |
| Quando dá errado | mf: "Quando dá errado"; decisões 14 e 15 |
| O que chega em cada onda | mf: tabela "O que entra em cada onda"; decisões 16, 92 e 95 |
| Nos bastidores | mf: "Toda ferramenta nasce bloqueada", "Quem ganha", "O que ainda falta decidir"; decisão 5 |
| O que não faz | mf: "O que não inclui"; decisão 8 |
| Funcionalidades ligadas | mf: "Depende de"; mapa das macro funcionalidades |
| Ainda em definição | mf: "O que ainda falta decidir"; decisões 20, 23 e 91 |

### MF-112 · Entrar com o login que a empresa já usa

| Assunto da página | Fonte |
|---|---|
| Abertura (a TI desliga uma vez; o crachá na portaria) | mf "Em uma frase", "Por que existe", "O que é o login da empresa"; decisões 24 e 55 |
| Aviso de versão e o que a primeira versão já faz | decisões 16, 92, 95 e 98; mf "Em que onda" |
| O que é; quem faz o quê | mf "Quem ganha", "Quem é quem"; decisões 3, 23, 24, 54, 85, 90 e 96 |
| Ligar o login numa organização | mf "Mais um jeito de entrar"; decisões 24, 40, 54, 85 e 98 |
| O padrão aceito | mf "Mais um jeito de entrar" (ponto de partida) |
| Uma ligação em cada organização | decisões 9, 11 e 66 |
| Entrar com a conta da empresa, e o diagrama | mf "O que é o login da empresa"; decisões 32, 37, 40 e 86 |
| O login confirma; o cadastro decide | mf "O login só confirma quem a pessoa é"; decisões 23 e 77 |
| O papel que vem da empresa | decisão 40; mf "O papel que o login da empresa traz" (ponto de partida) |
| Quem sai da empresa perde os apps | mf "A confirmação de tempos em tempos"; decisões 32, 37 e 48 |
| O owner e o administrador seguem com usuário e senha | decisões 24, 25, 55, 83 e 84 |
| O que chega em cada onda | mf "O que entra em cada onda"; decisões 3, 16, 23, 24, 85, 92, 95 e 98 |
| Nos bastidores | decisões 3, 16, 23, 32, 40, 86 e 90 |
| O que não faz | mf "O que não inclui"; decisões 9, 11, 23, 24, 50, 55, 60, 73 e 92 |
| Funcionalidades ligadas | mf "Depende de"; decisões 5, 9, 11, 85, 90 e 96 |
| Ainda em definição | mf "O que ainda falta decidir" |
| Perguntas frequentes | decisões 16, 23, 24, 32, 37, 55, 77 e 98 |

## O que as páginas declaram como "Ainda em definição"

| Mf | O que está em aberto |
|---|---|
| MF-101 | tentativas erradas e tempo de bloqueio; forma técnica da confirmação em dois passos; como nasce o acesso do primeiro administrador e o procedimento da instalação; fechar o endereço na hospedagem da Maind; renovação do passe com o pedido de permissão dos navegadores novos. |
| MF-102 | análise do pedido de uma pessoa excluída para apagar os próprios dados; forma técnica de guardar o registro sem alteração (chave, código de recuperação, nome de quem saiu); prazo do aviso da desinstalação; registro só-acréscimo e rápido; administrador escreve sem ler. |
| MF-103 | antecedência do aviso e duração da carência; validade e cancelamento do certificado do kit, forma técnica da conferência e da licença; o que mais vem no kit e o caminho seguro até o administrador; ambientes em que o mAIg roda e o que a Maind entrega para instalá-lo. |
| MF-104 | prazo do aviso da desinstalação; forma técnica de um mAIg novo conversar com um módulo antigo durante o adiamento; se o módulo chega no kit ou por outro caminho. |
| MF-105 | nomes dos bancos da lista; tempo e linhas máximos de cada consulta; forma técnica do teste de gravação; sugestão e refação das colunas sensíveis. |
| MF-106 | como o mAIg calcula o custo de cada pedido e a precisão frente à fatura; como o owner sabe quais modelos servem a cada app; quantas linhas são "poucas" e a forma técnica de separar dado de total. |
| MF-107 | separação por dentro além dos dois certificados; quando uma organização ganha instância só dela na hospedagem da Maind; volta à versão anterior numa atualização que falha; como a cópia é feita, restaurada e cifrada; o que fica de pé numa organização encerrada; tipo do certificado do endereço; prazo do aviso da desinstalação. |
| MF-108 | endereço exato da Maind que a TI libera e como ela sabe se mudar; compromisso de disponibilidade do ponto de conexão; o que conta como "em andamento" e como o mAIg o guarda; saída que passa por intermediário que inspeciona; quantos dias de quedas a página de status mostra. |
| MF-109 | forma técnica de isolar os módulos e quanto da máquina cada um usa; uma cópia do módulo para todas as organizações ou uma por organização; validade e proteção do cache; pedido quando o módulo para no meio; valor padrão do limite de pedidos. |
| MF-110 | desenho das telas do console; antecedência do aviso do fim de contrato, valor padrão do limite de pedidos, tentativas erradas e tempo de bloqueio; como nasce o acesso do primeiro administrador; procedimento quando nenhum administrador entra; tipo do certificado do endereço do mAIg. |
| MF-111 | liberação no núcleo ou por app; ferramenta nova após atualização do servidor; parte do retorno ao provedor de IA e camada; onde guardar a credencial; acesso da Maind ao servidor na hospedagem dela; peso no custo e no tempo; prova de que a ferramenta só lê. |
| MF-112 | provedor de identidade fora do ar; intervalo da confirmação com a empresa (ponto de partida 8 horas); levar a identidade da pessoa ao banco; padrão aceito e papel que vem da empresa. |
