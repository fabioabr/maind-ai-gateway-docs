# MF-110:Configurar tudo num lugar só

> O console do mAIg é o lugar único onde cada papel faz e confere o que lhe cabe: o administrador da instância cuida da instalação, o owner da organização configura os apps, os bancos, a IA e as pessoas, e o auditor lê o registro.

**Também chamada de:** Console de configuração · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O console de configuração é a tela do mAIg onde se ajusta e se consulta tudo o que o mAIg faz, para todos os apps, num lugar só, e onde cada papel vê só a parte que lhe cabe.

O mAIg, ou Maind AI Gateway, é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa cliente; "gateway" quer dizer portão. Cada produto da Maind entra nele como um **app**, e o primeiro é o Maind Horus, em que as pessoas fazem perguntas sobre os dados da empresa. O **núcleo** é o que vem pronto no mAIg e serve a todo app: a segurança, o registro de tudo o que acontece, o acesso aos bancos de dados e as regras de uso da IA (decisões 3 e 5).

**Por que esta mf existe.** Um dos objetivos do mAIg é dar à empresa cliente o controle num lugar só: quais bancos cada app lê, quais IAs usa, quanto gasta, quem pediu o quê e quando. Sem o console, as regras do núcleo existiriam, mas cada assunto teria o seu lugar, ou cada app traria as suas próprias telas de configuração, e a TI do cliente vigiaria vários lugares. O console não cria regras: é onde as regras das outras mfs são exercidas e consultadas.

## Quem ganha

- **Owner da organização.** A organização é o espaço de um cliente dentro do mAIg, com os seus apps e as suas regras; o owner da organização é quem responde por ela. Ganha um lugar só para pôr os apps para funcionar, sozinho, com o apoio da Maind: libera os apps, liga os bancos e a IA, cuida das pessoas, nomeia o auditor e consulta o registro e o consumo.
- **Administrador da instância.** A instância é cada instalação física do mAIg; o administrador da instância é quem cuida dela. Ganha um lugar para abrir organizações, instalar os apps e acompanhar o estado e as versões, sem planilha nem chamado, e sem nunca ver o que é das organizações.
- **Auditor.** É quem o owner da organização nomeia para conferir o registro. Ganha o registro à mão, no mesmo lugar onde as configurações moram, sem poder mudar nenhuma delas.
- **TI do cliente.** É a equipe de tecnologia da empresa cliente. Ganha a resposta a "o que cada app da Maind lê, usa e gasta" num lugar só. Na infraestrutura do cliente, é ela quem faz o papel de administrador da instância.
- **Equipe da Maind.** Ganha um console igual em todos os clientes, o que simplifica ensinar e dar suporte. Na infraestrutura da Maind, é ela quem faz o papel de administrador da instância.

## A decisão que passa a ser possível

- **O owner da organização passa a poder pôr um app para funcionar na organização sem abrir chamado à Maind:** liga o banco e a IA, libera o app e dá acesso às pessoas.
- **O administrador da instância passa a poder abrir uma organização e instalar um app sem ver nada do que a organização faz.**
- **O auditor passa a poder conferir sem pedir o registro a ninguém.**
- **A dor que some:** a pergunta "onde se configura isso?" a cada app novo. O segundo app se configura no mesmo lugar e do mesmo jeito que o primeiro.

## Como funciona

### O console: um lugar só para configurar e consultar

**Em resumo:** o console é a tela de configuração do mAIg. Tudo o que o núcleo governa se ajusta e se consulta ali, para todos os apps, e cada papel entra com o próprio usuário e vê só a sua parte.

**Quem é quem.**

- **O console** é a tela de configuração de cada instância do mAIg. Quem entra nele encontra a parte da instância ou a parte de uma organização, conforme o papel.
- **Quem entra:** o administrador da instância, o owner da organização e o auditor.
- **Quem não entra:** a pessoa que usa o app, que trabalha só nas telas do próprio app; no Horus, a pessoa que pergunta.
- **A empresa** é a companhia cliente, que assina o contrato. Ela pode ter várias organizações, e cada uma tem a sua parte no console (decisão 11).

**Por que é assim.** Os dados, a IA, a segurança e o registro são do núcleo, e não de cada app (decisões 3 e 5). O que é do núcleo se configura num lugar do núcleo, igual para todos os apps. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: os bancos e a IA são configurados na tela de configuração do middleware, e não no Horus (D-265 do Horus). O middleware é a peça do Horus que deu origem ao mAIg.

> **Analogia:** o console é como a sala da administração de um prédio comercial, onde ficam o quadro de chaves, a lista dos crachás e o livro de visitas. **Onde a analogia para:** no prédio, quem entra na sala vê tudo o que está nela; no console, cada papel vê só a sua parte, e quem cuida da instalação não lê o registro de nenhuma organização.

**Um lugar, e não as regras.** Cada assunto tem a sua mf, que diz a regra. O console é o lugar onde ela se exerce. Por isso este documento aponta, em cada assunto, para a mf dona dele, e não descreve telas: como o console se apresenta é do desenho.

**O que ainda está em aberto.** Por onde cada papel chega ao console é um ponto novo de "O que ainda falta decidir".

### Cada papel vê só a sua parte

**Em resumo:** o console tem uma parte da instância, do administrador da instância, e uma parte de cada organização, do owner da organização e do auditor dela. Ninguém vê a parte de outra organização.

| Papel | O que faz no console | O que não vê nem faz |
|---|---|---|
| Administrador da instância | Cria as organizações e o usuário do primeiro owner da organização; instala os kits e os apps; acompanha o estado e as versões | O registro das organizações; os bancos e a IA delas |
| Owner da organização | Libera e configura os apps; configura os bancos, a IA e as pessoas; nomeia o auditor; consulta o registro e o consumo | Nada de outras organizações, nem das que dividem a instância com a dele |
| Auditor | Lê o registro da organização que o nomeou | Não muda nenhuma configuração; nada de outras organizações |
| Pessoa que usa o app | Não entra no console: usa as telas do app | Senhas, chaves, configuração e registro |

**Por que é assim.** Quem cuida da instalação física controla o que roda nela, e cada organização escolhe o que usa (decisão 10). O registro é do owner da organização e do auditor, e nunca do administrador da instância (decisão 12). Duas organizações na mesma instância não enxergam nada uma da outra (decisão 9). Quem é cada papel e o que ele pode fazer são da segurança e permissões; o console só mostra a cada um o que elas permitem (MF-101).

**Exemplo.** A Farma Vida é uma rede de 40 farmácias com o mAIg na própria rede. Ela tem duas organizações na instância: a Farma Vida, das farmácias, e a Farma Vida Distribuição, da distribuidora do grupo. No mesmo dia, três pessoas entram no console.

1. Marta, da TI do cliente, entra como administrador da instância. Vê as duas organizações, os apps instalados e o estado e a versão de cada um. Não encontra o registro de nenhuma das duas.
2. Paulo, diretor de operações, entra como owner da organização Farma Vida. Vê os apps liberados para ela, os bancos, a IA, as pessoas, o consumo e o registro. Não vê nada da Farma Vida Distribuição.
3. Renata, da área de segurança, entra como auditora da Farma Vida. Vê o registro da organização, e nenhum ajuste fica ao alcance dela.

**Quando dá errado.** Renata tenta mudar o limite de gasto de IA do Horus e não consegue: o auditor só lê (decisão 12). Marta procura saber quem perguntou o quê ao Horus e não encontra: o registro não é dela (decisão 12).

### A parte da instância: o administrador da instância

**Em resumo:** na parte da instância, o administrador da instância abre as organizações, cria o usuário do primeiro owner da organização, instala os kits e os apps e acompanha o estado e as versões. Nunca vê o registro das organizações.

**Quem ocupa o papel.** Na infraestrutura do cliente, é a TI do cliente. Na infraestrutura da Maind, é a equipe da Maind. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: na hospedagem da Maind, é a Maind quem cria o usuário com que o owner da organização entra na tela de configuração (D-271 do Horus).

**O que faz no console, assunto por assunto.**

- **Cria as organizações da instância e, quando for o caso, as exclui.** As regras de criar, excluir e manter as organizações separadas são das organizações e instâncias (MF-107).
- **Cria o usuário do primeiro owner da organização.** Como esse owner da organização recebe o primeiro acesso e define a própria senha é da segurança e permissões (MF-101).
- **Instala o kit de instalação.** É o pacote, com um certificado digital, que a Maind entrega depois de fechada a contratação de um app. O certificado é uma espécie de carteira de identidade digital, que o mAIg usa para conferir a contratação com a Maind (MF-103).
- **Instala cada app na instância, uma vez só,** mesmo que várias organizações o usem (MF-104).
- **Acompanha as instalações, o estado e as versões** dos apps e da própria instância (decisão 12). O que esse acompanhamento mostra é das organizações e instâncias (MF-107).

**O que não faz nem vê.** Não vê o registro das organizações: nem quem pediu o quê, nem quando, nem por qual app (decisão 12). Também não configura os bancos e a IA das organizações, que ficam com o owner da organização (D-273 do Horus). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o painel de quem administra a instalação só enxerga contagens das pessoas das organizações, e não os dados delas (D-261 do Horus).

**Por que é assim.** Nenhum app novo passa a rodar na instância sem passar pelo administrador da instância (decisão 10). Mas o que cada organização faz é dela: se o administrador da instância visse o registro, a equipe da Maind veria, nas instâncias da Maind, o registro de todos os clientes, e o isolamento entre as organizações se quebraria (decisão 12).

**Exemplo.** Marta prepara a organização da Farma Vida.

1. Marta entra no console da instância que ela instalou na rede da Farma Vida.
2. Cria a organização Farma Vida e o usuário de Paulo como owner da organização.
3. Recebe da equipe da Maind o kit do Horus e o instala. O mAIg faz o handshake contratual, o aperto de mão digital em que ele se apresenta com o certificado a um servidor da Maind, que confere a contratação e libera o Horus para a organização (decisão 10).
4. Instala o Horus na instância, uma vez só.
5. Daqui em diante, Marta acompanha o estado e a versão do Horus. O que a Farma Vida configura e pergunta não aparece para ela.

**Quando dá errado.** Marta exclui por engano a organização errada. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: excluir uma organização apaga tudo o que há dela, e só dela, inclusive a configuração, sem volta (D-278 do Horus). O detalhe é das organizações e instâncias (MF-107).

### A parte da organização: o owner da organização

**Em resumo:** na parte da organização, o owner da organização põe os apps para funcionar: libera e configura os apps, liga os bancos e a IA, cuida das pessoas, nomeia o auditor e consulta o registro e o consumo.

**O que faz no console, assunto por assunto.**

- **Os apps.** Libera e configura cada app que a organização contratou e que o administrador da instância instalou: as permissões, os bancos e as IAs que ele usa e os ajustes. Quando um app para, a configuração dele fica guardada, e é o owner da organização quem decide se a apaga (decisões 10 e 14). As regras são da gestão dos apps (MF-104).
- **Os bancos.** Cadastra a ligação só de leitura com cada banco de dados da organização, o lugar onde ela guarda as informações do dia a dia. A senha do banco vai para o cofre, o lugar trancado do mAIg de onde nenhum app a tira. Diz também quais apps leem cada banco (MF-105).
- **A IA.** Cadastra as chaves dos provedores de IA. O provedor é a empresa que oferece os modelos de IA, os programas que entendem uma pergunta e escrevem a resposta; a chave é a senha de acesso a ele, e é do cliente. Escolhe os modelos que cada app pode usar, põe os limites e acompanha o consumo e o custo por app (MF-106).
- **As pessoas.** Dá acesso às pessoas que usam os apps. Onde fica o cadastro delas, no núcleo do mAIg ou em cada app, ainda está em aberto (MF-101).
- **Os jeitos de entrar.** Na primeira versão, as pessoas entram por usuário e senha ou pela conta Google (decisão 16). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização liga ou desliga cada jeito de entrar (D-291 do Horus). As regras do login são da segurança e permissões (MF-101).
- **O auditor.** Nomeia o auditor da organização (decisão 12).
- **O registro.** Consulta o registro da organização, o log: a anotação de cada pedido dos apps, com o que leram, em nome de quem e quando (MF-102).
- **O fim de um contrato.** É ele quem é avisado de que um contrato está para acabar (decisão 13). Como o aviso chega é da contratação dos apps (MF-103).

**Por que é assim.** Cada organização escolhe o que usa, e quem escolhe é alguém dela (decisão 10). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: em qualquer hospedagem, quem configura os bancos e a IA é o owner da organização, e a equipe da Maind só dá suporte (D-273 do Horus). Assim, a equipe da Maind não precisa conhecer, por rotina, as senhas dos bancos de cada cliente.

**O que se abre mão.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o preço dessa escolha é que o owner da organização precisa saber configurar um banco e uma IA, com o apoio da Maind (D-273 do Horus). Hipótese: com a documentação e o suporte, ele consegue fazer isso sozinho.

**Exemplo.** O primeiro dia de Paulo no console.

1. Paulo entra pelo primeiro acesso que Marta lhe entregou e define a própria senha (MF-101).
2. Cadastra a ligação só de leitura com o banco de vendas da Farma Vida. A senha vai para o cofre.
3. Cadastra a chave do provedor de IA da Farma Vida, escolhe os modelos permitidos ao Horus e põe um limite de gasto.
4. Libera o Horus para a organização e permite que ele leia o banco de vendas.
5. Dá acesso a Ana, gerente comercial, a pessoa que usa o app.
6. Nomeia Renata auditora da organização.
7. Ana já pode perguntar ao Horus. No fim do mês, Paulo vê no console quanto o Horus gastou de IA.

**Quando dá errado.**

- **Paulo apaga a configuração de um app parado.** Uma renovação depois disso não traz o app de volta como estava: a configuração precisa ser refeita (decisão 14).
- **Paulo tira do Horus, sem querer, a permissão de ler o banco de vendas.** O núcleo passa a recusar os pedidos do Horus a esse banco, e cada recusa fica no registro (decisão 5). Paulo devolve a permissão no console.
- **A organização não fica pronta.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a organização só passa a ativa com a conexão confirmada, ao menos um banco e a IA configurados (D-277 do Horus). O detalhe é das organizações e instâncias (MF-107).

### O auditor no console

**Em resumo:** o auditor entra no console para ler o registro da organização que o nomeou. Só lê: não muda nenhuma configuração.

**O que faz.** Consulta o registro da organização: o que cada app pediu, em nome de quem, que banco leu, quanto de IA usou e quando. O que o registro guarda e como se consulta é do registro e auditoria (MF-102).

**O que não faz nem vê.** Não muda nenhuma configuração: nem um app, nem um banco, nem uma IA, nem uma pessoa. Não vê o registro de outras organizações (decisão 12).

**Por que no console.** O registro é do núcleo, e o console é o lugar único onde o que o núcleo guarda se consulta. É a separação de funções: quem configura não é quem confere, e a área de segurança do cliente confere tudo sem poder alterar nada (decisão 12).

**Exemplo.** Renata confere a semana do Horus.

1. Renata entra no console com o usuário de auditora.
2. Abre o registro da Farma Vida e vê os pedidos do Horus: quais bancos leu, qual IA usou, em nome de quem e quando.
3. Encontra pedidos recusados ao banco de pessoal, que Paulo nunca liberou ao Horus.
4. Quer saber também se Paulo mudou alguma permissão do Horus naquela semana, e encontra a resposta no mesmo registro.

**Os atos de quem configura.** As mudanças feitas no console, como liberar um app ou trocar uma permissão, também entram no registro, e é por isso que o passo 4 tem resposta. O que entra e por quê é do registro e auditoria (MF-102).

### O que fica fora do console

**Em resumo:** o console cuida do que o núcleo governa. O que é próprio de cada app fica no app, e a pessoa que usa o app nunca precisa entrar no console.

**O que fica de fora, e onde mora.**

- **A configuração própria de cada app.** O que é só do app, como as regras internas dele e o que cada pessoa vê nas telas dele, fica no próprio app. Um agendamento de relatório no Horus, por exemplo, é do Horus.
- **O trabalho da pessoa que usa o app.** Ela usa as telas do app, e não o console.
- **Instalar o próprio mAIg nos servidores e liberar a saída da rede.** Isso vem antes de o console existir, e é das organizações e instâncias e da conexão de dentro para fora (MF-107, MF-108).
- **A negociação e o preço.** São do trâmite comercial entre a Maind e a empresa, fora do mAIg.

**Por que é assim.** O console reúne o que é comum a todos os apps. Se cada app pusesse nele as suas telas, o console viraria um pedaço de cada app, e a fronteira entre o mAIg e os apps se apagaria.

**O que se abre mão.** O owner da organização trabalha em dois lugares: no console, para o que é do núcleo, e no app, para o que é do app. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização usa o Horus e a tela de configuração do middleware (D-261 do Horus).

**Exemplo.** Ana, gerente comercial, quer um relatório de vendas toda segunda-feira.

1. Ana nunca entra no console. Entra no Horus e cria o agendamento ali, porque ele é do Horus.
2. O limite de gasto de IA que vale para esse relatório é o que Paulo pôs no console para o Horus.
3. Para mudar o limite, Paulo vai ao console; para mudar o dia do relatório, Ana vai ao Horus.

**O que ainda está em aberto.** Onde se cadastram as pessoas que usam os apps define se elas aparecem no console ou em cada app (MF-101). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o convite de uma pessoa nasce dentro do Horus, e o owner da organização o aprova na tela de configuração (D-262 do Horus).

### O mesmo console nas duas hospedagens

**Em resumo:** a instância pode rodar na infraestrutura do cliente ou na da Maind, e o console é o mesmo nas duas. Muda quem faz o papel de administrador da instância e onde ficam as senhas.

**As duas hospedagens.** Hospedar é dar lugar para um sistema rodar. Na infraestrutura do cliente, a instância roda nas máquinas da empresa, e a TI do cliente faz o papel de administrador da instância. Na infraestrutura da Maind, a empresa não instala nada, e a equipe da Maind faz esse papel (decisão 9).

**O que não muda.** O owner da organização configura os bancos e a IA do mesmo jeito, no mesmo console. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a diferença entre as hospedagens é só o local físico, e o owner da organização acessa a mesma tela de configuração nas duas (D-271 do Horus).

**O que muda.** Na infraestrutura da Maind, o banco precisa ser alcançável pela Maind, e as senhas desses clientes ficam no cofre da Maind (decisão 9). No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: quem opera a instalação da Maind segue podendo, tecnicamente, alcançar as senhas guardadas nela, e por isso a promessa de que a Maind não vê as senhas só vale por inteiro com a instalação na casa do cliente (D-273 do Horus).

**Exemplo.** E se a Farma Vida não quisesse instalar nada.

1. A Farma Vida usa uma instância da Maind, onde convivem organizações de outras empresas.
2. A equipe da Maind, no papel de administrador da instância, cria a organização Farma Vida e o usuário de Paulo, e instala o Horus.
3. Paulo entra no mesmo console e configura o banco e a IA como faria na própria rede. O banco precisa ser alcançável pela Maind.
4. Renata lê o registro da Farma Vida no console. A equipe da Maind vê o estado e a versão do Horus, mas não o registro (decisão 12).

**O que ainda está em aberto.** Por onde o owner da organização, o auditor e o administrador da instância chegam ao console, sobretudo quando a instância está dentro da rede do cliente, é um ponto novo de "O que ainda falta decidir".

### O suporte da equipe da Maind

**Em resumo:** a equipe da Maind ajuda o owner da organização a configurar, antes e depois da venda, mas não configura no lugar dele.

**Como funciona.** O owner da organização faz cada configuração no console. A equipe da Maind explica, orienta e tira dúvidas. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a equipe da Maind dá suporte técnico, antes e depois da venda, mas não configura pelo owner da organização, e a chave de IA que a Maind der a uma organização também é cadastrada pelo owner da organização (D-273 do Horus).

**Por que é assim.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a responsabilidade é a mesma nas duas hospedagens, e a equipe da Maind deixa de conhecer, por rotina, as senhas dos bancos de cada cliente (D-273 do Horus).

**Exemplo.** Paulo não sabe que modelo de IA escolher para o Horus.

1. Paulo chama a equipe da Maind.
2. A equipe explica o que cada modelo faz e quanto tende a custar.
3. Paulo escolhe e grava a escolha no console.
4. Ninguém da Maind mexeu na parte da organização.

**Quando dá errado.** Um cadastro de banco não funciona, e a equipe da Maind precisaria ver o que Paulo vê para achar o erro. Como o suporte enxerga o bastante para ajudar, sem ver o que é da organização, é um ponto novo de "O que ainda falta decidir".

### Quando dá errado

**Em resumo:** os casos mais prováveis desta parte, com o que a pessoa vê e o que o mAIg faz; os casos de cada papel estão nos tópicos acima.

- **O owner da organização sai da empresa ou fica fora por um tempo.** Só ele configura a parte da organização, e ninguém mais libera um app ou troca uma chave. Quem assume, e quantos owners da organização uma organização pode ter, está em aberto na segurança e permissões (MF-101).
- **A instância fica fora do ar.** O console, que é a tela da instância, fica fora junto, e ninguém configura nada até ela voltar. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: cada organização tem uma página de status, que abre sem login e diz desde quando a ligação está fora (D-283 do Horus). O detalhe é da conexão de dentro para fora (MF-108).
- **Alguém tenta fazer o que o papel não permite.** O console não deixa: o auditor não muda configuração, o administrador da instância não vê o registro, e o owner da organização não vê outra organização (decisões 9 e 12).

### A primeira e a segunda versão do console

**Em resumo:** a primeira versão do console traz tudo o que a versão 2.0 do Horus usa. A segunda acrescenta os servidores MCP e o login da empresa.

**Na primeira versão.** A parte da instância, com as organizações, os kits, os apps, o estado e as versões. A parte da organização, com os apps, os bancos, a IA, as pessoas, os jeitos de entrar por usuário e senha e pelo Google, o auditor e o registro (decisão 16).

**Na segunda versão, junto com a versão 2.1 do Horus.** Entram dois assuntos (decisão 16).

- **Os servidores MCP.** MCP é um padrão que dá à IA ferramentas extras, e um servidor MCP é o programa da empresa que as oferece, como um que consulta o estoque. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra os servidores MCP, na tela de configuração, como os bancos e a IA (D-287 do Horus). As regras são dos servidores MCP (MF-111).
- **O login da empresa.** É a entrada com o sistema de identidade que a empresa já usa nos sistemas dela. No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: ele entra como mais um jeito de entrar, no mesmo lugar onde o owner da organização liga e desliga os outros (D-291 do Horus). As regras são do login da empresa (MF-112).

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

1. **Uma organização nova configurada sem chamado.** Marta cria a organização e o usuário de Paulo e instala o Horus. Paulo, sozinho no console, com o suporte da Maind só para tirar dúvidas, cadastra o banco, a chave de IA, os modelos e o limite, libera o Horus, dá acesso a Ana e nomeia Renata. Ana faz a primeira pergunta e recebe a resposta. Quem confere é a TI do cliente: Marta atesta que não configurou nada da organização, e Renata encontra no registro a primeira pergunta de Ana.
2. **Cada papel vê só a sua parte.** Diante da área de segurança do cliente, Marta, Paulo e Renata entram no console, um depois do outro. Marta vê o estado e a versão do Horus, mas não o registro. Paulo vê a organização dele, e não a outra organização da instância. Renata vê o registro e não consegue mudar nenhuma configuração.

## Retorno para o negócio

- **Entrar.** O "controle num lugar só" deixa de ser promessa e vira um lugar que a TI do cliente vê na avaliação de segurança. É um argumento concreto na primeira venda.
- **Expandir.** O segundo app se configura no mesmo console, pelo mesmo owner da organização, do mesmo jeito que o primeiro. Não há um lugar novo a aprender a cada app.
- **Custo de atender.** O owner da organização configura sozinho, e a equipe da Maind só orienta. Hipótese: com a documentação e o suporte, o owner da organização dá conta sem que o suporte vire o caminho de sempre; no Horus, a mesma hipótese ficou a validar (D-273 do Horus).
- **Um console só.** O console é o mesmo nas duas hospedagens e para todos os apps: uma peça a construir, ensinar e manter.

## O que não inclui

- **As regras de cada assunto.** O console é o lugar; a regra é da mf dona: os papéis e as permissões (MF-101), o registro (MF-102), a contratação e o certificado (MF-103), instalar, pausar e retirar os apps (MF-104), os bancos (MF-105), a IA (MF-106), as organizações e o acompanhamento da instância (MF-107), a conexão e o estado dela (MF-108), a execução dos módulos (MF-109), os servidores MCP (MF-111) e o login da empresa (MF-112).
- **A configuração própria de cada app.** Fica no app; no Horus, nas telas do Horus.
- **As telas do app para a pessoa que usa o app.** São do app.
- **Instalar o próprio mAIg e liberar a rede.** São das organizações e instâncias e da conexão de dentro para fora (MF-107, MF-108).
- **A negociação, o contrato e o preço.** São do trâmite comercial, fora do mAIg.
- **O desenho das telas.** Como o console se apresenta fica para o desenho, depois que as regras de cada mf fecharem.

## Depende de

- `MF-101:Segurança e permissões`: quem entra no console e o que cada papel vê nele são os papéis e as permissões dessa mf. O console só mostra a cada um o que ela permite.
- `MF-107:Organizações e instâncias`: o console se divide em uma parte da instância e uma parte por organização. Sem instâncias e organizações, não há essas partes nem quem crie as organizações.

## Ponto de partida no Horus

- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o middleware tem uma base de configuração, com as pessoas e os detalhes da organização, e uma tela de configuração; as configurações de autenticação ficam nele, e o owner da organização e o administrador da instância entram sempre por usuário e senha (D-258 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com esse usuário, o owner da organização cadastra outros owners da organização, no máximo mais dois, ligados ao login da empresa (D-258 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: em qualquer hospedagem, os bancos e a IA são configurados na tela de configuração do middleware, e não no Horus (D-265 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: em qualquer hospedagem, quem configura os bancos e a IA é o owner da organização, a equipe da Maind dá suporte sem configurar por ele, e a chave de IA que a Maind der também é cadastrada pelo owner da organização (D-273 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a tela de configuração é a mesma nas duas hospedagens, o owner da organização a acessa nas duas, e na hospedagem da Maind é a Maind quem cria o usuário dele (D-271 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: o owner da organização cadastra e gere as pessoas pela tela de configuração, os dados delas ficam no middleware, fora da nuvem da Maind, e o painel da instância só enxerga contagens (D-261 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: entre os papéis da organização, só o owner da organização usa a tela de configuração; o convite de uma pessoa nasce no Horus e é aprovado por ele ali (D-262 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: só o owner da organização cadastra e gere os servidores MCP, na tela de configuração, como os bancos e a IA, na versão 2.1 (D-287 do Horus).
- No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a tela de configuração inclui definir como as pessoas da organização entram; na versão 2.0, usuário e senha e Google, que o owner da organização liga ou desliga, e na 2.1 o login da empresa, como mais um jeito no mesmo lugar (D-291 do Horus).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir, com o dono da Maind, por onde o owner da organização, o auditor e o administrador da instância chegam ao console.** *O que está em jogo:* com a instância dentro da rede do cliente e nenhuma porta de entrada aberta (decisão 6), o console se alcança com facilidade só de dentro dessa rede. Alcançá-lo de fora pediria passar pela conexão com a Maind, o que muda o que passa pela Maind; a mesma pergunta vale para o login das pessoas que usam os apps (MF-101).
- **Falta o dono da Maind decidir como a equipe da Maind dá suporte ao owner da organização no console sem ver o que é da organização.** *O que está em jogo:* um suporte que não vê nada ajuda pouco num cadastro que falha; um suporte que vê a parte da organização, nas instâncias da Maind, reabre o isolamento que a decisão 12 protege.
- **Também depende, e está explicado em outras mfs:** onde ficam e quem cadastra as pessoas que usam os apps (MF-101); quantos owners da organização uma organização pode ter e quem assume a parte dela no console quando o owner da organização sai (MF-101); o que o acompanhamento da instância mostra e quem atualiza o mAIg (MF-107); como chega o aviso do fim do contrato (MF-103); quantas versões dos apps podem conviver (MF-104).

## Decisões do PO para discutir

- **Decisão:** o auditor entra no console e lê ali o registro da organização, só para leitura. *Por que:* o objetivo do controle num lugar só pede que o que o núcleo guarda se consulte no mesmo lugar, e a decisão 12 só diz que o auditor lê. *Alternativa:* uma consulta do registro à parte, fora do console. *Reabrir se:* a área de segurança dos clientes preferir receber o registro nas ferramentas dela.
- **Decisão:** o console tem duas partes, a da instância e a de cada organização, e o administrador da instância usa o mesmo console. *Por que:* o mapa das mfs põe nesta mf a criação das organizações e o estado da instância. *Alternativa:* um painel da instância separado, como no Horus, em que só o owner da organização usava a tela de configuração (D-262 do Horus). *Reabrir se:* o arquiteto do mAIg mostrar que separar os dois reduz o risco de um papel ver o que não deve.
- **Decisão:** a pessoa que usa o app não entra no console. *Por que:* ela não configura nada do núcleo, e no Horus só o owner da organização usava a tela de configuração (D-262 do Horus). *Alternativa:* dar a ela uma parte pequena, como ver o próprio uso. *Reabrir se:* o ponto de onde ficam as pessoas pôr o cadastro e o login delas no núcleo.
- **Decisão:** tratar o console como o lugar, e não como a regra: cada assunto aponta para a mf dona, e o console não tem regras próprias além da divisão por papel. *Por que:* evita que esta mf repita ou contradiga as outras. *Alternativa:* concentrar no console as regras de configuração de todos os assuntos. *Reabrir se:* o dono da Maind achar a mf fina demais para ser essencial, e preferir distribuí-la pelas outras.
- **Decisão:** a configuração própria de cada app fica no app, e não no console. *Por que:* o console reúne só o que é do núcleo, e assim a fronteira entre o mAIg e os apps fica clara. *Alternativa:* deixar cada app pôr as suas telas de configuração dentro do console, para o owner da organização ter mesmo um lugar só. *Reabrir se:* cada owner da organização reclamar de trabalhar em dois lugares, como já se previa no Horus (D-261 do Horus).
- **Decisão:** ler que o console faz parte de cada instância e cai junto com ela. *Por que:* no Horus, a tela de configuração fazia parte do middleware e era a mesma nas duas hospedagens (D-258 do Horus, D-271 do Horus). *Alternativa:* um console fora da instância, por exemplo na nuvem da Maind. *Reabrir se:* o ponto de por onde se chega ao console levar o console para fora da instância.
- **Decisão:** propor, para discutir, que o console mostre ao owner da organização o que ainda falta para a organização ficar pronta, como o banco e a IA. *Por que:* no Horus, a organização só fica ativa com a conexão, um banco e a IA configurados (D-277 do Horus), e o owner da organização precisa saber o que falta. *Alternativa:* deixar só a regra de ativação e não dizer nada sobre o que o console mostra. *Reabrir se:* a mf das organizações e instâncias já tratar disso (MF-107).
- **Decisão:** manter as dependências do mapa e anotar uma lacuna nele: a gestão dos apps não depende do console, mas a liberação de um app pelo owner da organização acontece no console (MF-104). *Por que:* os bancos e a governança da IA dependem do console no mapa, e a gestão dos apps faz o mesmo tipo de configuração. *Alternativa:* deixar o mapa como está. *Reabrir se:* o dono da Maind preferir que o console dependa dos assuntos, e não o contrário.
- **Decisão:** a prova de valor usa a ativação de uma organização nova sem chamado e a divisão por papel, sem metas. *Por que:* são os dois resultados que a TI do cliente e o auditor conferem de fora. *Alternativa:* provar com a chegada de um segundo app configurado no mesmo console. *Reabrir se:* houver um segundo app antes da prova.
- **Decisão:** seguir o registro e auditoria, que põe no registro os atos de quem configura no console, e só apontar para ele, sem abrir aqui um ponto próprio (MF-102). *Por que:* o tema vive numa mf só, e sem esses atos o auditor não confere o que o owner da organização permitiu ou mudou (decisão 12). *Alternativa:* deixar o ponto em aberto também nesta mf. *Reabrir se:* o dono da Maind recusar essa decisão do PO no registro e auditoria.
- **Decisão:** deixar quantos owners da organização uma organização pode ter, e quem assume quando o owner da organização sai, na segurança e permissões, e só apontar para ela (MF-101). *Por que:* o ponto já está descrito ali por inteiro. *Alternativa:* descrevê-lo também aqui, pelo lado do console. *Reabrir se:* a decisão desse ponto pedir algo próprio do console, como uma parte da organização dividida entre owners da organização.
