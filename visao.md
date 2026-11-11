# Visão e objetivos do Maind AI Gateway (mAIg)

Situação: rascunho para o dono da Maind revisar · Data: 08/11/2026 · Revisado em 11/11/2026

## Em uma frase

O Maind AI Gateway, ou mAIg, é uma plataforma da Maind que a empresa cliente instala dentro da própria rede, para que os
produtos da Maind usem os dados e a inteligência artificial (IA) da empresa sem que o banco de dados fique exposto para
fora.

## O problema

Todo projeto com IA depende de dados: uma IA que responde perguntas sobre as vendas precisa ler o banco de vendas. Só que a
maioria das empresas não deixa um banco visível de fora, nem atrás de um firewall (o muro de proteção da rede) ou de uma
VPN (um túnel protegido entre duas redes).

Para a Maind, isso vira uma barreira em cada venda. Cada produto novo passa de novo pela aprovação de segurança do
cliente: reuniões com a TI, análise do jurídico, testes e liberação de rede. Essa aprovação leva semanas e muitas vezes
decide se a Maind entra ou não no cliente.

## A visão

Em vez de pedir à empresa que abra o banco para fora, a Maind leva para dentro dela um componente que lê o banco por ela: o
mAIg. Ele lê o que precisa, pede à IA o que precisa e entrega para fora só o resultado. O owner da organização, indicado
pela empresa, controla o que ele pode ler, quais IAs pode usar e quais produtos da Maind podem pedir alguma coisa a ele.
A TI do cliente libera as saídas, cria os usuários dos bancos e, na casa do cliente, opera a instância.

A aprovação de segurança acontece **uma vez**, para o mAIg. Depois disso, cada produto da Maind entra nele como um **app**.
O Maind Horus é o primeiro; o Maind Doc, assistente para gerar documentos de projetos corporativos com IA, pode ser o
próximo.

<!-- A analogia vai num destaque (callout) quando a página virar HTML. -->
> **Como um prédio comercial.** O prédio tem portaria, crachás, câmeras, livro de visitas e um cofre com as chaves. As
> empresas que alugam salas não montam portaria própria: usam a do prédio. O mAIg é o prédio, e os produtos da Maind são
> as empresas que alugam as salas. **Onde a analogia para:** na casa do cliente, quem manda na portaria do mAIg é a TI
> do cliente, e não a Maind, que fabricou o prédio; na hospedagem da Maind, a portaria é da equipe da Maind, e o que ela
> pode e não pode fazer está em "De quem o mAIg protege, e de quem não".

## Os objetivos

1. **Usar os dados e a IA do cliente sem expor o banco.** Os dados ficam na rede do cliente, o mAIg só lê e nunca altera
   nada, e para a Maind vai só o resultado que cada app precisa, sem ficar guardado lá, e ao provedor de IA só vai o que o owner da organização permitir. A empresa não abre nenhuma porta de entrada na rede. Isso
   vale por inteiro quando o mAIg roda na infraestrutura do cliente; na da Maind, o banco aceita conexão só do endereço
   fixo da Maind, em troca de a empresa não instalar nada.
2. **Aprovar a segurança uma vez só.** Depois que o mAIg está instalado e aprovado, um novo app da Maind entra sem uma
   nova rodada de aprovação do zero. O administrador da instância instala o app, e o owner da organização o libera e
   diz o que ele pode ler.
3. **Dar à empresa cliente o controle num lugar só.** Quais bancos cada app lê, quais IAs usa, quanto gasta, quem pediu o
   quê e quando: tudo se configura e se consulta no mAIg, para todos os apps.
4. **Servir a qualquer produto da Maind do mesmo jeito.** O que é comum a todo app (segurança, login, registro, acesso aos
   dados e à IA) vem pronto no mAIg, e cada app traz só o que é dele. O Horus é o primeiro app, e não um caso especial.
5. **Ser a porta de entrada da Maind nos clientes.** A venda difícil acontece uma vez, e cada produto seguinte fica mais
   fácil de vender, porque entra por uma porta já aberta e aprovada. É o jeito de crescer num cliente chamado "entrar e
   expandir". Por isso o mAIg leva a marca Maind, e por isso ele vem embutido no preço dos apps, sem custo a mais na
   primeira venda.

## Como funciona, em poucas linhas

- **O núcleo:** o mAIg traz de fábrica a segurança, o login e as permissões (as pessoas que usam os apps são cadastradas no núcleo, para todos os apps, e quem configura tudo, os owners da organização, quantos a organização contratar, e o administrador da instância, entram sempre por usuário e senha, uma senha que abre só o console), o registro de tudo o que acontece (log e
  auditoria), os certificados, o de cada app e o de cada organização, a gestão dos apps, o cofre das senhas dos bancos, as regras de uso
  da IA (as chaves, que são sempre do cliente, os modelos permitidos, os limites e o custo por app, mais o que cada pedido ao provedor pode levar) e os servidores de ferramentas da empresa (MCP). Nenhum app
  toca uma senha de banco ou uma chave de IA: pede ao mAIg, que confere a permissão e anota no registro.
- **O app:** tem uma parte fora do mAIg, registrada com certificado e permissões (no Horus, a nuvem da Maind, com as telas),
  e um módulo que roda isolado dentro do mAIg (no Horus, onde a pergunta vira resposta).
- **Várias organizações:** cada instalação física do mAIg, chamada instância, atende uma ou mais organizações, e cada
  organização tem o seu próprio conjunto de apps e de regras de governança. O mAIg roda na infraestrutura do cliente ou
  na da Maind, e uma mesma infraestrutura física pode ter mais de uma instância, para organizações diferentes. Na da
  Maind, ele roda em máquinas separadas da nuvem dos apps e, por enquanto, com o endereço aberto na internet, protegido
  pelo login; fechar essa rede fica para a segunda versão do mAIg ou depois.
- **Os papéis:** o **administrador da instância**, até três por instância, cuida da instalação física (instala os apps, gere os owners
  de cada organização, vê o estado e as
  versões e, numa emergência, suspende um app na instância inteira, sem apagar nada; nunca vê o que é das organizações; os atos dele que tocam uma organização ficam anotados no registro dela, e ele
  só os escreve); o **owner da organização** libera e configura os apps, os bancos, a IA e as
  pessoas da organização dele; e até dois **auditores**, nomeados pelo owner, só leem o registro da organização, e um
  deles pode ser de fora da empresa, com um acesso que vence numa data. Na onda 1.0 da primeira versão, há um auditor
  só, de dentro da empresa; o segundo e o de fora chegam na onda 1.1.
- **A contratação de um app:** fechado o contrato, a Maind entrega um kit de instalação com um certificado digital
  emitido por ela, que identifica o app e se troca sozinho; a licença, assinada pela Maind, traz a data do fim do
  contrato e a carência. Instalado o kit, o mAIg confirma a
  contratação com um servidor da Maind Tech (o handshake contratual), e o app é liberado para a organização que o
  contratou: a contratação é por organização. Cada organização tem também um certificado próprio, atestado pela Maind
  quando ela é criada (a chave privada nasce no mAIg e nunca sai dele; a Maind recebe só a pública), e um pedido só passa com o dela e com o do kit do app. Depois, o administrador da
  instância o instala na instância, e o owner de cada organização o libera e configura para a dele.
- **O fim de um contrato:** o owner da organização é avisado antes. O app só para por uma ação manual da Maind ou
  quando a licença vence sem ser renovada, ao fim da carência; até lá, a organização tem esse prazo para renovar. Depois que
  o app para, a configuração dele fica guardada até a organização renovar ou o owner apagar.
- **A guarda do registro:** o registro fica guardado enquanto o app estiver instalado. Quando o app é desinstalado do
  mAIg, os dados dele são excluídos. Um app só é desinstalado quando nenhuma organização da instância o tem mais, e antes
  disso o owner de cada organização é avisado, e ele e os auditores podem baixar uma cópia do registro, num arquivo assinado
  pelo mAIg. Quem é excluído da organização perde o
  acesso, mas as linhas dele no registro seguem, com o nome, até a desinstalação do app. Uma organização que deixa de
  usar o mAIg não é excluída, e sim encerrada: perde os apps e as pessoas que usam os apps, e o owner e o auditor dela
  seguem lendo o registro até o app ser desinstalado. Toda desinstalação começa com um aviso, com prazo, a toda
  organização que tem registro no app. Retirar e desinstalar um app, a cópia assinada do registro e o encerramento de
  uma organização chegam na onda 1.1 da primeira versão: na onda 1.0, nenhum app é retirado nem desinstalado, nenhuma
  organização é encerrada e nenhum registro é excluído.
- **A conexão:** o mAIg liga para fora, abre a conexão com a Maind e a mantém aberta. A TI só libera saídas, nenhuma de entrada: a do
  endereço da Maind e a de cada provedor de IA que a organização escolher (a IA é consultada direto no provedor, sem passar
  pela Maind), mais a do Google, quando a organização entra com a conta Google, e a do servidor de e-mail da própria
  empresa, por onde saem os avisos. Se a conexão cai, o mAIg religa sozinho e guarda o que estava em andamento por um tempo curto, como 15 minutos; depois disso, a pessoa refaz a pergunta. A tela onde se configura tudo, o console, se abre de dentro da rede do cliente, ou pela VPN da empresa, e não passa pela Maind; na hospedagem da Maind, por enquanto, se abre pela internet. Enquanto a ligação estiver fora, os apps não funcionam, porque as telas deles ficam na nuvem da Maind e só chegam ao mAIg por ela; na hospedagem da Maind, uma queda atinge todos os clientes da instância.
- **A entrada das pessoas:** o login começa pelo app e passa pelo endereço do mAIg, que a TI do cliente pode deixar
  visível só de dentro da rede ou pela VPN. O passe é de um app só, com o papel da pessoa nele, e quem já entrou num app
  não digita a senha de novo para abrir outro. O mAIg confere a pessoa e dá à nuvem só um passe assinado por ele, que vale 15 minutos e se renova
  pelo mAIg; quem sai da rede ou perde o acesso deixa de usar os apps em até 15 minutos. A senha nunca chega à nuvem da
  Maind, e todas as pessoas usam a mesma ligação, cada pedido com o passe de quem pediu.
- **O que fica na nuvem:** a nuvem do app guarda só a receita de cada painel, nunca o resultado; o que se guarda para
  abrir mais rápido fica no mAIg, num cache que não entra na cópia de segurança. Cada resposta tem um teto de 200 linhas por app, com as colunas sensíveis mascaradas,
  que o owner da organização pode subir. Uma auditoria de fora e regras técnicas provam que a resposta só passa pela
  memória. Além da resposta, só sai o que o owner da organização liberar: a consulta feita ao banco, para a pessoa ver
  a origem do número, e a planilha, que vai direto do mAIg ao navegador da pessoa, sem passar pela nuvem. A resposta
  que passa do teto é recusada inteira, com mensagem clara. A consulta e a planilha chegam na onda 1.1 da primeira
  versão: na onda 1.0, só a resposta pronta sai do mAIg.
- **Os avisos e as preferências:** os avisos aparecem no console e chegam também por e-mail, só com o tipo do aviso e
  um link, sem dado nenhum. A organização tem uma lista de configurações que dizem o que ela permite e para quais
  papéis, como quem pode receber aviso por e-mail; cada pessoa escolhe dentro do permitido, e quem não tem a permissão
  nem vê a opção. Essa lista e as preferências chegam na onda 1.1 da primeira versão: na onda 1.0, cada aviso tem
  destinatário fixo. Os avisos de segurança, como a troca de um owner e a suspensão de um app, chegam sempre. A luz de
  estado e a página de status são do mAIg, iguais em todos os apps: a luz entra na onda 1.0, e a página chega na onda
  1.1, com o login do mAIg, e mostra a cada pessoa o estado da ligação e dos apps da organização dela.
- **A atualização do mAIg:** o próprio mAIg baixa a versão nova na Maind pela conexão de saída e confere que ela é da
  Maind. Na casa do cliente, só se instala com o aval da TI do cliente, dentro da janela de horário que ela define; na
  hospedagem da Maind, se instala sozinho, numa janela de madrugada que a Maind define, com aviso ao owner de cada
  organização 7 dias antes, ou 24 horas numa correção de segurança. A TI do cliente pode adiar uma versão nova por até 30 dias, e uma
  correção de segurança por até 7; passado o prazo, os apps param até ela dar o aval. Os apps são atualizados pelo
  administrador da instância, um a um.

## De quem o mAIg protege, e de quem não

A TI de um cliente exigente pergunta primeiro de quem o mAIg protege a empresa, e logo depois o que acontece se a própria
Maind for invadida. A resposta vem ator por ator: o que cada um alcança, o que o mAIg impede e o que fica como risco
aceito, isto é, o que se sabe que pode acontecer e se aceita em troca de outra coisa.

| Quem | O que o mAIg impede | O que fica como risco aceito |
|---|---|---|
| **Alguém de fora, na internet** | Na casa do cliente, não enxerga o mAIg: não há porta de entrada, e a TI do cliente pode deixar o endereço visível só de dentro da rede ou pela VPN. Não chega ao banco: na hospedagem da Maind, o banco só aceita conexão do endereço fixo da Maind. | Na hospedagem da Maind, na primeira versão, a tela de entrada e o console ficam abertos na internet, protegidos só pelo login, com bloqueio temporário depois de várias tentativas erradas de senha e sem a confirmação em dois passos, que chega na segunda versão. |
| **Uma organização vizinha, na mesma instância** | Não vê os apps, as regras, a configuração nem o registro da outra, e cada pedido passa com o certificado da organização e com o do kit do app. | As duas dividem a mesma instalação, e uma invasão da instância alcança todas as organizações dela. Quem exige mais isolamento instala o mAIg em casa. |
| **Um app com defeito, ou que faz o que não devia** | O app só pede ao núcleo, nunca toca uma senha de banco nem uma chave de IA, só lê o que o owner da organização liberou e não derruba os outros apps. A TI do cliente pode suspendê-lo na instância inteira, sem apagar o registro. | Dentro do que tem permissão de ler, o app pode fazer mau uso dos dados até ser suspenso. O registro mostra o que ele leu. |
| **A nuvem da Maind, onde ficam as telas dos apps, se for invadida** | Não vê a senha de ninguém e não consegue fabricar um passe, porque só o mAIg o assina. Não guarda resultados, só a receita de cada painel. Cada resposta tem um teto de 200 linhas, com as colunas sensíveis mascaradas, e a nuvem só fala com o mAIg pela ligação que ele abre. | Enquanto uma pessoa usa um app, e até 15 minutos depois de ela sair, a nuvem invadida pode pedir em nome dela o que ela já poderia ver, até o teto e até o limite de pedidos, que dispara um alerta, e o registro mostra o nome dessa pessoa. Também pode mandar rodar as tarefas marcadas, que o mAIg confere a cada rodada. |
| **O canal de atualização da Maind** | Uma versão nova do mAIg só entra com a assinatura da Maind e, na casa do cliente, com o aval da TI do cliente, e o módulo de cada app também só entra assinado pela Maind e conferido pelo mAIg. Uma versão sem assinatura é recusada. | A TI do cliente aprova a versão sem ler o código: confia na Maind. Na hospedagem da Maind, a versão entra sozinha, na janela. |
| **A emissão de certificados da Maind** | A Maind recebe só a chave pública de cada certificado: a privada, o carimbo que assina o passe, nasce no mAIg e nunca sai dele, e por isso a Maind não fabrica passes. Cancelar o certificado de uma organização exige duas pessoas da Maind e fica no registro dela. O certificado da organização vale 30 dias, e o de cada kit também é curto e se troca sozinho: um certificado roubado vale pouco tempo. | Uma falha longa da emissão chega a trancar organizações, porque o certificado da organização assina todo login. |
| **A equipe da Maind, na hospedagem da Maind** | Como administradora da instância, não lê o registro das organizações. Os atos dela que tocam uma organização ficam anotados no registro dela, e suspender um app exige duas pessoas. No suporte, só vê a configuração de uma organização quando o owner dela libera, por tempo limitado; o acesso de suporte chega na onda 1.1 da primeira versão. | Ela cuida das máquinas e do mAIg, mas o registro e o cofre com as senhas dos bancos ficam cifrados com uma chave de cada organização, que ela não alcança, e a cópia de recuperação dessa chave fica com a própria organização: quem copia o disco não lê nada. Com a máquina ligada, ainda alcança, com muito esforço, o que estiver em uso. Quem não aceita isso instala o mAIg em casa. |
| **A TI do cliente, na casa do cliente** | Como administradora da instância, não lê o registro das organizações. Os atos dela que tocam uma organização ficam anotados no registro dela. | Ela controla as máquinas e a rede onde o mAIg roda. O registro e o cofre ficam cifrados, e quem copia o disco não lê nada, mas, com a máquina ligada, ela ainda alcança, com muito esforço, o que estiver em uso. |
| **O owner da organização** | Só age na organização dele, e os auditores que ele nomeia, até dois (na onda 1.0, um só, de dentro da empresa), leem o registro, que ninguém apaga nem altera. Os atos sensíveis dele, como mudar o que vai à IA ou trocar um banco, avisam na hora os outros owners e os auditores. | Ele decide o que cada app lê e o que vai ao provedor de IA: uma permissão larga demais é escolha dele. |
| **O provedor de IA** | Recebe só o que o owner da organização permitir que cada pedido leve, pela chave da própria empresa, direto, sem passar pela Maind. Cada app começa na camada 1, em que não vai dado nenhum, só a pergunta e os nomes das tabelas e das colunas; um pedido só leva totais ou linhas de dados se o owner da organização tiver subido a camada daquele app, e o pedido que passa dela é recusado inteiro. No primeiro app, o Horus, só a Análise avançada, ligada pela pessoa numa pergunta, pede mais do que a camada 1. | O que chega ao provedor fica sob as regras dele, e o mAIg não controla o que ele faz depois. |

**O que a Maind promete sobre si mesma.** Mesmo invadida, a nuvem da Maind não se passa por ninguém, não leva a base
inteira e não instala nada na casa do cliente sem o aval da TI do cliente, e a TI do cliente pode parar um app sem
depender da Maind. O que a Maind não promete é que uma nuvem invadida não consiga nada: por pouco tempo, ela alcança o
que as pessoas que estão usando os apps já poderiam ver.

## O que o núcleo garante e o que é de cada app

O núcleo é a parte do mAIg que vem pronta para todos os apps. Uma parte da proteção ele cumpre sozinho, sem depender
de app nenhum. A outra depende de como cada app foi feito e é conferida de outro jeito.

**O que o núcleo garante sozinho.**

- As senhas dos bancos e as chaves de IA nunca saem dele: nenhum app as recebe.
- Cada pedido de um app é conferido contra a permissão que o owner da organização deu, e o pedido sem permissão é
  recusado.
- Cada pedido é de uma organização só: o núcleo usa os bancos, a chave de IA e o registro dessa organização, e de
  nenhuma outra.
- Os bancos são só lidos, nunca alterados: o usuário de cada banco precisa ser um que só lê, testado no cadastro, e
  cada consulta tem limite de tempo e de linhas, para não derrubar o banco.
- Cada pedido fica no registro, anotado pelo próprio núcleo e cifrado com a chave da organização.
- O que vai ao provedor de IA respeita a camada que o owner da organização escolheu, conferida antes de sair, e o
  pedido que passa dela é recusado inteiro.
- A resposta que volta à nuvem respeita o teto de 200 linhas, com as colunas sensíveis mascaradas, conferido antes de
  sair, e os pedidos respeitam o limite que o owner da organização configura, com alerta no painel do console.
- O passe de cada pessoa é assinado pelo núcleo, e só ele o emite.
- Nenhum módulo sai para a internet por conta própria: a pesquisa na web, quando um app precisa, vai pelo provedor de
  IA, sob as mesmas regras.

**O que é de cada app.**

- Como ele monta a pergunta à IA, dentro da camada permitida.
- O que ele mostra na tela e como trata a resposta, na nuvem da Maind.
- A lógica de dentro do módulo, dentro do que ele tem permissão de ler, incluindo não misturar, num mesmo minuto, os
  pedidos de duas organizações que ele atende.
- As linhas que ele informa ao registro, que chegam marcadas como "informadas pelo app", só com campos fixos, a
  partir da onda 1.1 da primeira versão.

**Como se confere o que é do app.** Pela auditoria de fora, que prova que a nuvem não guarda a resposta; pelo registro,
que mostra tudo o que o app leu e pediu à IA; e, se um app fizer o que não devia, pela suspensão de emergência, que o
para na instância inteira sem apagar a prova.

## A primeira versão

A primeira versão do mAIg sai junto com a versão 2.0 do Horus, o primeiro app, no mesmo planejamento que o Horus tinha
para o middleware. Ela traz o núcleo que o Horus usa nessa versão: a segurança, o login por usuário e senha e por
Google, as permissões, o registro com o auditor, os certificados com o handshake contratual, a gestão dos apps, o cofre
dos bancos, a governança da IA, várias organizações por instância e a conexão de dentro para fora.

A primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois. Assim, o Horus 2.0 não espera a
governança completa. O recorte está nas decisões 92 e 95 do [README](README.md), e a onda de cada capacidade está em
cada mf, no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e
encerra.

**A onda 1.0** traz o mínimo para o Horus 2.0 sair com segurança:

- a entrada das pessoas pelo mAIg, por usuário e senha ou pela conta Google, com o passe, o link de primeiro acesso, a
  troca da senha esquecida e o bloqueio temporário depois de várias tentativas erradas;
- as permissões, com os quatro papéis, a gestão dos owners da organização pelo administrador da instância e um auditor
  por organização, de dentro da empresa;
- o registro e o cofre cifrados, com a consulta ao registro no console, o painel de alertas e o registro da instância;
- a contratação e a gestão dos apps: instalar o kit e o app, o handshake contratual, a licença, liberar, configurar,
  pausar, suspender e atualizar, sempre com a assinatura conferida;
- os bancos da empresa, só para leitura, com as colunas sensíveis sugeridas pelo núcleo e conferidas pelo owner da
  organização;
- a governança da IA inteira: as chaves, os modelos, as camadas, o limite de gasto e o custo por app;
- várias organizações na mesma instância, com a ativação automática, a atualização do mAIg, a cópia de segurança e a
  restauração;
- a ligação de dentro para fora, com o pedido guardado por um tempo curto quando ela cai, e a luz de estado;
- a execução isolada de cada app, com o teto de linhas, o limite de pedidos e o cache dos painéis;
- o console, com o servidor de e-mail testado na instalação e os avisos, cada um com destinatário fixo.

Na onda 1.0, nenhum app é retirado nem desinstalado, nenhuma organização é encerrada e nenhum registro é excluído. O
owner da organização ainda apaga, um a um, o cadastro de um banco e a chave de uma IA.

**A onda 1.1** traz a governança completa:

- o cockpit de ativação;
- o segundo auditor e o auditor de fora da empresa, com acesso que vence numa data;
- a cópia assinada do registro;
- retirar um app, apagar a configuração guardada de um app parado e desinstalar um app, com o aviso e o prazo;
- o encerramento de uma organização e a volta em 30 dias;
- o roteiro de saída do cliente;
- o acesso de suporte da Maind;
- a planilha e a consulta devolvida à tela, com a liberação das duas saídas;
- a página de status;
- as preferências de aviso e a lista "o que a organização permite";
- as linhas "informadas pelo app";
- o cadastro das pessoas em lote.

**A segunda versão** do mAIg sai junto com a versão 2.1 do Horus, que é quando o Horus passa a usar o que ela traz: os
servidores de ferramentas da empresa (MCP), o login com o sistema de identidade da própria empresa e a confirmação em
dois passos no login, configurável. O fechamento da rede da instância da Maind também fica para a segunda versão ou
depois.

**O que não entra na primeira versão**, e não tem versão marcada: enviar o registro para sistemas de fora e os alertas
automáticos de comportamento estranho; a retirada de um app no lugar do owner da organização; a leitura de fontes que
não sejam bancos de tabelas consultados por SQL, e a gravação nos bancos; limites e modelos de IA diferentes por pessoa;
a mudança de uma organização para outra instância ou hospedagem; e o funcionamento sem a ligação com a Maind. A regra de
quem vê o quê dentro de um banco, pessoa a pessoa, é de cada app, e não do mAIg.

A estimativa item por item do arquiteto do mAIg continua depois do fechamento da documentação; o item que não couber na
onda 1.0 volta ao dono da Maind.

## O que fica de fora

- O mAIg não é parte do Horus: é um produto à parte, com código, documentação, versões e decisões próprios.
- O mAIg não leva os dados crus da empresa para a Maind, e não altera os bancos da empresa. À nuvem da Maind só chega a
  resposta que a pessoa vê, até o teto de 200 linhas e com as colunas sensíveis mascaradas, e ela não fica guardada lá.
  Além dela, só sai o que o owner da organização liberar: a consulta feita ao banco, sem dado nenhum, e a planilha, que
  vai direto do mAIg ao navegador da pessoa. Isso vale por inteiro quando o mAIg roda na infraestrutura do cliente; na
  da Maind, o próprio mAIg roda nas máquinas da Maind, separadas da nuvem dos apps, e lê o banco pelo endereço fixo dela.
- Por enquanto, só os apps da Maind entram no mAIg. Ele não recebe sistemas do próprio cliente nem apps de outras
  empresas, e não se vende sozinho: entra junto com um app da Maind.
- Por enquanto, o desenho não considera a venda de apps com a marca de outra empresa (white label).

## O que ainda está em aberto

- **Como medir cada objetivo:** que sinal mostra que cada um foi atingido. Fica para depois do primeiro cliente, a
  partir de um caso real.

Os pontos que mudam a promessa do mAIg e que o dono da Maind ainda decide antes da primeira venda:

- **O compromisso de disponibilidade da ligação com a Maind**, da qual os apps dependem (Conexão de dentro para fora,
  `MF-108`).
- **Quanto dura a carência e com quanta antecedência o owner da organização é avisado do fim do contrato**
  (Contratação dos apps, `MF-103`).

Os dois são pontos comerciais e de número: não mudam o que a primeira versão faz na casa do cliente e não seguram o
fechamento da documentação.

A lista completa, com 51 pontos, está no [registro das decisões do PO](produto/decisoes-do-po-para-discutir.md).

## De onde vem este documento

As decisões do dono da Maind de 08/11/2026 a 11/11/2026 (1 a 127), registradas no [README](README.md) deste repositório e, do lado do Horus, nas
decisões `D-294` a `D-297` do backlog estratégico do Horus. O que o Horus já decidiu sobre o middleware (`D-258` a
`D-293`) vale como ponto de partida do mAIg. As decisões 95 a 127 foram tomadas em 11/11/2026 por um decisor, por
delegação do dono da Maind, no fechamento da primeira versão: valem como as outras, e o dono da Maind pode rever
qualquer uma.
