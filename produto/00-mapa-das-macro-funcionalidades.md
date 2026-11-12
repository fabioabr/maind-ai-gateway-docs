# O mapa das macro funcionalidades do mAIg

> O mAIg tem 12 macro funcionalidades (mf): 10 na primeira versão e 2 na segunda. Este mapa diz quais são, para quem cada uma entrega valor, em que versão entra e do que depende, e liga cada uma às decisões do dono da Maind.

Situação: rascunho do PO para o dono da Maind revisar · Data: 08/11/2026 · Revisado em 12/11/2026

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
- **Prova de valor (proposta do PO; o dono da Maind ainda não a confirmou).** Uma demonstração: a TI de um cliente de segurança rígida instala o mAIg, libera só as saídas combinadas (a do nome único da Maind e a do provedor de IA da organização), e uma pessoa pergunta ao Horus sobre um banco interno e recebe a resposta, com o pedido anotado no registro, sem que nenhuma porta de entrada tenha sido aberta e sem que nenhum app tenha visto a senha do banco. Não há meta em número: o dono da Maind decidiu que os sinais dos objetivos vêm depois do primeiro cliente (decisão 18).
- **Em duas ondas (decisões 92 e 95).** A primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois. A onda 1.0 traz o mínimo para o Horus 2.0 sair: o login pelo mAIg, por usuário e senha e pela conta Google, e o passe; a ligação, com o pedido guardado por um tempo curto quando ela cai; as permissões; o cofre e o registro cifrados, com a consulta ao registro no console, o registro da instância e um auditor por organização, de dentro da empresa; a governança da IA inteira, com as chaves, os modelos, as camadas, o limite de gasto e o custo; o teto e o limite de pedidos; as assinaturas; várias organizações na mesma instância; a instalação do kit e do app, o handshake contratual e a licença; a ativação automática da organização e de cada app; a gestão dos owners da organização; os avisos de segurança, com destinatário fixo, e o painel de alertas; pausar, suspender e atualizar um app; a atualização do mAIg; a luz de estado; o cache dos painéis; e a cópia de segurança, com a restauração. A onda 1.1 traz a governança completa: o cockpit de ativação; o segundo auditor e o auditor de fora da empresa, com acesso que vence numa data; a cópia assinada do registro; retirar um app, apagar a configuração guardada de um app parado e desinstalar um app, com o aviso e o prazo; o encerramento de uma organização e a volta em 30 dias; o roteiro de saída do cliente; o acesso de suporte da Maind; a planilha e a consulta devolvida à tela, com a liberação das duas saídas; a página de status; as preferências de aviso e a lista "o que a organização permite"; as linhas "informadas pelo app"; e o cadastro das pessoas em lote. A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra. Na onda 1.0, nenhum app é retirado nem desinstalado, nenhuma organização é encerrada e nenhum registro é excluído. A onda de cada capacidade está em cada mf, no tópico "O que entra em cada onda". A estimativa item por item do arquiteto do mAIg continua depois do fechamento da documentação, e o item que não couber na onda 1.0 volta ao dono da Maind. Em 12/11/2026, com as decisões da arquitetura, entraram também na onda 1.0: a organização que nasce na Maind, no Gerenciador do mAIg, e chega à instância pelo setup, com a interface de setup e a instalação no estilo de um gerenciador de pacotes; os dois formatos do pacote, só com contêineres ou Kubernetes; o segundo caminho da ligação, com a troca automática; os cinco provedores de IA, com o custo informado ou estimado; e a chave da cópia de segurança (decisões 128 e 132; decisões 143 e 154; decisões 141 e 152). O Gerenciador do mAIg é uma peça do lado da Maind, e não uma mf.
- **Fica de fora.** Para a segunda versão: os servidores MCP, o login da empresa e a confirmação em dois passos; o fechamento da rede da instância da Maind fica para a segunda versão ou depois (decisão 92). Não entram na primeira versão, e não têm versão marcada: enviar o registro para sistemas de fora e os alertas automáticos de comportamento estranho (decisão 105); a retirada de um app no lugar do owner da organização (decisão 108); a leitura de fontes que não sejam bancos de tabelas consultados por SQL, e a gravação nos bancos (decisões 5 e 110); limites e modelos de IA diferentes por pessoa (decisão 96); a mudança de uma organização para outra instância ou hospedagem (decisão 117); o funcionamento sem a ligação com a Maind (decisão 122); e a regra de quem vê o quê dentro de um banco, pessoa a pessoa, que é de cada app (decisões 60 e 73). Também ficam de fora: apps de outras empresas e sistemas do próprio cliente (decisão 8); a venda com a marca de outra empresa (decisão 7); o preço em reais; um portal do cliente e a página pública de instruções (decisão 129); a entrega de uma máquina virtual pronta (decisão 142).

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

**O núcleo base.** Duas linhas da tabela, a da `MF-107` e a da `MF-108`, dizem "nenhuma", mas escondem um círculo. A organização nasce na Maind e chega à instância pelo setup (decisão 128): o certificado dela, emitido pela Maind (`MF-103`), chega pela ligação (`MF-108`), o gesto fica no registro (`MF-102`), e o mAIg cria o primeiro owner da organização (`MF-101`); encerrá-la retira os apps (`MF-104`). E a ligação só aceita a parte de fora de um app com certificado válido, que vem da contratação, enquanto a contratação corre pela ligação. Por isso a base da `MF-107`, a `MF-101`, a escrita do registro, a `MF-108` e a emissão dos certificados formam um núcleo base, construído junto (decisões 28, 29 e 31). Do mesmo jeito, instalar um app já é pôr o módulo para rodar, o que pede o ambiente da `MF-109`. A ordem dentro do núcleo base, e se esse ambiente se separa, é do arquiteto do mAIg.

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
| 83: a gestão dos owners da organização passa ao administrador da instância, e a troca vale na hora, com volta em 48 horas | `MF-101`, `MF-102`, `MF-103`, `MF-107`, `MF-110` |
| 84: há por enquanto três tipos de assento: membro e owner da organização, quantos a organização contratar, e administrador da instância, até três, sem custo | `MF-101`, `MF-107`, `MF-110`, `MF-112` |
| 85: os avisos de segurança (troca de owner, suspensão de app e atos sensíveis aos auditores) chegam sempre, e a organização não os desliga | `MF-102`, `MF-110`, `MF-104`, `MF-101` |
| 86: a chave privada de todo certificado do mAIg nasce nele e nunca sai; a Maind recebe e atesta só a chave pública | `MF-101`, `MF-103`, `MF-107`, `MF-108`, `MF-110` |
| 87: a cópia de recuperação da chave que cifra o registro e o cofre fica com a organização, nunca com a Maind | `MF-102`, `MF-105`, `MF-107`, `MF-101` |
| 88: toda versão do módulo de um app é assinada pela Maind e conferida pelo mAIg antes de instalar | `MF-104`, `MF-109`, `MF-110` |
| 89: cada organização tem um limite de pedidos, configurado pelo owner da organização, e um painel de alertas no console | `MF-109`, `MF-110`, `MF-102` |
| 90: a lista de saídas inclui o Google e o servidor de e-mail da empresa, por onde sai o e-mail; na hospedagem da Maind, o serviço de e-mail da Maind | `MF-108`, `MF-101`, `MF-110` |
| 91: na hospedagem da Maind, o banco do cliente aceita conexão só do endereço fixo da Maind, cifrada e com o usuário que só lê | `MF-105`, `MF-107`, `MF-108` |
| 92: a primeira versão do mAIg sai em duas ondas: a 1.0, o mínimo para o Horus 2.0, e a 1.1, a governança completa; a segunda versão vem depois, com o Horus 2.1 | as versões deste mapa, `MF-110` |
| 93: o resultado guardado para um painel abrir mais rápido é um cache, que não entra na cópia de segurança | `MF-109`, `MF-107` |
| 94: a Maind só para um app à mão por falta de pagamento depois dos avisos, incidente de segurança ou ordem judicial, com duas pessoas autorizando | `MF-103`, `MF-104`, `MF-102` |
| 95: o recorte completo da primeira versão: duas ondas, a 1.0 e a 1.1, e a segunda versão depois | `MF-101`, `MF-102`, `MF-103`, `MF-104`, `MF-105`, `MF-106`, `MF-107`, `MF-108`, `MF-109`, `MF-110` |
| 96: nove regras que as mfs traziam como proposta passam a valer como decisão | `MF-101`, `MF-102`, `MF-104`, `MF-106`, `MF-110` |
| 97: na onda 1.0, um auditor só, de dentro da empresa; o segundo e o de fora na onda 1.1 | `MF-101`, `MF-102`, `MF-110` |
| 98: dois jeitos de entrar na onda 1.0: usuário e senha e conta Google | `MF-101`, `MF-108`, `MF-110` |
| 99: senha esquecida: cada pessoa pede o próprio link; bloqueio depois de várias tentativas erradas | `MF-101`, `MF-102`, `MF-110` |
| 100: os administradores da instância cuidam uns dos outros, até três | `MF-101`, `MF-102`, `MF-110` |
| 101: o cadastro das pessoas em lote chega na onda 1.1 | `MF-101`, `MF-110` |
| 102: o registro da instância nasce com a instância, na onda 1.0 | `MF-102`, `MF-107`, `MF-110` |
| 103: o valor de um filtro aparece mascarado quando o filtro toca uma coluna sensível | `MF-102`, `MF-108`, `MF-109` |
| 104: a linha do registro "informada pelo app" só tem campos fixos | `MF-102`, `MF-103`, `MF-110` |
| 105: o registro não vai para sistemas de fora e não tem alerta de comportamento estranho | `MF-102` |
| 106: retirar, apagar a configuração guardada e desinstalar chegam juntos na onda 1.1 | `MF-102`, `MF-104`, `MF-110` |
| 107: toda desinstalação começa com um aviso de segurança, com prazo | `MF-102`, `MF-104`, `MF-107` |
| 108: ninguém retira um app no lugar do owner da organização | `MF-104` |
| 109: a regra de versão única é por prazo, para o mAIg e para o módulo de cada app | `MF-103`, `MF-104`, `MF-107`, `MF-108` |
| 110: a primeira versão só lê bancos de tabelas consultados por SQL, de uma lista única | `MF-105` |
| 111: o núcleo sugere as colunas sensíveis, e o owner da organização confere | `MF-101`, `MF-105`, `MF-109`, `MF-110` |
| 112: a governança da IA entra inteira na onda 1.0; o limite mede dinheiro, por app e por mês | `MF-106`, `MF-110` |
| 113: um total sobre poucas linhas conta como linha de dados | `MF-106` |
| 114: o encerramento de uma organização chega inteiro na onda 1.1 | `MF-107`, `MF-110` |
| 115: qualquer owner da organização pede a volta do encerramento, dentro dos 30 dias | `MF-101`, `MF-107`, `MF-110` |
| 116: a cópia de segurança leva a configuração inteira; a restauração devolve a instância como estava | `MF-102`, `MF-107`, `MF-110` |
| 117: a primeira versão não muda uma organização de instância nem de hospedagem | `MF-107` |
| 118: a saída do cliente é um roteiro, com os gestos que já existem | `MF-107`, `MF-110` |
| 119: o painel da instância mostra a instalação e, de cada organização, só contagens | `MF-101`, `MF-102`, `MF-107`, `MF-110` |
| 120: a TI do cliente escolhe o nome do endereço do mAIg e instala o certificado dele | `MF-101`, `MF-107`, `MF-110` |
| 121: a luz de estado entra na onda 1.0; a página de status, com login, na onda 1.1 | `MF-108`, `MF-109`, `MF-110` |
| 122: a primeira versão não tem modo sem ligação | `MF-107`, `MF-108` |
| 123: o que a instância manda à Maind: só o mínimo de operação | `MF-107`, `MF-108`, `MF-110` |
| 124: a resposta acima do teto é recusada inteira; a consulta acima do limite é interrompida | `MF-105`, `MF-109` |
| 125: o servidor de e-mail da empresa é configurado e testado na onda 1.0 | `MF-101`, `MF-107`, `MF-110` |
| 126: na onda 1.0, cada aviso tem destinatário fixo; as preferências chegam na onda 1.1 | `MF-102`, `MF-103`, `MF-105`, `MF-106`, `MF-108`, `MF-110` |
| 127: a Maind e o auditor de fora chegam ao console pela VPN, na onda 1.1 | `MF-101`, `MF-110` |
| 128: a organização nasce na Maind, no Gerenciador do mAIg, e chega à instância pela ligação | `MF-107`, `MF-101`, `MF-103`, `MF-110`, `MF-102` |
| 129: sem portal do cliente; a entrega é um PDF protegido por senha, ao e-mail oficial da organização | `MF-107` |
| 130: a senha do PDF vai por outro canal | `MF-107` |
| 131: o PDF traz as instruções e um código de ativação de uso único; nada instalável por e-mail | `MF-107`, `MF-103` |
| 132: o setup em cinco passos, com a interface de setup e a instalação no estilo de um gerenciador de pacotes | `MF-107`, `MF-101`, `MF-104`, `MF-108` |
| 133: a chave temporária é o código de ativação: uso único, vence, só é gasta quando a Maind entrega a organização | `MF-107`, `MF-108`, `MF-103` |
| 134: o setup instala o núcleo e os apps contratados no dia, sem PDF nem clique por app | `MF-103`, `MF-104`, `MF-102` |
| 135: instalado não é liberado; o owner da organização libera e configura cada app | `MF-104`, `MF-103` |
| 136: o e-mail do primeiro owner da organização vem da Maind, e o mAIg cria o usuário dele no fim do setup | `MF-101`, `MF-107` |
| 137: o app autorizado depois do setup aparece como "app autorizado", e o administrador da instância clica em instalar | `MF-104`, `MF-103`, `MF-110` |
| 138: o kit não traz certificado pronto; a chave do app nasce no mAIg, e o kit vira uma entrada do manifesto | `MF-103`, `MF-108` |
| 139: cada app tem duas identidades, a do módulo e a da parte de fora, atestadas pela Maind | `MF-103`, `MF-108` |
| 140: um endereço só na rede do cliente, com o nome e o certificado que a TI escolhe | `MF-101`, `MF-107`, `MF-110` |
| 141: cinco provedores de IA na primeira versão, sempre com a chave da empresa | `MF-106`, `MF-108` |
| 142: o mAIg é um pacote pronto em contêiner, e atualizar é trocar a caixa | `MF-107`, `MF-104` |
| 143: o mAIg roda em qualquer lugar, dos dois lados: máquina virtual, VPS, Kubernetes ou só contêineres; o Kubernetes entra na onda 1.0 | `MF-107` |
| 144: no Kubernetes, o núcleo manda o cluster trocar a caixa, depois do aval e dentro da janela | `MF-107`, `MF-104`, `MF-101` |
| 145: num cluster sem política de rede, o núcleo entra e nenhum módulo entra até a política valer; o diagnóstico é do núcleo | `MF-107`, `MF-109`, `MF-104`, `MF-110` |
| 146: as peças do lado da Maind ficam num ambiente próprio, separado da nuvem dos apps e das instâncias | `MF-107`, `MF-108` |
| 147: o lado da Maind roda na mesma nuvem pública do primeiro app, numa conta separada | o lado da Maind (não é uma mf) |
| 148: as chaves da Maind ficam num cofre portátil, com a raiz fora de linha e duas pessoas | `MF-103` |
| 149: um nome só da Maind, com IP fixo, na porta 443, com a ligação e o registro de imagens atrás dele | `MF-108` |
| 150: o e-mail da hospedagem da Maind sai por um serviço que fala SMTP, escolhido na implantação | o lado da Maind (não é uma mf) |
| 151: as instâncias hospedadas pela Maind rodam num Kubernetes gerenciado, um namespace por instância | `MF-107` |
| 152: a cópia de segurança da instância tem uma chave da cópia, mostrada uma vez e guardada por quem opera a máquina | `MF-107` |
| 153: o custo da IA é o informado pelo provedor ou "estimado" pela tabela da Maind; o limite trava pelo número que aparece | `MF-106` |
| 154: a ligação tem dois caminhos já na onda 1.0, com a troca automática | `MF-108` |
| 155: o console usa o design system da casa, que vira um pacote próprio da Maind | `MF-110` |

As decisões 95 a 127 foram tomadas em 11/11/2026 por um decisor, por delegação do dono da Maind, no fechamento da primeira versão. Elas valem como as outras, e o dono da Maind pode rever qualquer uma.

As decisões 128 a 155 são do próprio dono da Maind, em 12/11/2026, ao responder às dúvidas da arquitetura do mAIg; a decisão antiga que uma delas muda recebeu uma nota no README, e o texto dela segue como foi escrito.

## O que não virou mf, e por quê

São partes de uma mf, e não valor com vida própria:

- o **estado e as versões** de cada instância, que o administrador da instância vê: parte da `MF-107`;
- a **compatibilidade entre versões** do mAIg e dos apps: parte da `MF-104`;
- o **aviso de fim de contrato**: parte da `MF-103`;
- a **luz de estado e a página de status** que cada app mostra: são do mAIg, iguais para todos os apps, e parte da `MF-108` (decisão 70); a luz entra na onda 1.0, e a página, na onda 1.1 (decisão 121);
- a **atualização do próprio mAIg**: parte da `MF-107`;
- a **interface de setup**, a tela de configuração inicial que vem no pacote do mAIg, e o **Gerenciador do mAIg**, o cockpit da Maind para controlar e cobrar os clientes: a interface de setup é parte da `MF-107`, e o Gerenciador é uma peça do lado da Maind, que não é uma mf (decisões 128 e 132).

## O que ainda está em aberto

- Como medir cada objetivo: fica para depois do primeiro cliente (decisão 18). O dono da Maind decide.
- Quais apps entram depois do Horus e em que ordem. O Maind Doc é só um exemplo. O dono da Maind decide.
- O preço em reais e como a Maind reparte o custo do mAIg entre os apps (decisão 17). O dono da Maind, com o comercial, decide.
- A estimativa, item por item, do que cabe na onda 1.0 e na onda 1.1 (decisão 92). O recorte está fechado na documentação (decisão 95). A estimativa do arquiteto do mAIg continua depois desse fechamento, sem segurá-lo, e o item que não couber na onda 1.0 volta ao dono da Maind.

Os pontos que pertencem a uma mf ficam descritos por inteiro nela, na seção "O que ainda falta decidir". Os 46 pontos das 12 mfs estão listados, com as decisões que o PO tomou ao escrevê-las, em [`decisoes-do-po-para-discutir.md`](decisoes-do-po-para-discutir.md).

## Relação com a documentação do Horus

A documentação do Horus está pausada por decisão do dono da Maind. Quando ela voltar, o PO leva ao Horus o que mudou: a `MF-121` do Horus (o middleware) vira o mAIg inteiro; a `MF-124` do Horus (os servidores MCP) vira a `MF-111` do mAIg; e as partes da administração da instância, das pessoas, dos bancos e da IA que o Horus tinha em outras mfs passam ao mAIg, o que o PO confere mf por mf nesse trabalho.
