# O mapa das macro funcionalidades do mAIg

> O mAIg tem 12 macro funcionalidades (mf): 10 na primeira versão e 2 na segunda. Este mapa diz quais são, para quem cada uma entrega valor, em que versão entra e do que depende, e liga cada uma às decisões do dono da Maind.

Situação: rascunho do PO para o dono da Maind revisar · Data: 08/11/2026

## O que é uma macro funcionalidade

Uma macro funcionalidade, ou mf, é uma capacidade do produto que entrega um resultado a alguém. Ela não é uma tela, uma tarefa de programação nem uma peça técnica. O nome de cada mf diz o resultado, na linguagem de quem ganha: "Usar os bancos da empresa sem expor a senha", e não "Cofre de credenciais".

Cada mf tem um número fixo, que nunca é reaproveitado, e se cita sempre como `MF-nnn:Nome`. A numeração do mAIg é própria e começa em `MF-101`. Quando um texto do mAIg cita uma mf do Horus, escreve "do Horus" depois do número ("a `MF-121` do Horus"), porque os dois produtos têm documentações separadas e números que podem coincidir.

Cada mf é descrita no mesmo formato: quem ganha, a decisão que passa a ser possível (ou a dor que some), como funciona, a prova de valor, o retorno para o negócio, o que não inclui e do que depende. Quem decide **como construir** cada uma é o arquiteto do mAIg, e isso fica fora deste mapa.

## O mapa

| Nº | Macro funcionalidade (o resultado) | Quem ganha | Versão | Classe |
| --- | --- | --- | --- | --- |
| [`MF-101`](mfs/mf-101-seguranca-e-permissoes.md) | **Entrar e agir só dentro do que foi permitido** | TI do cliente, owner da organização, pessoa que usa o app | 1ª | essencial |
| [`MF-102`](mfs/mf-102-registro-e-auditoria.md) | **Saber quem pediu o quê, quando e com que dado** | auditor, owner da organização | 1ª | essencial |
| [`MF-103`](mfs/mf-103-contratacao-dos-apps.md) | **Contratar e liberar um app com segurança** | equipe da Maind, administrador da instância, owner da organização | 1ª | essencial |
| [`MF-104`](mfs/mf-104-gestao-dos-apps.md) | **Instalar, pausar e retirar apps sem refazer nada** | administrador da instância, owner da organização | 1ª | essencial |
| [`MF-105`](mfs/mf-105-bancos-da-empresa.md) | **Usar os bancos da empresa sem expor a senha** | TI do cliente, owner da organização | 1ª | essencial |
| [`MF-106`](mfs/mf-106-governanca-da-ia.md) | **Controlar quais IAs, quanto e a que custo** | owner da organização | 1ª | essencial |
| [`MF-107`](mfs/mf-107-organizacoes-e-instancias.md) | **Atender várias organizações numa instalação, sem misturá-las** | equipe da Maind, administrador da instância | 1ª | essencial |
| [`MF-108`](mfs/mf-108-conexao-de-dentro-para-fora.md) | **Funcionar sem abrir porta de entrada na rede** | TI do cliente | 1ª | essencial |
| [`MF-109`](mfs/mf-109-execucao-isolada-dos-apps.md) | **Rodar cada app isolado dentro do mAIg** | TI do cliente, apps da Maind | 1ª | essencial |
| [`MF-110`](mfs/mf-110-console-de-configuracao.md) | **Configurar tudo num lugar só** | owner da organização, administrador da instância | 1ª | essencial |
| [`MF-111`](mfs/mf-111-servidores-mcp.md) | **Dar à IA as ferramentas da empresa, só para leitura** | owner da organização | 2ª | expande |
| [`MF-112`](mfs/mf-112-login-da-empresa.md) | **Entrar com o login que a empresa já usa** | TI do cliente | 2ª | acelera |

A classe diz o peso da mf para a versão: **essencial** é a que, sem ela, a versão não entrega a promessa; **acelera** aumenta o valor ou a adoção; **expande** amplia o público ou os casos de uso.

## As duas versões

### A primeira versão (`MF-101` a `MF-110`)

- **Promessa.** A TI de um cliente aprova o mAIg uma vez, sem abrir o banco nem uma porta de entrada na rede, e o primeiro app da Maind, o Horus, passa a funcionar sobre os dados e a IA da empresa, com o controle e o registro nas mãos do cliente.
- **Público.** O cliente do Horus cuja TI exige segurança rígida, e a própria Maind, que hospeda o mAIg para os clientes que preferem não instalar nada.
- **Quando sai.** Junto com a versão 2.0 do Horus, no mesmo planejamento que o Horus tinha para o middleware (decisão 16).
- **Prova de valor (proposta do PO; o dono ainda não a confirmou).** Uma demonstração: a TI de um cliente de segurança rígida instala o mAIg, libera só a saída para a Maind, e uma pessoa pergunta ao Horus sobre um banco interno e recebe a resposta, com o pedido anotado no registro, sem que nenhuma porta de entrada tenha sido aberta e sem que nenhum app tenha visto a senha do banco. Não há meta em número: o dono decidiu que os sinais dos objetivos vêm depois do primeiro cliente (decisão 18).
- **Fica de fora.** Os servidores MCP e o login da empresa (segunda versão); apps de outras empresas e sistemas do próprio cliente (decisão 8); a venda com a marca de outra empresa (decisão 7); o preço em reais.

As dez mfs são essenciais, porque cada uma sustenta um pedaço da promessa: sem a segurança (`MF-101`) e o registro (`MF-102`) não há controle; sem a contratação (`MF-103`) e a gestão dos apps (`MF-104`) o Horus não entra; sem os bancos (`MF-105`) e a IA (`MF-106`) não há o que governar; sem as organizações (`MF-107`) o mAIg não atende a hospedagem da Maind; sem a conexão para fora (`MF-108`) a TI recusa; sem a execução isolada (`MF-109`) o ciclo da IA do Horus não roda dentro da casa do cliente; e sem o console (`MF-110`) ninguém configura nada.

### A segunda versão (`MF-111` e `MF-112`)

- **Promessa.** O mAIg passa a dar à IA as ferramentas que a empresa já tem e a aceitar o login que a empresa já usa.
- **Público.** Os clientes que já usam o mAIg com o Horus e querem ir além dos bancos, ou que não aceitam um login separado.
- **Quando sai.** Junto com a versão 2.1 do Horus, que é quando o Horus passa a usá-las (decisão 16).
- **Prova de valor (proposta do PO).** O owner da organização cadastra um servidor de ferramentas da empresa e uma pessoa entra no Horus com o login da empresa, sem criar uma senha nova.
- **Por que ficam para depois.** Nenhum app as usa na primeira versão. Construí-las agora atrasaria a versão 2.0 do Horus por partes que ele só usa na 2.1.

## Do que cada mf depende

A ordem em que o arquiteto do mAIg constrói é dele. A restrição que vem do produto são as dependências abaixo, em termos de negócio.

| A mf | depende de | porque |
| --- | --- | --- |
| `MF-107` Organizações e instâncias | (nenhuma) | é a base: quase tudo no mAIg é por organização |
| `MF-101` Segurança e permissões | `MF-107` | as permissões são de cada organização |
| `MF-102` Registro e auditoria | `MF-101`, `MF-107` | o registro diz quem pediu, e cada organização tem o seu |
| `MF-110` Console de configuração | `MF-101`, `MF-107` | só quem tem permissão configura, e cada um a sua organização |
| `MF-108` Conexão de dentro para fora | (nenhuma) | é a ligação com a Maind, de que a contratação precisa |
| `MF-103` Contratação dos apps | `MF-108`, `MF-107` | o handshake contratual corre pela conexão, e a contratação é por organização |
| `MF-104` Gestão dos apps | `MF-103`, `MF-101`, `MF-107`, `MF-110`, `MF-102` | só se instala o que foi contratado, por quem pode, pelo console, e desinstalar exclui o registro |
| `MF-109` Execução isolada dos apps | `MF-104` | o módulo só roda depois de o app instalado |
| `MF-105` Bancos da empresa | `MF-101`, `MF-102`, `MF-104`, `MF-110` | o acesso é permitido, registrado, configurado no console e vale para um app liberado |
| `MF-106` Governança da IA | `MF-101`, `MF-102`, `MF-104`, `MF-110` | idem |
| `MF-111` Servidores MCP | `MF-101`, `MF-102`, `MF-104`, `MF-105`, `MF-106`, `MF-110` | é mais um recurso da empresa que um app usa, sob as mesmas regras, e é no pedido à IA que se decide quais ferramentas o modelo vê |
| `MF-112` Login da empresa | `MF-101`, `MF-110` | é mais uma mecânica de login, ligada no console |

Quase toda mf tem uma tela no console (`MF-110`). A dependência do console só é declarada onde a configuração principal acontece nele: a gestão dos apps, os bancos, a IA e os servidores MCP.

## De onde vem cada mf: as 18 decisões

| Decisão do dono da Maind | Onde ela vira mf |
| --- | --- |
| 1 e 2: o nome e o produto à parte | o produto todo (não é uma mf) |
| 3: plataforma de apps com um núcleo nativo | `MF-101`, `MF-102`, `MF-103`, `MF-104` |
| 4: o app em duas partes | `MF-104`, `MF-109` |
| 5: dados e IA também são nativos | `MF-105`, `MF-106`, `MF-111` |
| 6: o mAIg liga para fora | `MF-108` |
| 7: marca Maind, sem white label por enquanto | o produto todo |
| 8: só apps da Maind | `MF-104` (quem pode ser app) |
| 9: várias organizações por instância | `MF-107` |
| 10: a Maind libera por certificado, depois dois passos | `MF-103`, `MF-104` |
| 11: a contratação é por organização | `MF-103`, `MF-107` |
| 12: o registro é do owner e do auditor | `MF-102`, `MF-101` |
| 13: o fim do contrato | `MF-103` |
| 14: a configuração de um app parado fica guardada | `MF-104` |
| 15: o registro fica enquanto o app estiver instalado | `MF-102`, `MF-104` |
| 16: a primeira versão | as duas versões deste mapa |
| 17: o mAIg vem embutido no preço dos apps | o retorno para o negócio de cada mf |
| 18: os sinais vêm depois do primeiro cliente | a prova de valor de cada mf |

## O que não virou mf, e por quê

São partes de uma mf, e não valor com vida própria:

- o **estado e as versões** de cada instância, que o administrador da instância vê: parte da `MF-107`;
- a **compatibilidade entre versões** do mAIg e dos apps: parte da `MF-104`;
- o **aviso de fim de contrato**: parte da `MF-103`;
- a **luz de estado e a página de status** que o Horus mostra: são do app, e não do mAIg;
- a **atualização do próprio mAIg**: parte da `MF-107`.

## O que ainda está em aberto

- Como medir cada objetivo: fica para depois do primeiro cliente (decisão 18). O dono da Maind decide.
- Quais apps entram depois do Horus e em que ordem. O Maind Doc é só um exemplo. O dono da Maind decide.
- O preço em reais e como a Maind reparte o custo do mAIg entre os apps (decisão 17). O dono da Maind, com o comercial, decide.

Os pontos que pertencem a uma mf ficam descritos por inteiro nela, na seção "O que ainda falta decidir". Os 62 pontos das 12 mfs estão listados, com as decisões que o PO tomou ao escrevê-las, em [`decisoes-do-po-para-discutir.md`](decisoes-do-po-para-discutir.md).

## Relação com a documentação do Horus

A documentação do Horus está pausada por decisão do dono da Maind. Quando ela voltar, o PO leva ao Horus o que mudou: a `MF-121` do Horus (o middleware) vira o mAIg inteiro; a `MF-124` do Horus (os servidores MCP) vira a `MF-111` do mAIg; e as partes da administração da instância, das pessoas, dos bancos e da IA que o Horus tinha em outras mfs passam ao mAIg, o que o PO confere mf por mf nesse trabalho.
