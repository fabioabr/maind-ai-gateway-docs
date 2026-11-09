# MF-108:Funcionar sem abrir porta de entrada na rede

> O mAIg liga para a Maind de dentro da rede do cliente e mantém a ligação aberta; tudo o que os apps pedem corre por ela. A TI do cliente não abre nenhuma porta de entrada, só libera a saída para o endereço da Maind, e, se a ligação cair, o mAIg religa sozinho e guarda o que estava em andamento.

**Também chamada de:** Conexão de dentro para fora · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg abre, de dentro da rede da empresa cliente, uma conexão com a Maind e a mantém aberta, para que os apps da Maind conversem com ele sem que ninguém de fora precise entrar na rede. (decisão 6)

O mAIg, ou Maind AI Gateway ("gateway" quer dizer portão, em inglês), é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa. Cada produto entra nele como um app; o primeiro é o Maind Horus. As partes dos apps que ficam na nuvem da Maind precisam conversar com o mAIg, e a pergunta é quem liga para quem. Esta mf responde: quem liga é sempre o mAIg, de dentro para fora. É o que deixa a TI do cliente aprovar o mAIg sem abrir a rede.

## Quem ganha

- **TI do cliente.** A equipe de tecnologia da empresa, que cuida dos servidores e da rede. Deixa de receber o pedido mais difícil de aprovar, o de abrir uma porta de entrada, e passa a liberar só uma saída, para o endereço da Maind. Não precisa de endereço fixo na internet nem de mudar a rede. E, quando a internet cai, não precisa fazer nada para o mAIg voltar. (decisão 6)
- **De forma indireta, a equipe da Maind.** As pessoas da Maind que vendem, entregam e dão suporte veem a venda deixar de esbarrar na porta de entrada que muitas TIs recusam. Em troca, a Maind mantém sempre de pé o ponto onde os mAIg se conectam. (decisão 6)
- **De forma indireta, a pessoa que usa o app.** Uma queda curta da internet do cliente não faz o trabalho em andamento se perder. (decisão 6)

## A decisão que passa a ser possível

- **A TI do cliente passa a poder dizer sim ao mAIg sem abrir a rede.** O que ela aprova é uma saída para o endereço da Maind, um pedido que quase toda TI aprova. (decisão 6)
- **A TI do cliente passa a poder instalar o mAIg atrás de qualquer rede**, sem endereço fixo na internet. (decisão 6)
- **A dor que some:** a queda da internet do cliente deixa de exigir alguém da TI para religar o mAIg ou refazer o que estava em andamento. (decisão 6)

## Como funciona

### A ligação que o mAIg abre para fora

**Em resumo:** é o mAIg quem liga para a Maind e mantém a ligação aberta. Ninguém de fora começa uma conversa com ele.

**Quem é quem.**

- **A rede do cliente** é o conjunto de computadores da empresa, ligados entre si e protegidos de quem está fora.
- **O firewall** é o muro de proteção da rede: decide o que pode entrar e o que pode sair.
- **Uma porta de entrada** é uma abertura nesse muro que deixa alguém de fora começar uma conexão com um computador de dentro.
- **Liberar a saída** é deixar um computador de dentro começar uma conexão com um endereço de fora; no mAIg, só o endereço da Maind.
- **O ponto de conexão da Maind** é o lugar, na nuvem da Maind, onde os mAIg de todos os clientes se conectam. A nuvem da Maind são os servidores da Maind, computadores sempre ligados que se alcançam pela internet.
- **O IP fixo** é um endereço de internet que não muda. Quem recebe ligações de fora costuma precisar de um; quem só liga para fora, não.

**Como funciona.** O mAIg abre a conexão com a Maind e a mantém aberta. As partes de fora dos apps, as que rodam na nuvem da Maind, mandam os pedidos e recebem as respostas por ela. Como foi o mAIg quem começou a conexão, a TI do cliente só liberou a saída, e nenhuma porta de entrada foi aberta. (decisão 6)

**Por que é assim.** Quase toda TI aprova liberar uma saída; abrir uma porta de entrada é um pedido grande, que muitas recusam. A ligação de dentro para fora também funciona sem IP fixo e atrás de qualquer rede. Ficaram de fora os apps ligarem para o mAIg, que obrigaria o cliente a abrir uma porta de entrada, e os dois modos à escolha de cada cliente, que dobrariam o trabalho de construir, testar e dar suporte. (decisão 6)

**O que se abre mão.** A Maind mantém sempre de pé o ponto onde os mAIg se conectam. E o mAIg precisa reconectar sozinho e guardar o que estava em andamento, assuntos de dois tópicos mais abaixo. (decisão 6)

> **Analogia:** um ramal de telefone que só faz ligações para a central e nunca recebe ligação de fora. Ele liga uma vez e deixa a linha aberta, e a central fala por ela sempre que precisa. **Onde a analogia para:** no telefone, quando a ligação cai, a conversa se perde; o mAIg religa sozinho e guarda o que estava em andamento.

**Um desenho que o mercado já aceita.** O gateway de dados local da Microsoft (on-premises data gateway) funciona assim: a empresa o instala na própria rede, e ele abre só conexões de saída para a nuvem, sem nenhuma porta de entrada aberta. Ele serve a vários produtos da Microsoft, como o Power BI, o Power Apps, o Power Automate e o Azure Logic Apps. É a prova de que o desenho "o componente liga para fora" já é aceito pela TI de muitas empresas.

**Exemplo.** Marta, da TI da Farma Vida, uma rede de 40 farmácias, prepara a rede para o mAIg.

1. Marta instala o mAIg num servidor da Farma Vida, um computador que fica ligado o tempo todo, prestando um serviço.
2. No firewall, libera só a saída para o endereço da Maind. Não abre nenhuma porta de entrada.
3. O mAIg liga para o ponto de conexão da Maind e deixa a ligação aberta.
4. A Farma Vida não tem IP fixo, e isso não faz diferença: quem liga é o mAIg.
5. Na revisão de segurança, Marta mostra que o firewall não tem porta de entrada nenhuma aberta para o mAIg.

**O que ainda está em aberto.** Que endereço exato a TI do cliente libera, que compromisso a Maind assume para manter de pé o ponto de conexão e o que se oferece a um cliente que não libera nem a saída estão em "O que ainda falta decidir".

### O que corre pela ligação

**Em resumo:** pela ligação que o mAIg abriu passam os pedidos das partes de fora dos apps, as respostas e a conferência da contratação com a Maind. Dos dados da empresa, passa só o resultado pronto.

**Quem é quem.**

- **A parte de fora de um app** roda fora do mAIg; no Horus, é a que roda na nuvem da Maind, com as telas. (decisão 4)
- **O módulo de um app** é a parte interna, que roda isolada dentro do mAIg e só usa os serviços do núcleo, o que vem pronto no mAIg para todos os apps. No Horus, é onde a pergunta vira resposta. (decisão 4)
- **O handshake contratual** é o aperto de mão digital em que o mAIg conversa com um servidor da Maind Tech, o computador da Maind que confere as contratações, para conferir a contratação e liberar o app. (decisão 10)

**O que passa.** De ida, os pedidos que a parte de fora de cada app manda ao módulo dele; no Horus, a pergunta da pessoa. De volta, a resposta pronta. O handshake contratual também conversa com a Maind pela ligação que o mAIg abriu. Os dados crus da empresa não passam: o módulo os trabalha dentro do mAIg, e à nuvem só volta o resultado. (decisão 4, decisões 6 e 10)

**Um app novo usa a mesma ligação.** Um segundo app da Maind não pede à TI do cliente uma liberação nova de rede: a parte de fora dele responde pela ligação que o mAIg já mantém. É uma das razões de a segurança se aprovar uma vez só. (decisões 3 e 6)

**Exemplo.** Ana, gerente comercial da Farma Vida, quer saber quanto cada farmácia vendeu em outubro.

1. Ana digita a pergunta nas telas do Horus, na nuvem da Maind.
2. A parte de fora do Horus manda a pergunta ao módulo do Horus pela ligação que o mAIg da Farma Vida mantém aberta.
3. O módulo pede os dados e a IA ao núcleo, que confere a permissão, lê o banco de dados de vendas só para consulta, usa a chave de IA da Farma Vida (a senha de acesso ao provedor de IA) e anota tudo no registro, a anotação de tudo o que acontece. (MF-101, MF-102, MF-105, MF-106)
4. A resposta pronta volta pela mesma ligação, e Ana vê a tabela na tela.
5. Nada disso pediu uma porta de entrada: tudo correu pela ligação que o mAIg começou.

### O certificado dentro da ligação

**Em resumo:** a ligação ser aberta de dentro protege a rede; o certificado protege a conversa. Dentro da ligação, só é aceita a parte de fora de um app que prove, com um certificado válido, que é um app contratado da Maind.

**Quem é quem.**

- **O certificado digital** é uma espécie de carteira de identidade digital: um arquivo que diz quem é o portador e traz a assinatura de quem o emitiu, que não se falsifica sem que se perceba.
- **O kit de instalação** é o pacote, com o certificado, que a Maind entrega depois de fechada a contratação. (decisão 10)
- **"Vale dentro da ligação"** quer dizer que a conferência acontece pela conexão que o mAIg abriu, e não por uma porta aberta à parte. (decisão 6)

**Como funciona.** O núcleo do mAIg confere o certificado da parte de fora de cada app dentro da ligação que o próprio mAIg abriu. Sem certificado válido, ela não é aceita, e o app não funciona. O handshake contratual, que libera o app só para a organização que o contratou (a organização é o espaço de um cliente dentro do mAIg), usa o certificado do kit e também corre por essa ligação. (decisão 6, decisões 10 e 11)

**Por que é assim.** As duas proteções se somam: ninguém entra na rede sem ser chamado, e só conversa com o mAIg quem prova ser um app contratado. Sem o certificado, bastaria alguém se passar pela Maind do outro lado da ligação. (decisões 6 e 10)

**Quando dá errado.** O certificado de um app vence sem ser renovado. O app para para aquela organização; o fim do contrato, sozinho, não o pararia. As outras organizações atendidas pela mesma instalação do mAIg, a instância, seguem como antes. A configuração do app fica guardada até a organização renovar ou o owner da organização, a pessoa que responde por ela no mAIg, apagá-la. (decisão 11, decisões 13 e 14)

**O que ainda está em aberto.** O formato do handshake contratual, a validade do certificado e a política de troca e cancelamento dele são pontos de Contratação dos apps (MF-103).

### Quando a ligação cai: o mAIg religa sozinho

**Em resumo:** se a ligação cair, o mAIg reconecta sozinho, sem ninguém da TI do cliente fazer nada. (decisão 6)

**Quem é quem.**

- **Reconectar** é o mAIg abrir de novo a ligação com a Maind, do mesmo jeito que abriu a primeira: de dentro para fora.
- **O que pode derrubar a ligação:** a internet do cliente cair; o ponto de conexão da Maind sair do ar; uma mudança no firewall bloquear a saída; a máquina do mAIg ser desligada. Nos dois primeiros casos, o mAIg religa sozinho quando o caminho volta. Nos dois últimos, alguém da TI do cliente precisa desfazer o bloqueio ou religar a máquina.

**Por que é assim.** É o outro lado da ligação aberta de dentro: como ninguém de fora pode ligar para o mAIg, só ele pode refazer a ligação. Se dependesse de uma pessoa, cada queda de internet viraria um chamado. (decisão 6)

**Exemplo.**

1. Numa noite, a internet da Farma Vida cai por alguns minutos, e a ligação cai junto.
2. Enquanto isso, a parte de fora do Horus não alcança o módulo dele na Farma Vida.
3. A internet volta, e o mAIg religa sozinho para o ponto de conexão da Maind.
4. Marta não faz nada. Se abrir o painel da instância, a parte do console do mAIg que mostra o estado da instalação, vê a ligação no ar. (MF-110)

**Quando dá errado.** A ligação não volta porque alguém mudou o firewall e bloqueou a saída para a Maind. O mAIg tenta, mas não consegue sozinho, e os apps daquela instância ficam sem ele até a TI do cliente liberar a saída de novo. Quem é avisado nesse caso, e depois de quanto tempo, ainda está em aberto.

### Guardar o que estava em andamento

**Em resumo:** quando a ligação cai no meio de um trabalho, o mAIg guarda o que estava em andamento, para que nada se perca quando ela volta. O que exatamente se guarda, por quanto tempo e o que a pessoa recebe depois ainda estão em aberto. (decisão 6)

**Quem é quem.**

- **Em andamento** é o que já começou e ainda não terminou: no Horus, uma pergunta que chegou ao módulo e cuja resposta ainda está sendo preparada.
- **Guardar** é não descartar esse trabalho na queda, para que ele possa seguir quando a ligação voltar.

**Por que é assim.** Sem isso, cada queda faria a pessoa refazer o pedido, e um trabalho longo recomeçaria do zero. É o que separa o mAIg do telefone da analogia, em que a ligação cai e a conversa se perde. O preço: o mAIg precisa saber guardar e retomar, mais trabalho no núcleo. (decisão 6)

> **Analogia:** um carteiro que encontra a ponte fechada não joga a carta fora: guarda na bolsa e entrega quando a ponte reabre. **Onde a analogia para:** a carta pode esperar dias; no mAIg, falta uma regra de até quando guardar, porque uma resposta que chega muito depois pode já não servir.

**Exemplo.**

1. Ana pergunta ao Horus as vendas de outubro por farmácia.
2. A pergunta chega ao módulo do Horus, que começa a preparar a resposta.
3. No meio do trabalho, a internet da Farma Vida cai, e o mAIg guarda o que estava em andamento.
4. A internet volta, o mAIg religa sozinho, e o trabalho não se perdeu.
5. O que Ana vê na tela durante a queda é do app, e não do mAIg; no Horus, o ponto de partida é o aviso explicado mais abaixo.

**Quando dá errado.** A ligação demora a voltar. As decisões não dizem por quanto tempo o mAIg guarda o trabalho, o que acontece com ele se a ligação não voltar a tempo, nem se a pessoa recebe a resposta quando a ligação volta ou precisa pedir de novo. São os pontos em aberto deste tópico.

### O estado da ligação: quem vê e quem é avisado

**Em resumo:** o administrador da instância acompanha o estado da instância, e a ligação com a Maind faz parte dele. No Horus, cada organização tem também uma luz de estado e uma página de status, que abrem mesmo com a ligação fora.

**Quem é quem.**

- **O administrador da instância** cuida da instalação física e vê o que é da instância: as instalações, o estado e as versões. É a TI do cliente, quando o mAIg roda na infraestrutura do cliente, e a equipe da Maind, quando roda na da Maind. (decisão 12)
- **A ligação é da instância.** Instância é cada instalação física do mAIg, e uma instância atende uma ou mais organizações, isto é, os espaços dos clientes dentro dela (decisão 9). Todas as organizações de uma instância dependem da mesma ligação com a Maind.

**O que vem do Horus.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma:

- **A luz de estado.** A tela de entrada da organização mostra uma luz com três cores, sempre com texto ao lado: verde, "No ar"; amarela, "Instável", quando a peça é alcançada, mas com falhas ou lentidão nos últimos minutos; vermelha, "Fora do ar". Com o amarelo, a pessoa entra normalmente. (D-284 do Horus)
- **A página de status.** Cada organização tem uma página no endereço dela que abre sem login, isto é, sem a pessoa entrar no sistema. Mostra se a ligação está no ar ou fora, desde quando, o último contato e as quedas dos últimos noventa dias, com início, fim e duração, sem a versão instalada nem nome de pessoa. (D-283 do Horus)
- **O painel e o aviso.** O painel de quem administra a instalação mostra o estado e a versão da peça de cada organização, e, quando ela para, quem é avisado é o responsável pelo serviço: a Maind, na instalação dela; o cliente, na dele. (D-275 do Horus)
- **A queda compartilhada.** Com a instalação compartilhada da Maind fora do ar, a queda alcança todas as organizações dela de uma vez; com a do cliente, só as dele. (D-283 do Horus)

**Por que a página fica antes do login, no Horus.** A entrada das pessoas mora na peça que deu origem ao mAIg, e por isso cai junto com a ligação (D-258, D-283 do Horus). Uma tela de status atrás do login não abriria justamente quando mais se precisa dela. (D-283 do Horus)

**Exemplo**, com o ponto de partida do Horus.

1. A internet da Farma Vida fica instável numa manhã. Ana vê a luz amarela, "Instável", e entra normalmente.
2. A ligação cai de vez, e a luz fica vermelha, "Fora do ar".
3. Ana abre a página de status da organização, sem login, e lê desde quando a ligação está fora.
4. Marta vê no painel da instância que a ligação caiu e vai conferir a internet da empresa.

**O que ainda está em aberto.** Se a luz e a página de status passam a ser do mAIg, iguais para todos os apps, ou continuam de cada app, e quem é avisado quando a ligação cai, em "O que ainda falta decidir".

### O que os apps fazem enquanto a ligação está fora

**Em resumo:** o mAIg não desenha a tela dos apps. Com a ligação fora, cada app decide o que mostra e o que faz com o trabalho marcado para aquela hora. No Horus, já há um ponto de partida para isso.

**Quem é quem.**

- **Do lado da Maind**, a parte de fora do app fica sem caminho até o módulo enquanto a ligação está fora. (decisão 4)
- **Uma rodada**, no Horus, é cada vez que um agendamento, um alerta ou um agente, tarefas que o Horus faz sozinho numa hora marcada, roda nessa hora.

**O que vem do Horus.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma:

- **Um aviso próprio, e não um erro.** A tela de entrada e o app dizem que a ligação da organização está fora do ar desde a última vez que o Horus a alcançou, que o resto do Horus segue no ar e que a pessoa deve procurar o owner da organização, e trazem um botão para tentar de novo. (D-283 do Horus)
- **A entrada cai junto.** As configurações de login, a entrada no sistema, ficam na peça que deu origem ao mAIg; com a ligação fora, a pessoa não consegue entrar. (D-258, D-283 do Horus)
- **A rodada espera até uma hora.** Se a ligação está fora na hora marcada, o Horus espera até uma hora, ou até a próxima rodada da mesma agenda, se vier antes. Se a ligação volta nesse prazo, a rodada roda uma vez, atrasada, e diz que atrasou, como em "Gerado às 08h20, previsto 08h00". Passado o prazo, a rodada é pulada, e a agenda segue; nunca roda mais de uma rodada atrasada por agenda. (D-285 do Horus)
- **Quem é avisado da rodada pulada.** Só a pessoa responsável pelo agendamento, na área de avisos do Horus, com a hora e o motivo; quem só recebe o relatório não é avisado. (D-293 do Horus)

**Por que é assim, no Horus.** O aviso protege a confiança: a pessoa sabe onde está o problema, e quem é chamado é a TI do cliente, não a Maind. A espera de uma hora cobre a queda curta sem uma rajada de relatórios atrasados, de mensagens ou de gasto de IA. (D-283, D-285 do Horus)

**Por que a tela é do app.** O mAIg serve a vários apps, e cada um sabe o que faz sentido para quem o usa: um app que responde perguntas pode tratar uma queda de um jeito diferente de um que gera documentos. Por isso a tela não faz parte desta mf.

**Exemplo**, com o ponto de partida do Horus.

1. Paulo, diretor de operações e owner da organização da Farma Vida, tem um relatório de vendas agendado para as 8h.
2. Às 7h50, a internet da Farma Vida cai. Às 8h, o Horus não alcança o módulo e espera.
3. Às 8h20, a internet volta, e o mAIg religa sozinho.
4. O relatório roda uma vez, atrasado, e diz "Gerado às 08h20, previsto 08h00".
5. Se a internet só voltasse depois das 9h, a rodada seria pulada, e só Paulo, o responsável pelo agendamento, seria avisado.

### Quando a ligação está de pé, mas a conversa é recusada

**Em resumo:** mesmo com a ligação no ar, a conversa pode ser recusada: por um certificado que não vale ou por uma versão do mAIg velha demais.

**Quem é quem.** Uma versão é cada edição do mAIg ou de um app, com o que foi corrigido ou acrescentado. Recusar é a parte de fora do app não aceitar conversar com aquele mAIg.

**A versão velha demais.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: com a peça numa versão mais velha que a anterior, a parte do Horus na nuvem da Maind recusa a conversa, mesmo com a ligação no ar, e a luz fica vermelha com o texto "Atualização necessária". (D-292 do Horus) A regra inteira, com o que cada papel vê e por que é assim, está em Gestão dos apps (MF-104).

**O certificado que não vale.** Sem certificado válido, a parte de fora de um app não é aceita, como explica o tópico do certificado. (decisões 6 e 10)

**Exemplo**, com o ponto de partida do Horus.

1. Marta adia por muito tempo a atualização do mAIg da Farma Vida, e a versão dele fica velha demais.
2. A parte de fora do Horus deixa de aceitar a conversa, e Ana vê a luz vermelha com "Atualização necessária".
3. Marta vê no painel da instância o motivo e a versão, atualiza o mAIg, e a conversa volta.

**O que ainda está em aberto.** Quantas versões do mAIg e dos apps podem conviver é ponto de Gestão dos apps (MF-104); quem atualiza o mAIg é ponto de Organizações e instâncias (MF-107).

### A ligação nas duas hospedagens

**Em resumo:** a regra é a mesma nas duas hospedagens: o mAIg liga para fora. Mas a promessa de não abrir a rede vale por inteiro só com o mAIg na infraestrutura do cliente. (decisões 6 e 9)

**Quem é quem.** Hospedar é dar lugar para um sistema rodar. O mAIg roda na infraestrutura do cliente, nas máquinas e na rede dele, ou na da Maind. (decisão 9)

**Na infraestrutura do cliente.** O mAIg fica dentro da rede da empresa, lê o banco por dentro e liga para fora. A TI do cliente só libera a saída para o endereço da Maind, e nenhuma porta de entrada é aberta. É o caso em que esta mf entrega tudo o que promete.

**Na infraestrutura da Maind.** O mAIg roda nas máquinas da Maind, e a empresa não instala nada. Em troca, o banco da empresa precisa ser alcançável pela Maind, e as senhas dele ficam no cofre da Maind, o lugar trancado onde o mAIg guarda as senhas dos bancos. A ligação do mAIg com a nuvem da Maind segue a mesma regra, mas o caminho até o banco é outro assunto, ainda em aberto, de Bancos da empresa (MF-105). (decisão 9)

**Por que importa para a TI do cliente.** Quem escolhe a hospedagem na Maind precisa saber que o "sem porta de entrada" desta mf fala da ligação do mAIg, e não do caminho até o banco. Prometer mais do que isso seria prometer o que a hospedagem na Maind não entrega.

**Exemplo.**

1. A Farma Vida instala o mAIg na própria rede. Marta libera só a saída, e o banco de vendas não é alcançado de fora.
2. A Ótica Visão Clara, uma rede pequena de óticas sem equipe de TI, usa uma instância da Maind e não instala nada.
3. Para a Ótica, o banco precisa ser alcançável pela Maind. Esse caminho não é coberto por esta mf, e sim por Bancos da empresa (MF-105).

### Quando algo dá errado, em resumo

**Em resumo:** os problemas mais prováveis desta mf, o que a pessoa vê e o que o mAIg faz.

- **A internet do cliente cai.** A ligação cai junto; quando a internet volta, o mAIg religa sozinho e guarda o que estava em andamento. (decisão 6)
- **O ponto de conexão da Maind sai do ar.** Todos os mAIg que se conectam a ele ficam sem a ligação ao mesmo tempo; quando ele volta, cada um religa sozinho. Por isso a Maind o mantém sempre de pé. (decisão 6)
- **Alguém bloqueia a saída no firewall.** O mAIg não consegue religar sozinho; a TI do cliente precisa liberar a saída de novo.
- **O certificado de um app vence sem ser renovado.** O app para para aquela organização, e as outras organizações da instância seguem. (decisões 11 e 13)
- **O mAIg está numa versão velha demais.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: a conversa é recusada, e a luz mostra "Atualização necessária". (D-292 do Horus)
- **A pessoa tenta usar o app com a ligação fora.** No Horus, isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma: ela vê um aviso próprio, e não um erro, e pode abrir a página de status da organização, sem login. (D-283 do Horus)
- **Um cliente não libera nem a saída.** O mAIg na rede dele não consegue ligar para a Maind. O que se oferece a esse cliente ainda está em aberto.

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: nenhuma porta de entrada aberta.** Com o mAIg instalado na rede do cliente, a TI do cliente mostra, nas regras do próprio firewall, que não existe nenhuma porta de entrada aberta para o mAIg, só a saída para o endereço da Maind. Em seguida, a pessoa que usa o app faz uma pergunta e recebe a resposta. Quem confere: a TI do cliente, com as ferramentas dela, e o auditor, a pessoa nomeada pelo owner da organização para só ler o registro, que encontra o pedido ali.

**Demonstração 2: a queda e a volta sem ninguém agir.** Com um trabalho em andamento, a TI do cliente corta a internet do servidor do mAIg por alguns minutos e depois a devolve. O mAIg religa sozinho, o estado da ligação volta a "no ar" no painel da instância, e o trabalho que estava em andamento não se perdeu. Quem confere: a TI do cliente, que cortou e devolveu a internet ela mesma.

## Retorno para o negócio

- **A venda deixa de parar na porta de entrada.** Hipótese: liberar uma saída passa mais depressa pela aprovação de segurança do que abrir uma porta de entrada, o que encurta a etapa mais lenta da primeira venda. (decisão 6)
- **Os próximos apps entram pela mesma ligação.** Cada app seguinte usa a ligação que já existe, sem um novo pedido à rede do cliente. É parte do "entrar e expandir": a venda difícil acontece uma vez, e os produtos seguintes entram pela porta já aberta. (decisões 3 e 6)
- **Menos suporte.** Hipótese: como o mAIg religa sozinho, uma queda de internet do cliente não vira chamado para a Maind nem para a TI do cliente.
- **Funciona em qualquer rede.** Sem IP fixo e atrás de qualquer rede, o mAIg alcança clientes cuja rede não aceitaria receber ligações de fora. (decisão 6)
- **O que custa.** A Maind mantém sempre de pé o ponto onde os mAIg se conectam, um custo contínuo de atender (decisão 6). Hipótese: esse custo cresce com o número de clientes.

## O que não inclui

- **A tela do app quando a ligação cai** (o aviso, a luz de estado, a página de status): é de cada app; no Horus, da parte do Horus na nuvem da Maind.
- **O que o app faz com as tarefas marcadas durante a queda:** é de cada app; no Horus, das regras dos agendamentos, alertas e agentes.
- **O formato do handshake contratual, a validade do certificado e a política de troca e cancelamento:** Contratação dos apps (MF-103).
- **Quantas versões do mAIg e dos apps podem conviver:** Gestão dos apps (MF-104).
- **Quem atualiza o mAIg:** Organizações e instâncias (MF-107).
- **O caminho até o banco do cliente na hospedagem da Maind:** Bancos da empresa (MF-105).
- **O registro do que passa pela ligação:** Registro e auditoria (MF-102).
- **O isolamento entre os módulos dos apps dentro do mAIg:** Execução isolada dos apps (MF-109).
- **A tela onde o administrador da instância vê o estado da ligação:** Console de configuração (MF-110).
- **O login das pessoas:** Segurança e permissões (MF-101).

## Depende de

Nenhuma outra mf do mAIg. A ligação é aberta pelo próprio mAIg e só pede que ele esteja instalado.

- **Pré-requisito de negócio: a Maind manter sempre de pé o ponto onde os mAIg se conectam.** Sem ele, nenhum mAIg tem com quem falar. (decisão 6)
- **Pré-requisito de negócio: a TI do cliente liberar a saída para o endereço da Maind.** É o único pedido de rede que o mAIg faz à casa do cliente. (decisão 6)

**Quem depende desta:** Contratação dos apps, porque o handshake contratual conversa com a Maind pela ligação que o mAIg abre (MF-103).

## Ponto de partida no Horus

O mAIg nasceu como o middleware do Horus, a peça entre as telas do Horus, na nuvem da Maind, e os dados da empresa; abaixo, "a peça" é esse middleware.

- **A ligação mudou de lado.** No Horus, a nuvem do Horus ligava para a peça e guardava o endereço e a porta de cada organização; com a escolha de o mAIg ligar para fora, o Horus deixou de guardar esse endereço e essa porta. O Horus registrou também quando rever a escolha: se um cliente proibir até a conexão de saída. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-258, D-296 do Horus)
- **A entrada das pessoas mora na peça.** No Horus, as configurações de login ficam na peça, e o owner da organização e o administrador da instância entram sempre por usuário e senha; com a ligação fora, a entrada cai junto. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-258, D-283 do Horus)
- **Um aviso próprio e uma página de status.** No Horus, com a ligação fora, a pessoa vê um aviso próprio, e não um erro, que manda procurar o owner da organização, com um botão para tentar de novo; e cada organização tem uma página de status, sem login, com as quedas dos últimos noventa dias. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-283 do Horus)
- **Uma luz de estado.** No Horus, a tela de entrada mostra uma luz verde ("No ar"), amarela ("Instável") ou vermelha ("Fora do ar"), sempre com texto. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-284 do Horus)
- **A rodada espera até uma hora.** No Horus, a tarefa marcada para quando a ligação está fora espera até uma hora; se a ligação volta, roda uma vez, atrasada e dizendo que atrasou; senão, é pulada. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-285 do Horus)
- **Só o responsável pelo agendamento é avisado.** No Horus, quando a rodada é pulada, só a pessoa responsável pelo agendamento é avisada, na área de avisos do Horus. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-293 do Horus)
- **A versão atual e a anterior.** No Horus, a nuvem funciona com a peça na versão atual e na anterior e recusa uma mais velha, com o aviso "Atualização necessária"; quem atualiza é quem hospeda. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-292 do Horus)
- **O painel mostra o estado, e é avisado o responsável pelo serviço.** No Horus, o painel de quem administra a instalação mostra se a peça está no ar ou fora e em que versão, e, quando ela para, é avisada a Maind, na instalação dela, ou o cliente, na dele. Isso já foi decidido assim e vale como ponto de partida; o mAIg ainda confirma. (D-275 do Horus)

## O que ainda falta decidir

- **Falta o dono da Maind decidir, com o arquiteto do mAIg, o que conta como "em andamento" quando a ligação cai, por quanto tempo o mAIg o guarda e o que a pessoa recebe quando a ligação volta.** *O que está em jogo:* guardar pouco faz a pessoa refazer o pedido; guardar demais entrega respostas que já não servem; e a tela de cada app precisa saber o que pode prometer. (decisão 6)
- **Falta o dono da Maind decidir quem é avisado quando a ligação cai e não volta sozinha, depois de quanto tempo e por onde.** *O que está em jogo:* uma queda que ninguém percebe vira um app parado descoberto pela pessoa que o usa. No Horus, é avisado o responsável pelo serviço, a Maind ou o cliente, o que vale como ponto de partida. (D-275 do Horus)
- **Falta o dono da Maind decidir se a luz de estado e a página de status passam a ser do mAIg, iguais para todos os apps, ou continuam de cada app.** *O que está em jogo:* com um estado só, a TI do cliente e as pessoas leem a mesma coisa em qualquer app; com um por app, cada app refaz o mesmo trabalho e pode mostrar a queda de um jeito diferente. (D-283, D-284 do Horus)
- **Falta o dono da Maind decidir que compromisso de disponibilidade a Maind assume para o ponto de conexão.** *O que está em jogo:* quando ele cai, todos os mAIg ficam sem ligação ao mesmo tempo; o compromisso entra na conversa com a TI do cliente e no custo de manter o ponto sempre de pé. (decisão 6)
- **Falta o dono da Maind decidir o que se oferece a um cliente que não libera nem a conexão de saída.** *O que está em jogo:* esse cliente não consegue usar o mAIg na própria rede, e a hospedagem na Maind exige que o banco seja alcançável por ela; sem resposta, ele fica sem caminho. É a condição que o Horus registrou para rever a escolha. (D-296 do Horus)
- **Falta o arquiteto do mAIg definir que endereço exato a TI do cliente libera e como ela fica sabendo se ele mudar.** *O que está em jogo:* a TI do cliente precisa do endereço para liberar a saída, e um endereço que muda sem aviso derruba a ligação de todos os mAIg daquele cliente.
- **Também depende, e está explicado em outras mfs:** o formato do handshake contratual e a política do certificado (MF-103); quantas versões podem conviver (MF-104); como a Maind alcança o banco na hospedagem dela (MF-105); por onde sai o pedido ao provedor de IA, e se a TI do cliente precisa liberar também a saída para cada provedor (MF-106); quem atualiza o mAIg (MF-107).

## Decisões do PO para discutir

- **Decisão:** a tela do app durante a queda (o aviso, a luz e a página de status) fica fora desta mf e é de cada app; o Horus entra só como ponto de partida. *Por que:* o mAIg serve a vários apps, e o mapa das mfs tira a tela do app desta mf. *Alternativa:* o mAIg oferecer um estado e uma página comuns a todos os apps. *Reabrir se:* o dono da Maind preferir uma experiência igual em todos os apps, que é o terceiro ponto em aberto.
- **Decisão:** esta mf não depende de nenhuma outra; ficam dois pré-requisitos de negócio, o ponto de conexão da Maind sempre de pé e a saída liberada pela TI do cliente. *Por que:* a ligação só pede o mAIg instalado; a instância é definida em outra mf, mas a ligação não depende de haver várias organizações (MF-107). *Alternativa:* declarar dependência de Organizações e instâncias (MF-107). *Reabrir se:* a ligação passar a ser aberta por organização, e não por instância.
- **Decisão:** ler "guardar o que estava em andamento" só como "o trabalho não se perde na queda" e deixar em aberto o resto. *Por que:* a decisão 6 não diz mais do que isso, e qualquer regra a mais seria uma promessa à pessoa que usa o app. *Alternativa:* o PO propor uma regra, como "a resposta chega quando a ligação volta, se voltar em pouco tempo". *Reabrir se:* o arquiteto do mAIg mostrar que guardar tem um custo que muda o desenho.
- **Decisão:** deixar claro que, na hospedagem da Maind, o "sem porta de entrada" fala da ligação do mAIg, e não do caminho até o banco. *Por que:* evita prometer à TI do cliente mais do que a hospedagem na Maind entrega (decisão 9). *Alternativa:* não tratar a hospedagem da Maind nesta mf. *Reabrir se:* o ponto sobre o alcance do banco for fechado (MF-105).
- **Decisão:** a prova de valor é feita pela própria TI do cliente, com as ferramentas dela: o firewall sem porta de entrada e o corte da internet. *Por que:* é a TI do cliente quem aprova o mAIg, e uma prova que ela mesma faz convence mais do que uma demonstração da Maind. *Alternativa:* a equipe da Maind demonstrar num ambiente de teste. *Reabrir se:* o primeiro cliente não deixar cortar a internet do servidor nem num teste.
- **Decisão:** citar o gateway de dados local da Microsoft como referência de mercado, com os mesmos fatos das páginas da visão. *Por que:* é a prova mais direta de que o desenho é aceito pela TI das empresas. *Alternativa:* deixá-lo só nas páginas da visão. *Reabrir se:* o dono da Maind preferir as mfs sem referência de mercado.
- **Decisão:** pôr em "Quem ganha", de forma indireta, a equipe da Maind e a pessoa que usa o app, além da TI do cliente. *Por que:* a venda que não esbarra na porta de entrada e o trabalho que não se perde na queda são ganhos reais deles. *Alternativa:* só a TI do cliente, como no mapa. *Reabrir se:* o dono da Maind preferir "Quem ganha" só com os papéis do mapa.
- **Decisão:** usar três entradas do Horus além das listadas para esta mf: a que inverteu a ligação, a de quem é avisado da rodada pulada e a do painel que mostra o estado da peça (D-296, D-293, D-275 do Horus). *Por que:* a primeira explica por que o Horus deixou de guardar o endereço da peça e traz a condição para rever a escolha; a segunda completa a da rodada que espera uma hora (D-285 do Horus); a terceira diz quem vê o estado e quem é avisado quando a peça para. *Alternativa:* ficar só nas entradas listadas. *Reabrir se:* o dono da Maind quiser o ponto de partida só com as entradas do mapa.
- **Decisão:** a ligação é da instância, e não de cada organização: todas as organizações de uma instância dependem da mesma ligação, e o estado dela faz parte do estado da instância que o administrador da instância vê (decisão 12). *Por que:* quem abre a ligação é o mAIg, e cada instância é um mAIg instalado. *Alternativa:* uma ligação por organização, com o estado de cada uma à parte, como o painel do Horus mostrava a peça de cada organização (D-275 do Horus). *Reabrir se:* o arquiteto do mAIg separar a ligação por organização.
- **Decisão:** além do que conta como "em andamento" e de a quem cabem a luz e a página de status, quatro pontos novos foram abertos aqui: quem é avisado quando a ligação não volta sozinha, o compromisso de disponibilidade do ponto de conexão e o que se oferece a quem não libera nem a saída, com o dono da Maind; e o endereço exato que a TI do cliente libera, com o arquiteto do mAIg. *Por que:* nenhuma decisão os responde, e os três primeiros mudam o que a Maind promete à TI do cliente. *Alternativa:* deixar todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico.
