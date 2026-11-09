# MF-101:Entrar e agir só dentro do que foi permitido

> O mAIg confere quem está chegando, pessoa ou app, e o que cada um pode fazer. Cada papel vê e faz só o que é dele, e nenhum pedido de um app é atendido sem a permissão de quem responde pela organização.

**Também chamada de:** Segurança e permissões · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg confere quem é cada pessoa e cada app que chega até ele e só deixa cada um fazer o que foi permitido, do mesmo jeito para todos os apps.

O mAIg, ou Maind AI Gateway, fica entre os produtos da Maind, chamados apps, e os dados e a inteligência artificial (IA) da empresa cliente. O primeiro app é o Maind Horus, em que as pessoas perguntam sobre os dados da empresa.

O mAIg guarda o que a empresa tem de mais sensível: as senhas dos bancos de dados, as chaves de acesso à IA e o registro do que os apps pediram. Sem uma portaria firme, o resto perde o sentido. Por isso a segurança e as permissões fazem parte do núcleo nativo, os serviços que vêm prontos no mAIg e servem a todos os apps (decisão 3).

## Quem ganha

- **TI do cliente**, a equipe de tecnologia da empresa cliente. Aprova uma portaria só, a do mAIg, em vez de uma por app, e sabe que cada pedido é conferido antes de ser atendido.
- **Owner da organização**, a pessoa que responde pela organização no mAIg. Decide quem entra, quem usa cada app, o que cada app pode pedir e quem confere tudo. Entra com uma senha que só ele conhece.
- **Pessoa que usa o app**, quem trabalha com o app no dia a dia; no Horus, a pessoa que pergunta. Entra com usuário e senha ou com a conta Google e nunca lida com senha de banco nem com chave de IA.

## A decisão que passa a ser possível

- **A TI do cliente passa a poder dizer sim ao mAIg** sabendo que cada pessoa e cada app são conferidos na entrada, e cada pedido de novo antes de ser atendido.
- **O owner da organização passa a poder liberar um app novo** dizendo ele mesmo o que o app pode pedir, sem entregar senha nenhuma ao app nem à Maind.
- **A dor que some:** cada app novo deixa de trazer um jeito próprio de dar permissão aos dados e à IA, que a TI do cliente teria de aprovar e vigiar app por app.

## Como funciona

### Autenticação e autorização: as duas perguntas da portaria

**Em resumo:** antes de atender alguém, o mAIg faz duas perguntas. A autenticação pergunta "quem está chegando?". A autorização pergunta "o que essa pessoa ou esse app pode fazer?".

**Quem é quem.**

- **Autenticação** é conferir que alguém é quem diz ser. Para uma pessoa, é o login, a entrada no sistema. Para um app, é o certificado, uma espécie de carteira de identidade digital que a Maind emite para cada app contratado (MF-103).
- **Autorização** vem depois: sabendo quem é, o mAIg confere o que pode ser feito.
- **Uma permissão** é cada item do que se pode fazer, como "o Horus pode ler o banco de vendas".
- **Um papel** é um conjunto pronto de permissões, dado a uma pessoa. O mAIg tem quatro.
- **As configurações de segurança** são as regras gerais da organização, como os jeitos de entrar ligados. Ficam no núcleo, e não em cada app (decisão 3).

**Por que é assim.** Feitas no núcleo, a autenticação e a autorização se configuram uma vez e valem para todos os apps, o que permite aprovar a segurança uma vez só (decisão 3). E nenhum app toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão antes de atender (decisão 5).

**A conferência acontece a cada pedido.** Entrar não dá passe livre. Cada pedido de um dado ou da IA é conferido de novo, e uma permissão tirada pelo owner da organização já vale no pedido seguinte.

> **Analogia:** na portaria de um prédio, mostrar o documento ao porteiro é a autenticação, e a lista de andares que o crachá abre é a autorização. **Onde a analogia para:** no prédio, ninguém confere o que a pessoa faz depois de passar; no mAIg, cada pedido é conferido de novo, e os apps também passam pela portaria, com o certificado no lugar do documento.

**Exemplo.** Ana, gerente comercial da Farma Vida, uma rede de 40 farmácias, quer as vendas de outubro por farmácia. No exemplo, as pessoas estão cadastradas no núcleo do mAIg, o que ainda está em aberto.

1. Ana entra com o usuário e a senha dela. O mAIg confere que ela é quem diz ser.
2. O mAIg confere que Ana pode usar o Horus, porque Paulo, o owner da organização, lhe deu esse acesso.
3. Ana pergunta nas telas do Horus, a parte de fora do app, na nuvem da Maind. A pergunta chega pela conexão que o próprio mAIg abriu com a Maind, e o mAIg reconhece o Horus pelo certificado.
4. O módulo do Horus, a parte do app que roda dentro do mAIg, pede os dados de vendas. O mAIg confere que o Horus pode ler esse banco na Farma Vida.
5. Só então o mAIg lê o banco, sem alterar nada, e anota o pedido no registro, o log de tudo o que acontece (MF-102).

**Quando dá errado.**

- **A senha está errada.** O mAIg não deixa entrar, e nada do que está dentro fica à vista.
- **Um app pede o que não pode.** O mAIg recusa e anota a recusa no registro, onde o owner da organização e o auditor a veem depois (decisão 5). O app não tem como dar a volta: não tem a senha do banco nem a chave da IA.

**O que ainda está em aberto.** A proteção extra do login, como a confirmação em dois passos, está no fim desta página.

### Os jeitos de entrar na primeira versão

**Em resumo:** na primeira versão do mAIg, entra-se com usuário e senha ou com a conta Google. O login da empresa chega na segunda versão.

**Quem é quem.**

- **Usuário e senha.** A pessoa tem um nome de acesso e uma senha que só ela conhece, conferida a cada entrada.
- **Conta Google.** Quem confere a senha é o Google, que confirma ao mAIg que a pessoa é quem diz ser. O mAIg aceita a confirmação, mas continua decidindo o que a pessoa pode fazer.
- **Login da empresa.** É a entrada com o sistema de identidade da própria empresa, onde ela já cadastra os funcionários. Chega na segunda versão, junto com a versão 2.1 do Horus (decisão 16). O detalhe está em Login da empresa (MF-112).

**Os jeitos de entrar são escolha da organização.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a forma de entrar é configuração da organização, e o owner da organização liga ou desliga cada uma. O owner da organização e o administrador da instância entram sempre por usuário e senha (D-291 do Horus). Assim, o acesso de quem configura tudo não depende de uma conta mantida fora do mAIg.

**Por que é assim.** A primeira versão traz o que a versão 2.0 do Horus usa; o login da empresa chega quando o Horus passa a usá-lo. Abre-se mão de: o mAIg fica incompleto até a segunda versão, e a TI do cliente que exija o login da empresa espera até lá (decisão 16).

**Exemplo.** Paulo, owner da organização da Farma Vida, define como as pessoas entram.

1. Paulo entra no console do mAIg, a tela onde se configura tudo (MF-110), com usuário e senha.
2. Nas configurações de segurança, ele liga os dois jeitos de entrar da primeira versão.
3. Ana passa a entrar com a conta Google que já usa no trabalho. O Google confirma que ela é Ana; o mAIg confere que ela pode usar o Horus.
4. Paulo continua entrando com usuário e senha.

**Quando dá errado.** Alguém entra com uma conta Google que o owner da organização não cadastrou. O Google confirma quem a pessoa é, mas isso não basta: ela não está entre as pessoas da organização, e o mAIg não a deixa entrar. Ser quem diz ser não dá permissão nenhuma.

### Os quatro papéis e o que cada um vê

**Em resumo:** o administrador da instância cuida da instalação; o owner da organização decide o que a organização usa; o auditor confere sem mudar nada; e a pessoa que usa o app trabalha com ele.

**Três palavras antes dos papéis.** A instância é cada instalação física do mAIg e atende uma ou mais organizações sem misturá-las. A organização é o espaço de um cliente dentro dela, com os seus apps e as suas regras. A empresa é a companhia que assina o contrato e pode ter várias organizações (decisão 9).

**Quem é quem.**

| Papel | Vê e faz | Não vê nem faz |
|---|---|---|
| Administrador da instância | cria as organizações e o usuário do primeiro owner da organização; instala os apps na instância, uma vez só; vê as instalações, o estado e as versões | o registro das organizações; a configuração dos bancos, da IA e das pessoas delas |
| Owner da organização | libera e configura os apps; configura os bancos e a IA; dá acesso às pessoas; nomeia o auditor; consulta o registro | nada de outras organizações, nem das que dividem a instância |
| Auditor | lê o registro da organização que o nomeou | não muda nenhuma configuração |
| Pessoa que usa o app | usa o que o app mostra a ela | senhas, chaves, configuração e registro |

A tabela segue as decisões 10 e 12. O papel de administrador da instância é da TI do cliente quando o mAIg roda na infraestrutura do cliente, isto é, nas máquinas e na rede dele, e da equipe da Maind quando roda na da Maind (D-271, D-280 do Horus).

**Por que é assim.** Quem cuida da instalação física controla o que roda nela, e cada organização escolhe o que usa (decisão 10). Quem configura não é quem confere: é a separação de funções, que separa quem movimenta o dinheiro de quem audita as contas. E, se o administrador da instância visse o registro, a equipe da Maind veria o de todos os clientes das instâncias da Maind (decisão 12).

**Uma pessoa, mais de um papel.** A mesma pessoa pode fazer mais de um papel: Paulo é owner da organização e também pergunta ao Horus. A exceção é o auditor: o owner da organização não pode nomear a si mesmo, porque auditaria o próprio trabalho.

> **Analogia:** num condomínio, a administradora cuida do prédio, cada morador decide o próprio apartamento e o conselho fiscal confere as contas sem mexer nelas. **Onde a analogia para:** o conselho fiscal é eleito pela assembleia, e a administradora entra em qualquer área comum; no mAIg, o auditor é nomeado pelo owner da organização que ele confere, e o administrador da instância não enxerga o registro de organização nenhuma.

**Exemplo.** A Farma Vida instalou o mAIg na própria rede.

1. Marta, da TI da Farma Vida, faz o papel de administrador da instância e cria a organização Farma Vida e o usuário de Paulo.
2. Paulo, diretor de operações, é o owner da organização. Libera o Horus, escolhe o banco e a IA e dá acesso a Ana.
3. Paulo nomeia Renata, da área de segurança, auditora da organização.
4. Renata vê no registro o que o Horus pediu em nome de Ana. Marta vê que o Horus está instalado e funcionando, mas não vê o registro nem o banco escolhido por Paulo.

**Quando dá errado.**

- **O auditor tenta mudar uma configuração.** Não consegue: o papel só lê (decisão 12).
- **O único owner da organização sai da empresa ou esquece a senha.** Como se troca ou se recupera esse acesso ainda está em aberto. É o caso que mais pede decisão, porque trava a organização inteira.

**O que ainda está em aberto.** Quantos owners da organização e quantos auditores uma organização pode ter estão no fim desta página.

### As permissões: quem usa cada app e o que cada app pode pedir

**Em resumo:** um pedido só é atendido quando passa por duas conferências: a pessoa pode usar aquele app, e o app pode pedir aquilo naquela organização. Quem dá as duas permissões é o owner da organização.

**Quem é quem.**

- **A permissão da pessoa** diz quais apps ela pode usar na organização.
- **A permissão do app** diz o que ele pode pedir ao núcleo na organização: de quais bancos lê e quais IAs usa. A parte de fora de cada app fica registrada no mAIg com as permissões dela (decisão 4).

O cadastro dos bancos está em Bancos da empresa (MF-105). As IAs e os limites, em Governança da IA (MF-106). A liberação do app, em Gestão dos apps (MF-104).

**Por que duas conferências.** Só com a permissão da pessoa, um app liberado leria qualquer banco da organização. Só com a do app, qualquer pessoa usaria qualquer app. E as duas valem por organização: o que Paulo libera ao Horus na Farma Vida não vale para outra organização da mesma instância (decisões 9 e 10).

**O que fica com o app.** O que cada pessoa vê dentro de um banco, como só as vendas da própria região, não é conferido pelo mAIg. O mAIg confere se o app pode ler o banco; o app decide o que mostra a cada pessoa. No Horus, essa segurança por pessoa é uma mf da versão 2.1 (MF-106 do Horus).

**Exemplo.** Paulo liberou ao Horus só o banco de vendas.

1. Ana pergunta ao Horus a margem de cada farmácia em outubro.
2. O mAIg confere que Ana pode usar o Horus. Ela pode.
3. O módulo do Horus pede os dados do banco financeiro.
4. O mAIg confere a permissão do app: na Farma Vida, o Horus só lê o banco de vendas. O pedido é recusado.
5. O mAIg anota a recusa no registro: o app, a pessoa, o banco e a hora (MF-102).
6. Paulo vê a recusa, conversa com a área financeira e decide se libera o banco financeiro ao Horus. O que a tela de Ana mostra enquanto isso é assunto do app.

**Quando dá errado.** O módulo de um app tenta chegar ao banco sem passar pelo núcleo. Não tem como: ele não tem a senha e só usa os serviços do núcleo (decisões 4 e 5). Como o mAIg garante esse isolamento está em Execução isolada dos apps (MF-109).

### O primeiro acesso do owner da organização

**Em resumo:** o administrador da instância cria o usuário do primeiro owner da organização, que recebe um link de uso único e define a própria senha. A senha não passa por mais ninguém.

**Quem é quem.**

- **O usuário** é a conta com que alguém entra no mAIg.
- **O link de primeiro acesso** abre a tela para definir a senha. Serve uma vez só e vale por pouco tempo.
- **Por fora do sistema** quer dizer por um canal que não é o mAIg, como o e-mail de quem criou o usuário.

**Como acontece.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: quem cria o usuário recebe o link de primeiro acesso e o entrega ao owner da organização por fora do sistema, e o owner da organização define a própria senha (D-290 do Horus). Vale nas duas hospedagens: na da Maind, quem cria o usuário é a equipe da Maind; na do cliente, a TI do cliente (D-271, D-290 do Horus).

**Por que é assim.** A senha de quem configura tudo nasce com o próprio owner da organização, e nem a equipe da Maind nem a TI do cliente a conhecem. Abre-se mão de: a entrega do link é manual (D-290 do Horus).

> **Analogia:** é como a chave provisória que a imobiliária entrega ao novo morador, para abrir a porta uma vez e trocar o segredo da fechadura. **Onde a analogia para:** a chave provisória serve até alguém trocar a fechadura; o link para de funcionar sozinho, depois do primeiro uso ou de pouco tempo.

**Exemplo.**

1. Marta cria a organização Farma Vida e o usuário de Paulo como owner da organização.
2. O mAIg entrega a Marta o link de primeiro acesso, e ela o manda a Paulo pelo e-mail dela.
3. Paulo abre o link e define a senha. Marta não a vê em momento nenhum.
4. O link deixa de funcionar. Daqui em diante, Paulo entra com usuário e senha.

**Quando dá errado.**

- **O link vence antes de ser aberto.** Marta gera um link novo para o mesmo usuário.
- **Outra pessoa abre o link antes de Paulo.** Paulo o encontra já usado e não consegue definir a senha. É o sinal de que o link vazou: Paulo avisa Marta, e o acesso é refeito antes que quem o abriu use a conta.

**O que ainda está em aberto.** A recuperação de uma senha esquecida e o acesso do primeiro administrador da instância estão no fim desta página.

### As pessoas que usam os apps: onde ficam e quem as cadastra

**Em resumo:** o owner da organização dá às pessoas o acesso aos apps. Onde fica o cadastro delas, no núcleo do mAIg, para todos os apps, ou dentro de cada app, ainda não está decidido.

**Quem é quem.**

- **O cadastro das pessoas** é a lista de quem pode entrar, com o nome, o e-mail e o jeito de entrar de cada uma.
- **Login único** é entrar uma vez e usar todos os apps da organização com a mesma conta.
- **Dado pessoal** é a informação que identifica uma pessoa, como o nome e o e-mail; a lei de proteção de dados pessoais regula como ele se guarda.

**As duas opções e o que muda.**

- **No núcleo, para todos os apps.** O mAIg guarda o cadastro e faz o login das pessoas. Há login único, o mAIg confere a permissão da pessoa e sabe, ele mesmo, em nome de quem cada pedido é feito. O dado pessoal fica num lugar só, sob a guarda do mAIg, e a saída de uma pessoa se resolve ali.
- **Em cada app.** Cada app guarda as próprias pessoas e faz o próprio login. A pessoa tem uma conta por app, a conferência da pessoa passa ao app, e o registro anota o "em nome de quem" que o app informa, sem como conferi-lo (MF-102). O mAIg guarda menos dado pessoal, e a saída de uma pessoa se resolve app por app.

**O ponto de partida do Horus aponta para o núcleo.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: as pessoas da organização ficam isoladas no middleware, a peça do Horus que deu origem ao mAIg, fora da nuvem do Horus, e o owner da organização as gere por lá, porque é mais seguro (D-261 do Horus).

**Por que ainda está em aberto.** A escolha vale para todos os apps, e não só para o Horus. Um app futuro pode ter razões para guardar as próprias pessoas, e quem pesa isso é o dono da Maind.

**Exemplo.** Com as pessoas no núcleo, Paulo dá à equipe comercial o acesso ao Horus.

1. Paulo cadastra Ana e mais cinco pessoas da área comercial e marca que podem usar o Horus.
2. Ana entra uma vez e chega ao Horus.
3. Meses depois, chega um segundo app da Maind. Paulo só marca quem pode usá-lo, e Ana entra nele com a mesma conta.

**Quando dá errado.** Uma pessoa sai da empresa. O owner da organização tira o acesso dela, e ela deixa de entrar; se ela entrava pelo Google e a empresa desligar a conta, também deixa de entrar por ele. O que acontece com as linhas dela no registro está em aberto em Registro e auditoria (MF-102).

**O que ainda está em aberto.** A escolha é o primeiro ponto de "O que ainda falta decidir", logo abaixo.

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: cada papel no seu lugar.** Marta, da TI do cliente, e Renata, a auditora, acompanham.

1. Paulo liberou ao Horus só o banco de vendas. Ana faz uma pergunta que pede o banco financeiro, e o mAIg recusa antes de ler qualquer dado.
2. Renata encontra a recusa no registro, tenta liberar o banco financeiro e não consegue.
3. Marta entra como administrador da instância. Vê o Horus instalado, o estado e a versão, mas não encontra o registro nem a configuração do banco.

**Demonstração 2: a senha que ninguém conhece.** Marta cria o usuário de Paulo e lhe entrega o link. Paulo define a senha. Marta tenta usar o mesmo link de novo, e ele não funciona; em nenhum momento o mAIg lhe mostrou a senha de Paulo.

## Retorno para o negócio

- **Aprovar a segurança uma vez só.** Uma portaria igual para todos os apps é o que a TI do cliente avalia na primeira venda (decisão 3). Hipótese: a TI do cliente aprova mais depressa o segundo app quando ele entra pela portaria que ela já conhece.
- **Argumento de venda.** O auditor, que confere sem poder mudar nada, reforça o argumento de venda junto à área de segurança do cliente (decisão 12).
- **Custo de atender.** Hipótese: como o owner da organização dá e tira acessos sozinho, a equipe da Maind recebe menos pedidos de suporte para mudar quem entra e o que pode.

## O que não inclui

- O login com o sistema de identidade da empresa, que chega na segunda versão (MF-112).
- O registro e a consulta dele (MF-102).
- O certificado de cada app e o handshake contratual, a conversa em que o mAIg confere a contratação com a Maind (MF-103).
- Liberar, pausar e retirar um app (MF-104).
- O cadastro dos bancos e o cofre das senhas, o lugar trancado de onde nenhum app as tira (MF-105).
- As chaves de IA, os modelos permitidos e os limites (MF-106).
- Criar e excluir organizações e a separação entre elas (MF-107).
- A tela onde tudo se configura (MF-110).
- O isolamento do módulo de cada app (MF-109).
- O que cada pessoa vê dentro de um banco e os papéis internos de cada app: são do app; no Horus, a segurança por pessoa é uma mf da versão 2.1 (MF-106 do Horus).

## Depende de

- `MF-107:Organizações e instâncias`. Os papéis existem dentro de uma instância ou de uma organização, e quase toda permissão vale por organização. Sem organização, não há a quem dar um papel nem onde valer uma permissão.

## Ponto de partida no Horus

O middleware é a peça do Horus que deu origem ao mAIg; a nuvem do Horus é a parte dele nos servidores da Maind.

- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: as pessoas ficam isoladas no middleware, fora da nuvem do Horus, o owner da organização as gere por lá, e o painel de quem administra a instância só enxerga contagens delas (D-261 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização usa a tela de configuração, onde aprova o convite de uma pessoa nascido no Horus; o e-mail do convidado passa pela nuvem do Horus no caminho (D-262 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização usa a mesma tela nas duas hospedagens, e na da Maind é a Maind quem cria o usuário dele (D-271 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: criar a organização cria também o usuário do owner da organização (D-280 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o primeiro acesso é um link de uso único e validade curta, entregue por fora do sistema, e a senha não passa por mais ninguém (D-290 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a forma de entrar é configuração da organização, e o owner da organização e o administrador da instância entram sempre por usuário e senha (D-291 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização cadastra até mais dois owners da organização, ligados ao login da empresa (D-258 do Horus).

## O que ainda falta decidir

- **Falta o dono da Maind decidir onde ficam e quem cadastra as pessoas que usam os apps, com o cadastro e o login delas: no núcleo do mAIg, para todos os apps, ou em cada app.** *O que está em jogo:* define se um login único e as mesmas permissões valem para todos os apps, se o mAIg confere em nome de quem cada pedido é feito e quanto dado pessoal ele guarda. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: as pessoas ficam no middleware, e a forma de entrar é configuração da organização (D-261, D-291 do Horus).
- **Falta o dono da Maind decidir quantos owners da organização uma organização pode ter e como o papel passa para outra pessoa.** *O que está em jogo:* com um só, a saída ou o esquecimento dessa pessoa trava a organização, e só o administrador da instância, que na hospedagem da Maind é a equipe da Maind, consegue destravá-la. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: os owners da organização a mais dependem do login da empresa, que só chega na segunda versão (D-258 do Horus).
- **Falta o dono da Maind decidir quantos auditores uma organização pode ter e se o auditor pode ser alguém de fora da empresa, como uma auditoria externa.** *O que está em jogo:* as decisões falam em um auditor (decisão 12); uma empresa grande pode querer a segurança e a auditoria interna conferindo juntas, e uma auditoria externa daria ao registro um olhar de fora.
- **Falta o arquiteto do mAIg definir, com o dono da Maind, a proteção extra do login por usuário e senha: a confirmação em dois passos, o que acontece depois de várias tentativas erradas e como se recupera uma senha esquecida.** *O que está em jogo:* o owner da organização e o administrador da instância entram sempre por usuário e senha e têm a chave de tudo; uma senha roubada abre a organização inteira, e uma recuperação mal desenhada vira uma porta dos fundos.
- **Falta o arquiteto do mAIg definir como nasce o acesso do primeiro administrador da instância, quando o mAIg é instalado.** *O que está em jogo:* é a primeira conta de todas; se nascer com uma senha conhecida por mais gente, a regra de que a senha não passa por ninguém falha justamente no começo.
- **Também depende, e está explicado em outras mfs:** o conteúdo do registro e as linhas de uma pessoa excluída (MF-102); a política do certificado dos apps (MF-103); o isolamento dos módulos (MF-109).

## Decisões do PO para discutir

- **Decisão:** uma pessoa pode acumular papéis, mas o owner da organização não pode nomear a si mesmo auditor. *Por que:* a decisão 12 descartou o owner da organização auditar a si mesmo. *Alternativa:* papéis livres, ou nenhum acúmulo. *Reabrir se:* uma organização pequena não tiver outra pessoa para ser auditora.
- **Decisão:** só entra quem está cadastrado na organização, mesmo com uma conta Google válida. *Por que:* a autenticação confirma quem a pessoa é, e não o que pode; no Horus, quem chega pelo login da empresa sem convite também não entra (D-253 do Horus). *Alternativa:* aceitar qualquer conta Google com o e-mail da empresa. *Reabrir se:* empresas grandes pedirem para não cadastrar as pessoas uma a uma.
- **Decisão:** cada pedido passa por duas conferências, a da pessoa e a do app, e o owner da organização dá as duas. *Por que:* com uma só, ou o app lê qualquer banco, ou qualquer pessoa usa qualquer app. *Alternativa:* só a permissão do app. *Reabrir se:* o ponto (g) for decidido como "em cada app"; aí a conferência da pessoa passa ao app.
- **Decisão:** o que cada pessoa vê dentro de um banco e os papéis internos de cada app ficam com o app; os papéis do Horus não entram no texto. *Por que:* o briefing põe a segurança por pessoa no app, e os papéis do Horus trazem regras comerciais dele. *Alternativa:* um catálogo de papéis por app no mAIg. *Reabrir se:* um segundo app precisar dos papéis do Horus.
- **Decisão:** o texto descreve o ponto (g) sem escolher, e o PO recomenda as pessoas no núcleo. *Por que:* é o ponto de partida do Horus, dá o login único e deixa o mAIg conferir o "em nome de quem" do registro. *Alternativa:* em cada app, com menos dado pessoal no mAIg. *Reabrir se:* um app futuro precisar de cadastro próprio, ou o jurídico pesar o dado pessoal no núcleo.
- **Decisão:** o PO completou os casos de falha do link de primeiro acesso: o vencido se refaz por quem criou o usuário, e o aberto por outra pessoa obriga a refazer o acesso. *Por que:* o Horus diz como o link nasce, não o que acontece quando ele falha. *Alternativa:* o próprio owner da organização pedir um link novo na tela de entrada. *Reabrir se:* o arquiteto do mAIg desenhar a recuperação de outro jeito.
- **Decisão:** o PO usou duas entradas do Horus fora da lista do briefing (D-258, D-280 do Horus). *Por que:* a primeira é a única fonte sobre mais de um owner da organização, e a segunda é a que o briefing do mAIg cita junto com a D-271 do Horus. *Alternativa:* deixar o ponto dos owners da organização sem ponto de partida. *Reabrir se:* o dono da Maind não quiser herdar o limite do Horus.
- **Decisão:** o PO abriu quatro pontos novos além do (g): os owners da organização, os auditores, a proteção extra do login e o primeiro administrador da instância. *Por que:* a TI do cliente pergunta isso numa aprovação de segurança, e as 18 decisões não respondem. *Alternativa:* deixá-los ao arquiteto do mAIg, sem registro. *Reabrir se:* algum já estiver respondido no planejamento do middleware herdado.
- **Decisão:** a prova de valor tem duas demonstrações, os papéis com a recusa e o primeiro acesso. *Por que:* a TI do cliente e o auditor as veem funcionando sem número nenhum. *Alternativa:* uma demonstração do login pela conta Google. *Reabrir se:* o dono da Maind quiser a prova centrada na pessoa que usa o app.
