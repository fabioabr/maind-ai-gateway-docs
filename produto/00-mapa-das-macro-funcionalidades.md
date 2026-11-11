# O mapa das macro funcionalidades do mAIg

> O mAIg tem 12 macro funcionalidades (mf): 10 na primeira versão e 2 na segunda. Este mapa diz quais são, para quem cada uma entrega valor, em que versão entra e do que depende, e liga cada uma às decisões do dono da Maind.

Situação: rascunho do PO para o dono da Maind revisar · Data: 08/11/2026 · Revisado em 10/11/2026

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
- **Prova de valor (proposta do PO; o dono da Maind ainda não a confirmou).** Uma demonstração: a TI de um cliente de segurança rígida instala o mAIg, libera só as saídas combinadas (a da Maind e a do provedor de IA da organização), e uma pessoa pergunta ao Horus sobre um banco interno e recebe a resposta, com o pedido anotado no registro, sem que nenhuma porta de entrada tenha sido aberta e sem que nenhum app tenha visto a senha do banco. Não há meta em número: o dono da Maind decidiu que os sinais dos objetivos vêm depois do primeiro cliente (decisão 18).
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
| `MF-107` Organizações e instâncias | (nenhuma; ver o núcleo base) | é a base: quase tudo no mAIg é por organização |
| `MF-101` Segurança e permissões | `MF-107` | as permissões são de cada organização |
| `MF-102` Registro e auditoria | `MF-101`, `MF-107` | o registro diz quem pediu, e cada organização tem o seu |
| `MF-110` Console de configuração | `MF-101`, `MF-107` | só quem tem permissão configura, e cada um a sua organização |
| `MF-108` Conexão de dentro para fora | (nenhuma; ver o núcleo base) | é a ligação com a Maind, de que a contratação precisa |
| `MF-103` Contratação dos apps | `MF-108`, `MF-107` | o handshake contratual corre pela conexão, e a contratação é por organização |
| `MF-104` Gestão dos apps | `MF-103`, `MF-101`, `MF-107`, `MF-110`, `MF-102` | só se instala o que foi contratado, por quem pode, pelo console, e desinstalar exclui o registro |
| `MF-109` Execução isolada dos apps | `MF-104` | o módulo só roda depois de o app instalado |
| `MF-105` Bancos da empresa | `MF-101`, `MF-102`, `MF-104`, `MF-110` | o acesso é permitido, registrado, configurado no console e vale para um app liberado |
| `MF-106` Governança da IA | `MF-101`, `MF-102`, `MF-104`, `MF-110` | idem |
| `MF-111` Servidores MCP | `MF-101`, `MF-102`, `MF-104`, `MF-105`, `MF-106`, `MF-110` | é mais um recurso da empresa que um app usa, sob as mesmas regras, e é no pedido à IA que se decide quais ferramentas o modelo vê |
| `MF-112` Login da empresa | `MF-101`, `MF-110` | é mais uma mecânica de login, ligada no console |

Quase toda mf tem uma tela no console (`MF-110`). A dependência do console só é declarada onde a configuração principal acontece nele: a gestão dos apps, os bancos, a IA e os servidores MCP.

**O núcleo base.** Duas linhas da tabela, a da `MF-107` e a da `MF-108`, dizem "nenhuma", mas escondem um círculo. Criar uma organização pede o certificado dela, emitido pela Maind (`MF-103`), que chega pela ligação (`MF-108`), anota o ato no registro (`MF-102`) e cria o primeiro owner da organização (`MF-101`); encerrá-la retira os apps (`MF-104`). E a ligação só aceita a parte de fora de um app com certificado válido, que vem da contratação, enquanto a contratação corre pela ligação. Por isso a base da `MF-107`, a `MF-101`, a escrita do registro, a `MF-108` e a emissão dos certificados formam um núcleo base, construído junto (decisões 28, 29 e 31). Do mesmo jeito, instalar um app já é pôr o módulo para rodar, o que pede o ambiente da `MF-109`. A ordem dentro do núcleo base, e se esse ambiente se separa, é do arquiteto do mAIg.

## De onde vem cada mf: as decisões do dono da Maind

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
| 19: o pedido à IA sai direto para o provedor, por saídas liberadas uma a uma | `MF-106`, `MF-108` |
| 20: o owner da organização escolhe até que camada de dados o pedido ao provedor pode levar | `MF-106`, `MF-102`, `MF-110` |
| 21: um app só sai da instância sem organizações, com aviso e cópia do registro | `MF-104`, `MF-102` |
| 22: a chave de IA é sempre do cliente | `MF-106` |
| 23: as pessoas que usam os apps ficam no núcleo do mAIg, para todos os apps | `MF-101`, `MF-102`, `MF-110`, `MF-112` |
| 24: o owner da organização e o administrador da instância entram sempre por usuário e senha | `MF-101`, `MF-110`, `MF-112` |
| 25: uma organização pode ter até três owners, todos por usuário e senha | `MF-101`, `MF-107`, `MF-110`, `MF-112` |
| 26: o console se alcança só de dentro da rede do cliente, e de fora pela VPN da empresa | `MF-110`, `MF-108` |
| 27: as linhas do registro de uma pessoa excluída seguem com o nome até a desinstalação do app | `MF-102`, `MF-101`, `MF-110` |
| 28: cada organização tem também um certificado próprio, além do kit de cada app | `MF-107`, `MF-103`, `MF-109`, `MF-110` |
| 29: os atos do administrador da instância que tocam uma organização também são anotados no registro dela | `MF-102`, `MF-104`, `MF-107`, `MF-110` |
| 30: o mAIg se atualiza sozinho, dentro de uma janela de horário que o administrador da instância define | `MF-107`, `MF-104`, `MF-108`, `MF-110` |
| 31: uma organização não é excluída, é encerrada, e o registro dela segue legível até o app ser desinstalado | `MF-107`, `MF-102`, `MF-104`, `MF-110` |
| 32: o login começa no endereço do mAIg, e a nuvem dos apps confia só no passe que o mAIg assina | `MF-101`, `MF-108`, `MF-112` |
| 33: a nuvem dos apps fala com o mAIg só pela ligação que o mAIg abre, a mesma para todas as pessoas | `MF-108`, `MF-101` |
| 34: a resposta pronta volta à nuvem do app | `MF-109`, `MF-108` |
| 35: a nuvem do app guarda a receita, nunca o resultado, e o que se guarda para abrir mais rápido fica no mAIg | `MF-109`, `MF-108` |
| 36: a promessa de que a nuvem não guarda a resposta se prova com auditoria de fora e regras técnicas | `MF-109` |
| 37: o passe dura 15 minutos e se renova pelo mAIg | `MF-101`, `MF-112` |
| 38: a ligação entre o mAIg e a Maind é feita pela própria Maind, sem serviço de outra empresa | `MF-108` |
| 39: o mAIg baixa a versão nova sozinho, mas só a instala com o aval da TI do cliente | `MF-107`, `MF-104`, `MF-108`, `MF-110` |
| 40: o login começa pelo app e usa o jeito de entrar configurado no mAIg, e o papel vale por app | `MF-101`, `MF-112` |
| 41: a ligação com a Maind é requisito para o mAIg funcionar de ponta a ponta, e criar uma organização exige a ligação de pé | `MF-107`, `MF-108` |
| 42: uma tarefa marcada roda com um passe de agendamento, guardado só no mAIg | `MF-101`, `MF-108` |
| 43: a resposta que volta à nuvem tem um teto por app, de 200 linhas, com as colunas sensíveis mascaradas | `MF-109`, `MF-102`, `MF-110` |
| 44: o certificado da organização vale 30 dias, se renova sozinho e nunca para sem aviso | `MF-103`, `MF-101`, `MF-107` |
| 45: a TI do cliente adia uma versão nova do mAIg por até 30 dias, e uma correção de segurança por até 7; depois, os apps recusam a conversa | `MF-107`, `MF-104`, `MF-108`, `MF-110` |
| 46: o administrador da instância suspende um app na instância inteira, numa emergência, sem apagar a configuração nem o registro | `MF-104`, `MF-102`, `MF-107`, `MF-109`, `MF-110` |
| 47: numa instância da Maind, a equipe da Maind define a janela de atualização do mAIg, avisa o owner de cada organização antes e anota no registro | `MF-107`, `MF-102`, `MF-110` |
| 48: na hospedagem da Maind, o mAIg roda em máquinas separadas da nuvem dos apps e, por enquanto, com o endereço aberto na internet | `MF-107`, `MF-101`, `MF-108` |
| 49: a visão diz de quem o mAIg protege, e de quem não, inclusive a própria Maind, com o risco aceito de cada um | a visão, `MF-102` |
| 50: a confirmação em dois passos chega na segunda versão do mAIg, e é configurável | `MF-101` |
| 51: o link de primeiro acesso do owner da organização vai direto do mAIg ao e-mail dele, e quem cria o usuário nunca o vê | `MF-101`, `MF-102`, `MF-107`, `MF-110` |
| 52: qualquer owner da organização retira outro, sozinho, com aviso ao retirado e ao auditor | `MF-101`, `MF-102` |
| 53: uma organização sem nenhum owner com acesso é destravada pelo administrador da instância, com espera de 48 horas e aviso | `MF-101`, `MF-102`, `MF-110` |
| 54: os atos sensíveis do owner da organização avisam na hora os outros owners e o auditor, sem pedir aprovação | `MF-102`, `MF-105`, `MF-106`, `MF-109`, `MF-110` |
| 55: a senha própria do owner da organização e do administrador da instância abre só o console; para os apps, o owner entra como qualquer pessoa | `MF-101`, `MF-112`, `MF-110` |
| 56: a identidade, a licença e a carência de cada app viram três peças: um certificado curto, uma licença assinada e a autoridade pública só no endereço da Maind | `MF-103`, `MF-104`, `MF-108`, `MF-102`, `MF-109` |
| 57: o registro e o cofre de cada organização ficam cifrados, com uma chave que quem opera a máquina não alcança | `MF-102`, `MF-105`, `MF-107` |
| 58: o registro guarda a consulta feita e quantas linhas voltaram, e da IA a camada e a descrição, nunca os dados nem a resposta | `MF-102`, `MF-105`, `MF-106`, `MF-111` |
| 59: os apps podem anotar no registro o que acontece só dentro deles, com a linha marcada como "informada pelo app" | `MF-102`, `MF-109` |
| 60: a visão diz o que o núcleo garante sozinho e o que depende de cada app | a visão, `MF-109` |
| 61: o "só leitura" tem duas travas, o usuário do banco que só lê, testado no cadastro, e o mAIg, e cada consulta tem limite de tempo e de linhas | `MF-105`, `MF-110` |
| 62: um pedido à IA que leva mais do que a camada do app permite é recusado inteiro, com mensagem clara e linha no registro | `MF-106`, `MF-102` |
| 63: o módulo de um app nunca sai para a internet por conta própria; a pesquisa na web vai pelo provedor de IA | `MF-109`, `MF-106`, `MF-108` |
| 64: os avisos chegam também por e-mail, sem dado nenhum; a organização diz quais papéis podem receber, e cada pessoa escolhe dentro do permitido | `MF-110`, `MF-102`, `MF-101` |
| 65: quem opera a máquina faz a cópia de segurança do cofre e do registro, cifrada, com a ferramenta do mAIg na casa do cliente | `MF-107`, `MF-102`, `MF-105`, `MF-110` |
| 66: uma pessoa que está em duas organizações tem duas contas, uma em cada, e o mesmo e-mail pode se repetir | `MF-101`, `MF-112`, `MF-107` |
| 67: só o owner da organização cadastra a senha de um banco, e a TI do cliente não ganha um papel próprio | `MF-105`, `MF-101` |
| 68: o owner da organização libera um acesso de suporte por tempo limitado, só à configuração, anotado e com aviso ao auditor | `MF-110`, `MF-102`, `MF-101` |
| 69: um pedido em andamento quando a ligação cai fica guardado por um tempo curto, como 15 minutos, e depois é descartado | `MF-108`, `MF-109` |
| 70: a luz de estado e a página de status são do mAIg, iguais para todos os apps, e a página mostra o estado de todos os apps instalados | `MF-108`, `MF-104`, `MF-110` |
| 71: quando algo para e não volta sozinho, o aviso vai para quem resolve: a ligação, a quem cuida da instância e à Maind; o banco e a IA, ao owner da organização | `MF-108`, `MF-105`, `MF-106` |
| 72: a organização fica ativa sozinha com o certificado e um owner com acesso, cada app tem as condições dele, e um cockpit mostra o que falta | `MF-107`, `MF-104`, `MF-110` |
| 73: a permissão de um app vale pelo banco inteiro, e o recorte se faz com um usuário mais restrito no próprio banco | `MF-105`, `MF-110` |
| 74: além da resposta pronta, só sai o que o owner da organização liberar: a consulta, pela nuvem, e a planilha, direto do mAIg ao navegador | `MF-109`, `MF-102`, `MF-110` |
| 75: o limite de gasto de IA de cada app avisa o owner da organização em 80% e trava em 100%, até ele subir o limite | `MF-106`, `MF-110` |
| 76: por padrão, o Horus trabalha na camada 1, e a IA não vê os números; só a Análise avançada manda dados à IA, se a camada do app permitir | `MF-106`, `MF-109` |
| 77: só o owner da organização cadastra as pessoas, direto no console; não há convite de dentro dos apps | `MF-110`, `MF-101` |
| 78: o encerramento de uma organização é pedido pelo owner dela ou pela Maind, executado pelo administrador da instância e tem volta por 30 dias | `MF-107`, `MF-110`, `MF-102` |
| 79: uma organização pode ter até dois auditores, e um deles pode ser de fora, com um acesso que vence numa data | `MF-101`, `MF-102`, `MF-110` |
| 80: o owner da organização e os auditores podem baixar a cópia do registro, num arquivo assinado pelo mAIg | `MF-102`, `MF-104` |
| 81: a instância tem um registro próprio, onde só se acrescenta, para os atos que não tocam organização nenhuma, como desinstalar um app | `MF-102`, `MF-104`, `MF-107` |
| 82: instalar o kit de uma organização entra no registro dela | `MF-102`, `MF-103`, `MF-110` |

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

Os pontos que pertencem a uma mf ficam descritos por inteiro nela, na seção "O que ainda falta decidir". Os 51 pontos das 12 mfs estão listados, com as decisões que o PO tomou ao escrevê-las, em [`decisoes-do-po-para-discutir.md`](decisoes-do-po-para-discutir.md).

## Relação com a documentação do Horus

A documentação do Horus está pausada por decisão do dono da Maind. Quando ela voltar, o PO leva ao Horus o que mudou: a `MF-121` do Horus (o middleware) vira o mAIg inteiro; a `MF-124` do Horus (os servidores MCP) vira a `MF-111` do mAIg; e as partes da administração da instância, das pessoas, dos bancos e da IA que o Horus tinha em outras mfs passam ao mAIg, o que o PO confere mf por mf nesse trabalho.
