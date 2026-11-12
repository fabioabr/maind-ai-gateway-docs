# MF-108:Funcionar sem abrir porta de entrada na rede

> O mAIg liga para a Maind de dentro da rede do cliente e mantém a ligação aberta; tudo o que os apps pedem corre por ela. A TI do cliente não abre nenhuma porta de entrada: libera só saídas: a do nome único da Maind, com IP fixo, a de cada provedor de IA que a organização escolher, a do Google, quando a organização entra com a conta Google, e a do servidor de e-mail da própria empresa, por onde saem os avisos (decisões 90 e 149). Se a ligação cair, o mAIg religa sozinho e guarda o que estava em andamento; se o intermediário da empresa bloqueia o caminho principal, o mAIg passa sozinho ao caminho alternativo. Enquanto ela estiver fora, os apps não funcionam, porque as telas deles ficam na nuvem da Maind e só chegam ao mAIg por ela.

**Também chamada de:** Conexão de dentro para fora · **Versão do mAIg:** 1ª · **Classe:** essencial · **Situação:** rascunho do PO

## Em uma frase

O mAIg abre, de dentro da rede da empresa cliente, uma conexão com a Maind e a mantém aberta, para que os apps da Maind conversem com ele sem que ninguém de fora precise entrar na rede. (decisão 6)

O mAIg, ou Maind AI Gateway ("gateway" quer dizer portão, em inglês), é a plataforma da Maind que fica entre os produtos da Maind e os dados e a inteligência artificial (IA) da empresa. Cada produto entra nele como um app; o primeiro é o Maind Horus. As partes dos apps que ficam na nuvem da Maind precisam conversar com o mAIg, e a pergunta é quem liga para quem. Esta mf responde: quem liga é sempre o mAIg, de dentro para fora. É o que deixa a TI do cliente aprovar o mAIg sem abrir a rede.

## Quem ganha

- **TI do cliente.** A equipe de tecnologia da empresa, que cuida dos servidores e da rede. Deixa de receber o pedido mais difícil de aprovar, o de abrir uma porta de entrada, e passa a liberar só saídas, todas conhecidas: a do nome único da Maind, com IP fixo, uma linha só, a de cada provedor de IA que a organização escolher entre os cinco da primeira versão, a do Google, quando a organização entra com a conta Google, e a do servidor de e-mail da própria empresa (decisões 90 e 141; decisão 149). Não precisa de endereço fixo na internet nem de mudar a rede. E, quando a internet cai, não precisa fazer nada para o mAIg voltar. (decisões 6 e 19)
- **De forma indireta, a equipe da Maind.** As pessoas da Maind que vendem, entregam e dão suporte veem a venda deixar de esbarrar na porta de entrada que muitas TIs recusam. Em troca, a Maind mantém sempre de pé o ponto onde os mAIg se conectam. (decisão 6)
- **De forma indireta, a pessoa que usa o app.** Uma queda curta da internet do cliente não faz o trabalho em andamento se perder. (decisão 6)

## A decisão que passa a ser possível

- **A TI do cliente passa a poder dizer sim ao mAIg sem abrir a rede.** O que ela aprova são saídas, todas conhecidas e listadas: a do nome único da Maind, com IP fixo, a de cada provedor de IA que a organização escolher entre os cinco da primeira versão, a do Google, quando a organização entra com a conta Google, e a do servidor de e-mail da própria empresa, pedidos que quase toda TI aprova. (decisão 6, decisões 19 e 90; decisões 141 e 149)
- **A TI do cliente passa a poder instalar o mAIg atrás de qualquer rede**, sem endereço fixo na internet, mesmo quando a saída da empresa passa por um intermediário que inspeciona a conversa: a ligação tem um caminho alternativo, e o mAIg troca sozinho. (decisões 6 e 154)
- **A dor que some:** a queda da internet do cliente deixa de exigir alguém da TI para religar o mAIg, e numa queda curta, de até cerca de 15 minutos, o que estava em andamento não se perde. (decisões 6 e 69)

## Como funciona

### A ligação que o mAIg abre para fora

**Em resumo:** é o mAIg quem liga para a Maind e mantém a ligação aberta. Ninguém de fora começa uma conversa com ele.

**Quem é quem.**

- **A rede do cliente** é o conjunto de computadores da empresa, ligados entre si e protegidos de quem está fora.
- **O firewall** é o muro de proteção da rede: decide o que pode entrar e o que pode sair.
- **Uma porta de entrada** é uma abertura nesse muro que deixa alguém de fora começar uma conexão com um computador de dentro.
- **Liberar a saída** é deixar um computador de dentro começar uma conexão com um endereço de fora; no mAIg, o nome único da Maind e o de cada provedor de IA que a organização escolher.
- **O provedor de IA** é o serviço de fora que roda o modelo de IA e responde aos pedidos do mAIg; a chave de IA é a senha de acesso a ele. A primeira versão fala com cinco provedores, sempre com a chave da empresa, e a TI do cliente libera a saída só dos que a organização escolher (decisão 141, MF-106).
- **O ponto de conexão da Maind** é o lugar, nos servidores da Maind, onde os mAIg de todos os clientes se conectam. Ele fica num ambiente próprio da Maind, separado da nuvem dos apps, onde rodam as telas do Horus, e das instâncias que a Maind hospeda; assim, uma nuvem dos apps invadida não o alcança (decisão 146). A nuvem da Maind são os servidores da Maind, computadores sempre ligados que se alcançam pela internet.
- **O nome único da Maind** é o único nome de internet que a TI do cliente libera para a Maind. Ele tem um IP fixo reservado e atende na porta 443, o número de porta que o navegador usa para sites seguros. Atrás dele ficam a ligação e o lugar de onde vêm as versões novas do mAIg e dos módulos. O IP só muda por decisão da Maind, com aviso (decisão 149).
- **O IP fixo** é um endereço de internet que não muda. Quem recebe ligações de fora costuma precisar de um; quem só liga para fora, não. A Maind tem um, e a TI do cliente libera por nome ou por IP; o mAIg, na casa do cliente, não precisa de nenhum.

**Como funciona.** O mAIg abre a conexão com a Maind e a mantém aberta. As partes de fora dos apps, as que rodam na nuvem da Maind, mandam os pedidos e recebem as respostas por ela. Como foi o mAIg quem começou a conexão, a TI do cliente só liberou a saída, e nenhuma porta de entrada foi aberta. (decisão 6)

**Por que é assim.** Quase toda TI aprova liberar uma saída; abrir uma porta de entrada é um pedido grande, que muitas recusam. A ligação de dentro para fora também funciona sem IP fixo e atrás de qualquer rede. Ficaram de fora os apps ligarem para o mAIg, que obrigaria o cliente a abrir uma porta de entrada, e os dois modos à escolha de cada cliente, que dobrariam o trabalho de construir, testar e dar suporte. (decisão 6)

**O que se abre mão.** A Maind mantém sempre de pé o ponto onde os mAIg se conectam. E o mAIg precisa reconectar sozinho e guardar o que estava em andamento, assuntos de dois tópicos mais abaixo. (decisão 6)

**Em que onda.** A ligação, com tudo o que este tópico descreve, entra na onda 1.0 da primeira versão: sem ela, o mAIg não funciona de ponta a ponta (decisões 41 e 95).

> **Analogia:** um ramal de telefone que só faz ligações para a central e nunca recebe ligação de fora. Ele liga uma vez e deixa a linha aberta, e a central fala por ela sempre que precisa. **Onde a analogia para:** no telefone, quando a ligação cai, a conversa se perde; o mAIg religa sozinho e guarda o que estava em andamento.

**Um desenho que o mercado já aceita.** O gateway de dados local da Microsoft (on-premises data gateway) funciona assim: a empresa o instala na própria rede, e ele abre só conexões de saída para a nuvem, sem nenhuma porta de entrada aberta. Ele serve a vários produtos da Microsoft, como o Power BI, o Power Apps, o Power Automate e o Azure Logic Apps. É a prova de que o desenho "o componente liga para fora" já é aceito pela TI de muitas empresas.

**Exemplo.** Marta, da TI da Farma Vida, uma rede de 40 farmácias, prepara a rede para o mAIg.

1. Marta instala o mAIg num servidor da Farma Vida, um computador que fica ligado o tempo todo, prestando um serviço.
2. No firewall, libera a saída para o nome da Maind, com IP fixo, uma linha só, e a saída para o provedor de IA que Paulo, owner da organização, escolheu. Não abre nenhuma porta de entrada.
3. O mAIg liga para o ponto de conexão da Maind e deixa a ligação aberta.
4. A Farma Vida não tem IP fixo, e isso não faz diferença: quem liga é o mAIg.
5. Na revisão de segurança, Marta mostra que o firewall não tem porta de entrada nenhuma aberta para o mAIg.

**Sem modo sem ligação.** A primeira versão não tem modo sem ligação: a empresa que não libera a saída da rede até a Maind não usa o mAIg na própria rede. A ligação parte sempre do mAIg, e sem ela não há login nos apps, licença nem atualização (decisões 6 e 122). O modo sem ligação não entra na primeira versão, e nenhuma versão está marcada para ele. Abre-se mão de: esse cliente fica sem caminho na casa dele.

**O que ainda está em aberto.** Que compromisso a Maind assume para manter de pé o ponto de conexão está em "O que ainda falta decidir". O endereço que a TI do cliente libera já está decidido: um nome só, com IP fixo (decisão 149).

### O que corre pela ligação

**Em resumo:** pela ligação que o mAIg abriu passam os pedidos das partes de fora dos apps, as respostas, a conferência da contratação com a Maind e o que mantém o mAIg em dia com ela. Dos dados da empresa, passa a resposta pronta, até o teto de 200 linhas, e a consulta feita, se o owner da organização a liberar (decisões 43 e 74). A consulta devolvida chega na onda 1.1 da primeira versão; na onda 1.0, dos dados da empresa passa só a resposta pronta (decisão 95).

**Quem é quem.**

- **A parte de fora de um app** roda fora do mAIg; no Horus, é a que roda na nuvem da Maind, com as telas. (decisão 4)
- **O módulo de um app** é a parte interna, que roda isolada dentro do mAIg e só usa os serviços do núcleo, o que vem pronto no mAIg para todos os apps. No Horus, é onde a pergunta vira resposta. (decisão 4)
- **O handshake contratual** é o aperto de mão digital em que o mAIg conversa com um servidor da Maind Tech, o computador da Maind que confere as contratações, para conferir a contratação e liberar o app. (decisão 10)

**O que passa.** De ida, os pedidos que a parte de fora de cada app manda ao módulo dele; no Horus, a pergunta da pessoa. De volta, a resposta pronta. O handshake contratual também conversa com a Maind pela ligação que o mAIg abriu. Os dados crus da empresa não passam: o módulo os trabalha dentro do mAIg, e à nuvem volta a resposta pronta, que pode conter dados da empresa, até o teto de 200 linhas e com as colunas sensíveis mascaradas (decisões 34 e 43). A nuvem não guarda a resposta, só a receita de cada painel (decisão 35). Além da resposta, só passa a consulta feita ao banco, sem dado nenhum, se o owner da organização a liberar; a planilha sai direto do mAIg para o navegador da pessoa, sem passar por esta ligação (decisão 74, MF-109). A consulta e a planilha chegam na onda 1.1; na consulta devolvida, o valor de um filtro que toca uma coluna sensível aparece mascarado (decisões 95 e 103).

**O que mais corre pela ligação.** Além dos pedidos dos apps, passam por ela:

- **A troca do código pelo passe.** Quando a pessoa entra, o navegador leva à nuvem só um código de uso único, que a parte de fora do app troca pelo passe pela ligação (decisão 32).
- **O download das versões novas do mAIg e dos módulos.** O mAIg as busca na Maind, pelo mesmo nome único da Maind que a TI do cliente liberou, e confere a assinatura antes de esperar o aval (decisões 39 e 149).
- **A renovação do certificado da organização.** Ele vale 30 dias, e o mAIg o renova sozinho pela ligação (decisão 44).
- **A licença de cada app.** O documento assinado pela Maind, com o fim do contrato e a carência, chega no handshake contratual e a cada renovação (decisão 56).
- **O arquivo da organização e o manifesto do que ela pode ter.** No setup, a configuração inicial da instância, o mAIg busca na Maind o arquivo assinado da organização, que nasceu no Gerenciador do mAIg, o cockpit da Maind para controlar e cobrar os clientes, e o manifesto assinado com os apps que a organização pode ter; é por eles que a organização chega à instância e os apps contratados são instalados (decisões 128 e 134, MF-107, MF-103). Um app autorizado depois do setup chega pelo mesmo caminho (decisão 137).

**O mínimo de operação.** Os pedidos e as respostas dos apps e os quatro itens acima são o que os apps precisam para funcionar. Além deles, a instância manda à Maind só o mínimo de operação: a versão do mAIg e a dos módulos, o estado da ligação e o estado da licença de cada app. Nunca vai dado, nome de pessoa, consulta nem mensagem de erro com valores. A lista fica escrita aqui e à vista da TI do cliente no painel da instância, para que ela saiba, antes de liberar a saída, tudo o que a máquina manda para a Maind. Entra na onda 1.0 (decisão 123). Abre-se mão de: a Maind sabe menos quando algo falha, e o suporte depende de alguém do cliente mostrar a tela, na onda 1.0, ou do acesso de suporte, na onda 1.1.

**O que não passa por esta ligação.** O pedido ao provedor de IA. O núcleo o faz direto ao provedor, pela saída que a TI do cliente liberou para ele, sem passar pela Maind (decisão 19). O módulo do app não tem saída própria: só o núcleo faz esse pedido. A tela do console também não passa por ela: o console se abre de dentro da rede do cliente, ou pela VPN da empresa, o túnel protegido que liga quem está fora à rede dela (decisão 26).

**Um app novo usa a mesma ligação.** Um segundo app da Maind não pede à TI do cliente uma liberação nova de rede: a parte de fora dele responde pela ligação que o mAIg já mantém. É uma das razões de a segurança se aprovar uma vez só. (decisões 3 e 6)

**Uma ligação para todas as pessoas.** O login não abre ligação nova. A ligação nasce quando o mAIg sobe, em duas ou três linhas para não depender de uma só, e todas as pessoas e todas as organizações da instância a usam. Cada pedido leva um número, para a resposta voltar ao lugar certo, e o passe de quem pediu, que o núcleo confere em todo pedido. Pela ligação descem só os pedidos que o mAIg conhece, nunca acesso à rede do cliente: a Maind pede, e o mAIg decide. Por isso quem está na internet não enxerga o mAIg, e nenhum computador da Maind precisa alcançá-lo por outro caminho. (decisão 6, decisões 32 e 33)

> **Analogia:** o malote entre a matriz e uma filial. É uma rota só, com muitos envelopes, e cada um leva um número e o crachá assinado de quem pediu; a filial abre um por um, confere o crachá e devolve a resposta com o mesmo número. **Onde a analogia para:** no malote, os envelopes esperam a volta do carro; na ligação, os pedidos correm ao mesmo tempo, e as respostas voltam na ordem em que ficam prontas.

**Quem faz a ligação.** A própria Maind faz as duas pontas: dentro do mAIg, a peça que liga para a Maind, mantém a ligação viva e religa sozinha; na Maind, o ponto de conexão, que guarda as ligações abertas e entrega cada pedido ao mAIg certo. Nenhum serviço de outra empresa fica no caminho, e por isso a TI do cliente segue liberando só a saída para a Maind e a de cada provedor de IA. Ficaram de fora os serviços prontos de nuvem, como o que o gateway de dados local da Microsoft usa, e os túneis de mercado, que poriam mais uma empresa no caminho dos dados. (decisões 19 e 38)

**Dois caminhos, desde a onda 1.0.** Muitas empresas fazem a saída da rede passar por um intermediário, um equipamento que abre a conversa para inspecioná-la, e esse intermediário costuma bloquear o caminho principal da ligação. Por isso a ligação tem dois caminhos já na onda 1.0 da primeira versão: o principal e um alternativo, por WebSocket, um jeito de conversa que os intermediários corporativos costumam deixar passar. Quando o principal não passa, o mAIg troca sozinho para o alternativo, sem ninguém da TI do cliente mexer em nada, e os dois caminhos são feitos pela Maind. O dono da Maind escolheu contra a recomendação do arquiteto do mAIg, para que nenhuma empresa fique de fora por causa do intermediário dela (decisões 38 e 154). Abre-se mão de: são duas camadas de conversa para a Maind construir, provar e manter desde o início, e a onda 1.0 cresce.

**Exemplo.** Ana, gerente comercial da Farma Vida, quer saber quanto cada farmácia vendeu em outubro.

1. Ana digita a pergunta nas telas do Horus, na nuvem da Maind.
2. A parte de fora do Horus manda a pergunta ao módulo do Horus pela ligação que o mAIg da Farma Vida mantém aberta.
3. O módulo pede os dados e a IA ao núcleo, que confere a permissão, lê o banco de dados de vendas só para consulta, usa a chave de IA da Farma Vida (a senha de acesso ao provedor de IA), faz o pedido direto ao provedor, por outra saída, e anota tudo no registro, a anotação de tudo o que acontece. (MF-101, MF-102, MF-105, MF-106)
4. A resposta pronta volta pela mesma ligação, e Ana vê a tabela na tela.
5. Nada disso pediu uma porta de entrada: tudo correu pela ligação que o mAIg começou.

### O certificado dentro da ligação

**Em resumo:** a ligação ser aberta de dentro protege a rede; o certificado protege a conversa. Dentro da ligação, só é aceita a parte de fora de um app que prove, com um certificado válido, que é um app contratado da Maind.

**Quem é quem.**

- **O certificado digital** é uma espécie de carteira de identidade digital: um arquivo que diz quem é o portador e traz a assinatura de quem o emitiu, que não se falsifica sem que se perceba.
- **As duas identidades de cada app.** Cada app tem duas identidades, as duas atestadas pela Maind: a do módulo, a parte que roda dentro do mAIg, cuja chave é criada no próprio mAIg e nunca sai dele; e a da parte de fora, que roda na nuvem da Maind e por isso tem a própria chave, guardada lá (decisões 86 e 139).
- **O kit** deixou de ser um arquivo que a Maind entrega: o app chega pela ligação, numa entrada do manifesto do que a organização pode ter, e a chave do app nasce no mAIg, que pede o atestado à Maind (decisões 134 e 138, MF-103).
- **"Vale dentro da ligação"** quer dizer que a conferência acontece pela conexão que o mAIg abriu, e não por uma porta aberta à parte. (decisão 6)

**Como funciona.** O núcleo do mAIg confere, a cada conversa, a identidade da parte de fora de cada app dentro da ligação que o próprio mAIg abriu. Sem identidade válida, ela não é aceita, e o app não funciona. O handshake contratual, que libera o app só para a organização que o contratou (a organização é o espaço de um cliente dentro do mAIg), também corre por essa ligação. (decisão 6, decisões 10 e 11; decisão 139)

**A primeira conexão do setup.** A única conversa sem o certificado da instância é a primeira, no setup: a TI do cliente digita na interface de setup a chave temporária, de uso único e vida curta, que veio no PDF da Maind, e o mAIg abre a conexão com a Maind só com essa chave. Essa conversa serve só para pedir o certificado da instância e o arquivo da organização; daí em diante, tudo passa com o certificado (decisões 132 e 133, MF-107).

**Por que é assim.** As duas proteções se somam: ninguém entra na rede sem ser chamado, e só conversa com o mAIg quem prova ser um app contratado. Sem o certificado, bastaria alguém se passar pela Maind do outro lado da ligação. A promessa de que a nuvem não fabrica passes não muda com as duas identidades, porque o passe é assinado com a chave da organização, e não com a do app. (decisões 6 e 10; decisão 139)

**Quando dá errado.** A licença de um app vence sem ser renovada, ao fim da carência (decisão 56). O app para para aquela organização; o fim do contrato, sozinho, não o pararia. As outras organizações atendidas pela mesma instalação do mAIg, a instância, seguem como antes. A configuração do app fica guardada até a organização renovar ou o owner da organização, a pessoa que responde por ela no mAIg, apagá-la. (decisão 11, decisões 13 e 14) Apagar a configuração guardada de um app parado só existe a partir da onda 1.1 (decisão 106, MF-104).

**O que ainda está em aberto.** O formato do handshake contratual e da licença, quanto tempo vale o certificado de cada app e como ele é cancelado antes do prazo são pontos de Contratação dos apps (MF-103).

### Quando a ligação cai: o mAIg religa sozinho

**Em resumo:** se a ligação cair, o mAIg reconecta sozinho, sem ninguém da TI do cliente fazer nada. (decisão 6)

**Quem é quem.**

- **Reconectar** é o mAIg abrir de novo a ligação com a Maind, do mesmo jeito que abriu a primeira: de dentro para fora.
- **O que pode derrubar a ligação:** a internet do cliente cair; o ponto de conexão da Maind sair do ar; uma mudança no firewall bloquear a saída; a máquina do mAIg ser desligada. Nos dois primeiros casos, o mAIg religa sozinho quando o caminho volta. Nos dois últimos, alguém da TI do cliente precisa desfazer o bloqueio ou religar a máquina.
- **O que não derruba a ligação:** o intermediário da empresa bloquear o caminho principal. Nesse caso, o mAIg passa sozinho ao caminho alternativo, e ninguém percebe (decisão 154).

**Por que é assim.** É o outro lado da ligação aberta de dentro: como ninguém de fora pode ligar para o mAIg, só ele pode refazer a ligação. Se dependesse de uma pessoa, cada queda de internet viraria um chamado. (decisão 6)

**Exemplo.**

1. Numa noite, a internet da Farma Vida cai por alguns minutos, e a ligação cai junto.
2. Enquanto isso, a parte de fora do Horus não alcança o módulo dele na Farma Vida.
3. A internet volta, e o mAIg religa sozinho para o ponto de conexão da Maind.
4. Marta não faz nada. Se abrir o painel da instância, a parte do console do mAIg que mostra o estado da instalação, vê a ligação no ar. (MF-110)

**Quando dá errado.** A ligação não volta porque alguém mudou o firewall e bloqueou a saída para a Maind. O mAIg tenta, mas não consegue sozinho, e os apps daquela instância ficam sem ele até a TI do cliente liberar a saída de novo. Depois de alguns minutos sem a ligação voltar, como 5, são avisados quem cuida da instância e a Maind, no console e por e-mail (decisões 64 e 71).

### Guardar o que estava em andamento

**Em resumo:** quando a ligação cai no meio de um trabalho, o mAIg guarda o que estava em andamento por um tempo curto, como 15 minutos. Se a ligação volta nesse tempo, a resposta chega; se não, o pedido é descartado, e a pessoa refaz a pergunta (decisão 6, decisão 69).

**Quem é quem.**

- **Em andamento** é o que já começou e ainda não terminou: no Horus, uma pergunta que chegou ao módulo e cuja resposta ainda está sendo preparada.
- **Guardar** é não descartar esse trabalho na queda, para que ele possa seguir quando a ligação voltar.

**Por que é assim.** Sem isso, cada queda faria a pessoa refazer o pedido, e um trabalho longo recomeçaria do zero. É o que separa o mAIg do telefone da analogia, em que a ligação cai e a conversa se perde. O preço: o mAIg precisa saber guardar e retomar, mais trabalho no núcleo. (decisão 6)

> **Analogia:** um carteiro que encontra a ponte fechada não joga a carta fora: guarda na bolsa e entrega quando a ponte reabre. **Onde a analogia para:** a carta pode esperar dias; no mAIg, o pedido espera pouco, porque uma resposta que chega muito depois pode já não servir.

**Exemplo.**

1. Ana pergunta ao Horus as vendas de outubro por farmácia.
2. A pergunta chega ao módulo do Horus, que começa a preparar a resposta.
3. No meio do trabalho, a internet da Farma Vida cai, e o mAIg guarda o que estava em andamento.
4. A internet volta cinco minutos depois, o mAIg religa sozinho, e a resposta chega a Ana: o trabalho não se perdeu.
5. Durante a queda, Ana vê a luz de estado do mAIg em vermelho e um aviso próprio, e não um erro (decisão 121). O resto da tela é do app, e não do mAIg; no Horus, o ponto de partida é o aviso explicado mais abaixo.

**Quando dá errado.** A ligação demora mais de 15 minutos a voltar. O mAIg descarta o pedido, e Ana vê que a ligação caiu e que precisa refazer a pergunta. Uma resposta que chegasse horas depois já não serviria (decisão 69). As tarefas marcadas seguem a regra delas: esperam até uma hora (D-285 do Horus). As duas regras, a do pedido guardado e a da tarefa que espera, entram na onda 1.0 (decisão 95). O que conta exatamente como "em andamento" e como guardar são pontos do arquiteto do mAIg.

### O estado da ligação: quem vê e quem é avisado

**Em resumo:** o administrador da instância acompanha o estado da instância, e a ligação com a Maind faz parte dele. Para as pessoas, o mAIg tem uma luz de estado e uma página de status, iguais para todos os apps (decisão 70). A luz entra na onda 1.0 da primeira versão, com três cores e sempre com texto, e aparece também na tela de entrada, antes do login. A página de status chega na onda 1.1 e pede o login do mAIg (decisão 121).

**Quem é quem.**

- **O administrador da instância** cuida da instalação física e vê o que é da instância: as instalações, o estado e as versões. É a TI do cliente, quando o mAIg roda na infraestrutura do cliente, e a equipe da Maind, quando roda na da Maind. (decisão 12)
- **A ligação é da instância.** Instância é cada instalação física do mAIg, e uma instância atende uma ou mais organizações, isto é, os espaços dos clientes dentro dela (decisão 9). Todas as organizações de uma instância dependem da mesma ligação com a Maind.

**O que vem do Horus, e o que o mAIg decidiu.** No Horus, isso já foi decidido assim; o que o mAIg decidiu vai anotado em cada item:

- **A luz de estado.** No Horus, a tela de entrada da organização mostra uma luz com três cores, sempre com texto ao lado: verde, "No ar"; amarela, "Instável", quando a peça é alcançada, mas com falhas ou lentidão nos últimos minutos; vermelha, "Fora do ar". Com o amarelo, a pessoa entra normalmente. (D-284 do Horus) Vale no mAIg: a luz é do mAIg, a mesma em todos os apps, com as três cores e sempre com texto, e aparece também na tela de entrada, antes do login. Entra na onda 1.0 da primeira versão (decisões 70 e 121).
- **A página de status.** No Horus, cada organização tem uma página no endereço dela que abre sem login, isto é, sem a pessoa entrar no sistema. Mostra se a ligação está no ar ou fora, desde quando, o último contato e as quedas dos últimos noventa dias, com início, fim e duração, sem a versão instalada nem nome de pessoa. (D-283 do Horus) O mAIg decidiu diferente: a página é do mAIg e pede o login do mAIg. Na casa do cliente, só abre de dentro da rede ou pela VPN, como o console (decisão 26). Mostra a cada pessoa o estado da ligação e dos apps da organização dela e as quedas passadas, sem nome de pessoa nem de banco. Chega na onda 1.1 (decisões 70 e 121). Quantos dias de quedas ela mostra está em "O que ainda falta decidir".
- **O painel e o aviso.** O painel de quem administra a instalação mostra o estado e a versão da peça de cada organização, e, quando ela para, quem é avisado é o responsável pelo serviço: a Maind, na instalação dela; o cliente, na dele. (D-275 do Horus) Vale no mAIg (decisões 12 e 71).
- **A queda compartilhada.** Com a instalação compartilhada da Maind fora do ar, a queda alcança todas as organizações dela de uma vez; com a do cliente, só as dele. (D-283 do Horus) Vale no mAIg, onde todas as organizações da instância usam a mesma ligação (decisão 33).

**Por que a página fica antes do login, no Horus.** A entrada das pessoas mora na peça que deu origem ao mAIg, e por isso cai junto com a ligação (D-258, D-283 do Horus). Uma tela de status atrás do login não abriria justamente quando mais se precisa dela. (D-283 do Horus)

**Por que a página pede o login, no mAIg.** A página mostra a cada pessoa só os apps da organização dela, e uma página aberta sem login não sabe quem olha (decisões 9 e 70). O motivo do Horus não vale no mAIg, por duas razões. A luz de estado, na tela de entrada, já diz a quem ainda não entrou que a ligação caiu. E a tela de entrada e a página ficam no próprio mAIg, que confere a pessoa sem depender da ligação: o que cai com a ligação é a entrada nos apps, porque o código do login deixa de ser trocado pelo passe (decisões 32 e 41). Abre-se mão de: na onda 1.0, quem quer o detalhe de uma queda pergunta a quem cuida da instância; na onda 1.1, quem não tem conta ou não consegue entrar vê só a luz (decisão 121).

**Exemplo**, com a luz de estado, da onda 1.0, e a página de status, da onda 1.1.

1. A internet da Farma Vida fica instável numa manhã. Ana vê a luz amarela, "Instável", e entra normalmente.
2. A ligação cai de vez, e a luz fica vermelha, "Fora do ar". Quem tenta usar o Horus vê um aviso próprio, e não um erro.
3. Na onda 1.0, Ana pergunta a Marta, que cuida da instância, desde quando a ligação está fora. A partir da onda 1.1, Ana abre a página de status do mAIg, de dentro da rede da Farma Vida, entra com o login do mAIg e lê ali desde quando a ligação está fora e as quedas passadas.
4. Marta vê no painel da instância que a ligação caiu e vai conferir a internet da empresa.

**No mAIg, a luz e a página são do mAIg.** A luz de estado é a mesma em todos os apps, e cada app mostra a que o mAIg fornece; ela entra na onda 1.0. Uma página do mAIg mostra o estado da ligação e de todos os apps instalados: em uso, pausado, suspenso, parado ou com atualização necessária. Para quem é de uma organização, ela mostra os apps da organização dela, sem revelar os das outras (decisão 9, decisão 70). A página chega na onda 1.1, com o login do mAIg (decisão 121). Assim, a mesma queda aparece do mesmo jeito em qualquer app, e nenhum app refaz esse trabalho. Abre-se mão de: um app que precise mostrar algo só dele, como a lentidão de um serviço próprio, faz isso à parte.

**Quem é avisado quando a ligação não volta.** Depois de alguns minutos sem a ligação voltar, como 5, são avisados quem cuida da instância, a TI do cliente ou a equipe da Maind na hospedagem dela, e também a Maind, que vê a queda do outro lado. O aviso chega no console e por e-mail, sem dado nenhum (decisões 64 e 71). Na onda 1.0, o destinatário é fixo: a ligação fora é um aviso da instância e vai a todos os administradores da instância, e ninguém o desliga nem o redireciona. As preferências de aviso chegam na onda 1.1 (decisão 126). Abre-se mão de: uma queda curta da internet pode gerar um aviso à toa.

### O que os apps fazem enquanto a ligação está fora

**Em resumo:** o mAIg não desenha a tela dos apps, mas põe duas regras para todos eles: com a ligação fora, a pessoa vê um aviso próprio, e não um erro, e a tarefa marcada espera até uma hora (decisões 69 e 121). O resto, cada app decide. No Horus, já há um ponto de partida para isso.

**Quem é quem.**

- **Do lado da Maind**, a parte de fora do app fica sem caminho até o módulo enquanto a ligação está fora. (decisão 4)
- **Uma rodada**, no Horus, é cada vez que um agendamento, um alerta ou um agente, tarefas que o Horus faz sozinho numa hora marcada, roda nessa hora. No mAIg, cada rodada usa o passe de agendamento de quem criou a tarefa, guardado só no mAIg e conferido a cada vez (decisão 42).

**O que vem do Horus, e o que o mAIg decidiu.** No Horus, isso já foi decidido assim; o que o mAIg decidiu, e o que continua sendo regra de cada app, vai anotado em cada item:

- **Um aviso próprio, e não um erro.** No Horus, a tela de entrada e o app dizem que a ligação da organização está fora do ar desde a última vez que o Horus a alcançou, que o resto do Horus segue no ar e que a pessoa deve procurar o owner da organização, e trazem um botão para tentar de novo. (D-283 do Horus) Vale no mAIg, para todos os apps: com a ligação fora ou a versão vencida, a pessoa vê um aviso próprio, e não um erro, desde a onda 1.0. O texto "Atualização necessária", da versão vencida, faz parte da regra; o resto do texto e do desenho do aviso é de cada app (decisão 121).
- **A entrada cai junto.** No Horus, as configurações de login, a entrada no sistema, ficam na peça que deu origem ao mAIg; com a ligação fora, a pessoa não consegue entrar. (D-258, D-283 do Horus) Vale no mAIg para a entrada nos apps: a entrada mora no mAIg, e sem a ligação ninguém troca o código do login pelo passe (decisões 23 e 41). A tela de entrada fica no próprio mAIg e continua abrindo, com a luz de estado em vermelho e o texto "Fora do ar" (decisões 32 e 121).
- **A rodada espera até uma hora.** Se a ligação está fora na hora marcada, o Horus espera até uma hora, ou até a próxima rodada da mesma agenda, se vier antes. Se a ligação volta nesse prazo, a rodada roda uma vez, atrasada, e diz que atrasou, como em "Gerado às 08h20, previsto 08h00". Passado o prazo, a rodada é pulada, e a agenda segue; nunca roda mais de uma rodada atrasada por agenda. (D-285 do Horus) Vale no mAIg (decisão 69).
- **Quem é avisado da rodada pulada.** No Horus, só a pessoa responsável pelo agendamento, na área de avisos do Horus, com a hora e o motivo; quem só recebe o relatório não é avisado. (D-293 do Horus) É regra do app, e não do mAIg: cada app decide quem avisa da rodada que pulou. O aviso do mAIg sobre uma tarefa marcada é outro: quando a tarefa para porque a pessoa que a criou perdeu o acesso, são avisados os owners da organização (decisões 42 e 126).

**Por que é assim, no Horus.** O aviso protege a confiança: a pessoa sabe onde está o problema, e quem é chamado é a TI do cliente, não a Maind. A espera de uma hora cobre a queda curta sem uma rajada de relatórios atrasados, de mensagens ou de gasto de IA. (D-283, D-285 do Horus)

**Por que a tela é do app.** O mAIg serve a vários apps, e cada um sabe o que faz sentido para quem o usa: um app que responde perguntas pode tratar uma queda de um jeito diferente de um que gera documentos. Por isso a tela não faz parte desta mf.

**Exemplo**, com o ponto de partida do Horus.

1. Paulo, diretor de operações e owner da organização da Farma Vida, tem um relatório de vendas agendado para as 8h.
2. Às 7h50, a internet da Farma Vida cai. Às 8h, o Horus não alcança o módulo e espera.
3. Às 8h20, a internet volta, e o mAIg religa sozinho.
4. O relatório roda uma vez, atrasado, e diz "Gerado às 08h20, previsto 08h00".
5. Se a internet só voltasse depois das 9h, a rodada seria pulada, e só Paulo, o responsável pelo agendamento, seria avisado.

### Quando a ligação está de pé, mas a conversa é recusada

**Em resumo:** mesmo com a ligação no ar, a conversa pode ser recusada: por um certificado que não vale ou por uma versão, do mAIg ou do módulo de um app, adiada além do prazo.

**Quem é quem.** Uma versão é cada edição do mAIg ou de um app, com o que foi corrigido ou acrescentado. Recusar é a parte de fora do app não aceitar conversar com aquele mAIg.

**A versão adiada além do prazo.** A regra de versão é uma só, por prazo, para o mAIg e para o módulo de cada app: a TI do cliente adia a versão nova dentro do prazo, e, vencido o prazo, o que ficou velho deixa de atender. Passados 30 dias de adiamento de uma versão nova do mAIg, ou 7 para uma correção de segurança, a parte de fora de todos os apps recusa a conversa, mesmo com a ligação no ar, e a luz fica vermelha com o texto "Atualização necessária" (decisão 45, MF-107). Com o módulo de um app vencido, só aquele app para, e os outros seguem. A regra entra na onda 1.0 (decisão 109). No Horus, a regra era por contagem: com a peça duas versões atrás da atual, ou mais, a parte do Horus na nuvem da Maind recusava a conversa, com o mesmo texto (D-292 do Horus). O mAIg decidiu diferente e ficou com o prazo. A regra inteira, com o que cada papel vê e por que é assim, está em Gestão dos apps (MF-104).

**O certificado que não vale.** Sem certificado válido, a parte de fora de um app não é aceita, como explica o tópico do certificado. (decisões 6 e 10)

**Exemplo.**

1. A Maind lança uma correção de segurança. O mAIg da Farma Vida a baixa pela ligação, mas Marta a deixa esperando o aval enquanto a empresa fecha o mês.
2. Passados os 7 dias do prazo, a parte de fora do Horus deixa de aceitar a conversa, mesmo com a ligação no ar, e Ana vê o aviso próprio "Atualização necessária", e não um erro (decisões 45 e 109; decisão 121).
3. Marta vê no painel da instância o motivo e a versão e dá o aval; a correção se instala na janela seguinte, e a conversa volta (decisão 39).

**O que ainda está em aberto.** Como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento é ponto de Gestão dos apps (MF-104); a atualização do mAIg, com o aval da TI do cliente e a janela de horário, é ponto de Organizações e instâncias (decisão 39, MF-107).

### A ligação nas duas hospedagens

**Em resumo:** a regra é a mesma nas duas hospedagens: o mAIg liga para fora. Mas a promessa de não abrir a rede vale por inteiro só com o mAIg na infraestrutura do cliente. (decisões 6 e 9)

**Quem é quem.** Hospedar é dar lugar para um sistema rodar. O mAIg roda na infraestrutura do cliente, nas máquinas e na rede dele, ou na da Maind. (decisão 9)

**Na infraestrutura do cliente.** O mAIg fica dentro da rede da empresa, lê o banco por dentro e liga para fora. A TI do cliente libera a saída para o endereço da Maind e a de cada provedor de IA, e nenhuma porta de entrada é aberta. É o caso em que esta mf entrega tudo o que promete.

**Na infraestrutura da Maind.** O mAIg roda nas máquinas da Maind, e a empresa não instala nada. Essas máquinas ficam separadas da nuvem dos apps, e o mAIg também liga para fora; por enquanto, o endereço dele ali fica aberto na internet, para as pessoas entrarem (decisão 48). Em troca, o banco da empresa precisa ser alcançável pela Maind, e as senhas dele ficam no cofre da instância, o lugar trancado onde o mAIg guarda as senhas dos bancos, cifrado com a chave de cada organização (decisão 57). A ligação do mAIg com a nuvem da Maind segue a mesma regra, mas o caminho até o banco é outro: o banco aceita conexão só do endereço fixo da Maind, como explica Bancos da empresa (decisão 91, MF-105). (decisão 9)

**Por que importa para a TI do cliente.** Quem escolhe a hospedagem na Maind precisa saber que o "sem porta de entrada" desta mf fala da ligação do mAIg, e não do caminho até o banco. Prometer mais do que isso seria prometer o que a hospedagem na Maind não entrega.

**Exemplo.**

1. A Farma Vida instala o mAIg na própria rede. Marta libera só as saídas combinadas, a da Maind e a do provedor de IA, e o banco de vendas não é alcançado de fora.
2. A Ótica Visão Clara, uma rede pequena de óticas sem equipe de TI, usa uma instância da Maind e não instala nada.
3. Para a Ótica, o banco precisa ser alcançável pela Maind. Esse caminho não é coberto por esta mf, e sim por Bancos da empresa (MF-105).

### Quando algo dá errado, em resumo

**Em resumo:** os problemas mais prováveis desta mf, o que a pessoa vê e o que o mAIg faz.

- **A internet do cliente cai.** A ligação cai junto; quando a internet volta, o mAIg religa sozinho e guarda o que estava em andamento. (decisão 6)
- **O ponto de conexão da Maind sai do ar.** Todos os mAIg que se conectam a ele ficam sem a ligação ao mesmo tempo; quando ele volta, cada um religa sozinho. Por isso a Maind o mantém sempre de pé. (decisão 6)
- **Alguém bloqueia a saída no firewall.** O mAIg não consegue religar sozinho; a TI do cliente precisa liberar a saída de novo.
- **O intermediário da empresa bloqueia o caminho principal.** O mAIg passa sozinho ao caminho alternativo, sem ninguém mexer em nada. (decisão 154)
- **A licença de um app vence sem ser renovada.** O app para para aquela organização, e as outras organizações da instância seguem. (decisão 11, decisões 13 e 56)
- **O mAIg, ou o módulo de um app, passa do prazo de adiamento.** Com o mAIg vencido, todos os apps recusam a conversa; com o módulo de um app vencido, só aquele app para. A pessoa vê um aviso próprio, "Atualização necessária", e não um erro (decisões 45 e 109; decisão 121). No Horus, a recusa era por contagem de versões (D-292 do Horus).
- **A pessoa tenta usar o app com a ligação fora.** Ela vê um aviso próprio, e não um erro, e a luz de estado em vermelho, desde a onda 1.0. A partir da onda 1.1, pode abrir a página de status do mAIg, com o login do mAIg, e ler desde quando a ligação está fora (decisões 70 e 121). No Horus, a página era de cada organização e abria sem login (D-283 do Horus).
- **Um cliente não libera nem a saída.** O mAIg na rede dele não consegue ligar para a Maind, e a primeira versão não tem modo sem ligação: essa empresa não usa o mAIg na própria rede (decisão 122).

### O que entra em cada onda

A primeira versão do mAIg sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois (decisões 92 e 95). A tabela diz em que onda chega cada capacidade desta mf, com as decisões que a sustentam. "Não entra" quer dizer que a capacidade não faz parte da primeira versão e não tem versão marcada.

| Capacidade | Onda | Decisões | Por quê |
| --- | --- | --- | --- |
| A ligação parte do mAIg e fica aberta; a rede da empresa não abre porta de entrada nem precisa de endereço fixo | onda 1.0 | 6, 33, 38, 92 | É a condição para a TI aceitar instalar. |
| Dois caminhos da ligação, o principal e o alternativo por WebSocket, com a troca automática quando o intermediário da empresa bloqueia o principal | onda 1.0 | 38, 154 | Nenhuma empresa fica de fora por causa do intermediário dela. |
| A TI libera só saídas, uma a uma: a Maind, cada provedor de IA escolhido entre os cinco da primeira versão, o Google se usado, o servidor de e-mail | onda 1.0 | 6, 19, 90, 141 | A TI sabe exatamente para onde a máquina fala. |
| Saída para a Maind: um nome só, com IP fixo, na porta 443, por onde vêm também as versões novas | onda 1.0 | 90, 149 | A TI libera uma linha só, por nome ou por IP, e ela não muda sem aviso. |
| A identidade da parte de fora de cada app, atestada pela Maind, é conferida dentro da ligação a cada conversa | onda 1.0 | 4, 56, 139 | Só um app contratado da Maind conversa com o mAIg. |
| A primeira conexão do setup, pela chave temporária de uso único, a única sem o certificado da instância | onda 1.0 | 132, 133 | Sem ela, a instância não tem como pedir o próprio certificado e o arquivo da organização. |
| A ligação cai e religa sozinha, e o que estava em andamento fica guardado por cerca de 15 minutos | onda 1.0 | 6, 69, 95 | Uma queda curta não pode derrubar o trabalho de ninguém. |
| A tarefa marcada espera a ligação por até uma hora e roda uma vez só, atrasada | onda 1.0 | 69, 95 | Uma queda não pode fazer a tarefa rodar duas vezes nem sumir sem aviso. |
| Estado da ligação no painel da instância | onda 1.0 | 12 | A TI vê se o problema é da rede dela. |
| Luz de estado do mAIg, igual em todos os apps e na tela de entrada, com três cores e sempre com texto, e aviso próprio em vez de erro quando a ligação está fora | onda 1.0 | 70, 121 | A pessoa precisa saber que o problema é a ligação, e não ela. |
| Aviso a quem cuida da instância quando a ligação não volta em cerca de 5 minutos | onda 1.0 | 71, 126 | Quem resolve precisa saber. |
| A conversa é recusada quando o certificado não vale ou a versão passou do prazo de adiamento | onda 1.0 | 45, 56 | Um mAIg sem contrato ou velho demais não fala com o app. |
| Além do trabalho dos apps, a instância manda à Maind só o mínimo de operação: as versões, o estado da ligação e o estado da licença de cada app; a lista fica à vista da TI no painel da instância | onda 1.0 | 123 | Uma lista curta e fechada é o que a TI consegue aprovar antes de liberar a saída da rede. |
| Página de status do mAIg, com o login do mAIg, só de dentro da rede ou pela VPN: o estado da ligação e dos apps da organização da pessoa e as quedas passadas | onda 1.1 | 70, 92, 121 | A luz de estado já diz o essencial na onda 1.0, e uma página sem login não sabe de que organização é quem olha. |
| Funcionar sem ligação com a Maind | não entra | 41, 122 | A ligação é requisito; sem ela, só o console abre. |

## Prova de valor

Prova de valor proposta pelo PO; o dono da Maind ainda não a confirmou.

**Demonstração 1: nenhuma porta de entrada aberta.** Com o mAIg instalado na rede do cliente, a TI do cliente mostra, nas regras do próprio firewall, que não existe nenhuma porta de entrada aberta para o mAIg, só as saídas combinadas: para o endereço da Maind, para o provedor de IA da organização e para o servidor de e-mail da empresa (decisão 90). Em seguida, a pessoa que usa o app faz uma pergunta e recebe a resposta. Quem confere: a TI do cliente, com as ferramentas dela, e o auditor, a pessoa nomeada pelo owner da organização para só ler o registro, que encontra o pedido ali.

**Demonstração 2: a queda e a volta sem ninguém agir.** Com um trabalho em andamento, a TI do cliente corta a internet do servidor do mAIg por alguns minutos e depois a devolve. O mAIg religa sozinho, o estado da ligação volta a "no ar" no painel da instância, e o trabalho que estava em andamento não se perdeu. Quem confere: a TI do cliente, que cortou e devolveu a internet ela mesma.

## Retorno para o negócio

- **A venda deixa de parar na porta de entrada.** Hipótese: liberar uma saída passa mais depressa pela aprovação de segurança do que abrir uma porta de entrada, o que encurta a etapa mais lenta da primeira venda. (decisão 6)
- **Os próximos apps entram pela mesma ligação.** Cada app seguinte usa a ligação que já existe, sem um novo pedido à rede do cliente. É parte do "entrar e expandir": a venda difícil acontece uma vez, e os produtos seguintes entram pela porta já aberta. (decisões 3 e 6)
- **Menos suporte.** Hipótese: como o mAIg religa sozinho, uma queda de internet do cliente não vira chamado para a Maind nem para a TI do cliente.
- **Funciona em qualquer rede.** Sem IP fixo e atrás de qualquer rede, o mAIg alcança clientes cuja rede não aceitaria receber ligações de fora. (decisão 6)
- **O que custa.** A Maind mantém sempre de pé o ponto onde os mAIg se conectam, um custo contínuo de atender (decisão 6). Hipótese: esse custo cresce com o número de clientes.

## O que não inclui

- **O resto da tela do app quando a ligação cai,** como o texto e o desenho do aviso: é de cada app; no Horus, da parte do Horus na nuvem da Maind. A regra de que a pessoa vê um aviso próprio, e não um erro, a luz de estado e a página de status são do mAIg e fazem parte desta mf; a luz e o aviso entram na onda 1.0, e a página, na onda 1.1 (decisões 70 e 121).
- **Quem o app avisa quando uma rodada é pulada:** é de cada app; no Horus, das regras dos agendamentos, alertas e agentes. A espera de até uma hora é regra do mAIg (decisão 69).
- **O formato do handshake contratual e da licença, a validade do certificado de cada app e o cancelamento dele:** Contratação dos apps (MF-103).
- **A regra de versão por prazo do módulo de cada app, e como um mAIg novo conversa com um módulo antigo dentro do prazo:** Gestão dos apps (MF-104).
- **A atualização do mAIg, com o aval da TI do cliente, e a janela de horário:** Organizações e instâncias (MF-107).
- **O caminho até o banco do cliente na hospedagem da Maind:** Bancos da empresa (MF-105).
- **O registro do que passa pela ligação:** Registro e auditoria (MF-102).
- **O isolamento entre os módulos dos apps dentro do mAIg:** Execução isolada dos apps (MF-109).
- **A tela onde o administrador da instância vê o estado da ligação:** Console de configuração (MF-110).
- **O login das pessoas:** Segurança e permissões (MF-101).
- **Um modo sem ligação com a Maind:** não entra na primeira versão, e nenhuma versão está marcada para ele (decisão 122).

## Depende de

Nenhuma outra mf do mAIg. A ligação é aberta pelo próprio mAIg e só pede que ele esteja instalado. Dentro dela, porém, só passa a parte de fora de um app com certificado válido, que vem da contratação (MF-103), e a contratação corre pela ligação: as duas fazem parte do núcleo base, construído junto, como explica o mapa das macro funcionalidades.

- **Pré-requisito de negócio: a Maind manter sempre de pé o ponto onde os mAIg se conectam.** Sem ele, nenhum mAIg tem com quem falar. (decisão 6)
- **Pré-requisito de negócio: a TI do cliente liberar as saídas combinadas.** São a do nome único da Maind, com IP fixo, uma linha só, a de cada provedor de IA que a organização escolher entre os cinco da primeira versão, a do Google, quando a organização entra com a conta Google, e a do servidor de e-mail da própria empresa, os únicos pedidos de rede que o mAIg faz à casa do cliente. (decisão 6, decisões 19 e 90; decisões 141 e 149) O Google é o segundo jeito de entrar da onda 1.0: cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser. Com o Google fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue (decisão 98).

**Quem depende desta:** Contratação dos apps, porque o handshake contratual conversa com a Maind pela ligação que o mAIg abre (MF-103).

## Ponto de partida no Horus

O mAIg nasceu como o middleware do Horus, a peça entre as telas do Horus, na nuvem da Maind, e os dados da empresa; abaixo, "a peça" é esse middleware.

- **A ligação mudou de lado.** No Horus, a nuvem do Horus ligava para a peça e guardava o endereço e a porta de cada organização; com a escolha de o mAIg ligar para fora, o Horus deixou de guardar esse endereço e essa porta. O Horus registrou também quando rever a escolha: se um cliente proibir até a conexão de saída. Isso já foi decidido assim (D-258, D-296 do Horus), e vale no mAIg (decisão 6). Para esse cliente, a primeira versão do mAIg não tem modo sem ligação (decisão 122).
- **A entrada das pessoas mora na peça.** No Horus, as configurações de login ficam na peça; com a ligação fora, a entrada cai junto. Isso já foi decidido assim, e vale no mAIg: a entrada mora no mAIg, e sem a ligação ninguém troca o código do login pelo passe (decisões 23 e 41, D-258, D-283 do Horus). Que o owner da organização e o administrador da instância entrem sempre por usuário e senha o dono da Maind confirmou em 09/11/2026 (decisão 24).
- **Um aviso próprio e uma página de status.** No Horus, com a ligação fora, a pessoa vê um aviso próprio, e não um erro, que manda procurar o owner da organização, com um botão para tentar de novo; e cada organização tem uma página de status, sem login, com as quedas dos últimos noventa dias (D-283 do Horus). O aviso próprio vale no mAIg, desde a onda 1.0. Na página, o mAIg decidiu diferente: ela é do mAIg, igual para todos os apps, pede o login do mAIg, mostra a quem é de uma organização só os apps dela e chega na onda 1.1. As quedas passadas continuam na página; quantos dias ela mostra está em "O que ainda falta decidir" (decisões 70 e 121).
- **Uma luz de estado.** No Horus, a tela de entrada de cada organização mostra uma luz verde ("No ar"), amarela ("Instável") ou vermelha ("Fora do ar"), sempre com texto (D-284 do Horus). O mAIg decidiu diferente em de quem é a luz: ela é do mAIg, a mesma em todos os apps (decisão 70). As três cores, sempre com texto, valem no mAIg; a luz entra na onda 1.0 e aparece também na tela de entrada, antes do login (decisão 121).
- **A rodada espera até uma hora.** No Horus, a tarefa marcada para quando a ligação está fora espera até uma hora; se a ligação volta, roda uma vez, atrasada e dizendo que atrasou; senão, é pulada. Isso já foi decidido assim, e vale no mAIg (decisão 69, D-285 do Horus).
- **Só o responsável pelo agendamento é avisado.** No Horus, quando a rodada é pulada, só a pessoa responsável pelo agendamento é avisada, na área de avisos do Horus (D-293 do Horus). É regra do app, e não do mAIg, e fica aqui como história: cada app decide quem avisa da rodada que pulou. No mAIg, o aviso sobre uma tarefa marcada é o da tarefa que para porque a pessoa que a criou perdeu o acesso, e vai aos owners da organização (decisões 42 e 126).
- **A versão atual e a anterior.** No Horus, a nuvem funciona com a peça na versão atual e na anterior e recusa uma mais velha, com o aviso "Atualização necessária"; quem atualiza é quem hospeda (D-292 do Horus). O mAIg decidiu diferente em quem atualiza: o mAIg baixa a versão nova sozinho e, na casa do cliente, só a instala com o aval da TI do cliente (decisão 39). A recusa com o aviso vale no mAIg para a versão adiada além do prazo (decisão 45). Na contagem, o mAIg decidiu diferente: não há número de versões que convivem, e a regra é uma só, por prazo, para o mAIg e para o módulo de cada app (decisão 109, MF-104).
- **O painel mostra o estado, e é avisado o responsável pelo serviço.** No Horus, o painel de quem administra a instalação mostra se a peça está no ar ou fora e em que versão, e, quando ela para, é avisada a Maind, na instalação dela, ou o cliente, na dele. Isso já foi decidido assim, e vale no mAIg (decisões 12 e 71, D-275 do Horus).

## O que ainda falta decidir

- **Falta o arquiteto do mAIg definir o que conta exatamente como "em andamento" quando a ligação cai e como o mAIg guarda e entrega esse trabalho dentro do prazo curto.** *O que está em jogo:* o prazo e o que a pessoa vê estão decididos (decisão 69); a tela de cada app precisa saber o que pode prometer, e guardar mal entrega uma resposta pela metade.
- **Falta o dono da Maind decidir que compromisso de disponibilidade a Maind assume para o ponto de conexão.** *O que está em jogo:* quando ele cai, todos os mAIg ficam sem ligação ao mesmo tempo; o compromisso entra na conversa com a TI do cliente e no custo de manter o ponto sempre de pé. (decisão 6)
- **Falta o arquiteto do mAIg definir como a ligação feita pela Maind aguenta muitas pessoas ao mesmo tempo e a queda de um servidor da Maind.** *O que está em jogo:* uma resposta grande não pode atrasar as outras, e as linhas de todos os mAIg não podem voltar no mesmo segundo depois de uma queda. Com a ligação feita pela própria Maind, esse trabalho é dela (decisões 33 e 38). O caminho alternativo para a empresa cujo intermediário quebra a ligação já está decidido: entra na onda 1.0, com a troca automática (decisão 154).
- **Falta o dono da Maind decidir quantos dias de quedas a página de status mostra.** *O que está em jogo:* é só um número, da onda 1.1, e não muda o que a primeira versão faz: a página mostra as quedas passadas, com início, fim e duração (decisão 121). No Horus, eram os últimos noventa dias (D-283 do Horus).
- **Também depende, e está explicado em outras mfs:** o formato do handshake contratual e a política do certificado (MF-103); como um mAIg novo conversa com um módulo antigo dentro do prazo de adiamento (MF-104); o que o pedido ao provedor de IA pode levar (MF-106); a janela e o aviso da atualização do mAIg (MF-107).

## Decisões do PO para discutir

- **Decisão:** a tela do app durante a queda (o aviso, a luz e a página de status) fica fora desta mf e é de cada app; o Horus entra só como ponto de partida. *Por que:* o mAIg serve a vários apps, e o mapa das mfs tira a tela do app desta mf. *Alternativa:* o mAIg oferecer um estado e uma página comuns a todos os apps. *Reabrir se:* o dono da Maind preferir uma experiência igual em todos os apps, que é o terceiro ponto em aberto. Foi decidido depois: a luz de estado e a página de status são do mAIg, iguais para todos os apps (decisão 70); a luz entra na onda 1.0, e a página, com o login do mAIg, na onda 1.1 (decisão 121).
- **Decisão:** esta mf não depende de nenhuma outra; ficam dois pré-requisitos de negócio, o ponto de conexão da Maind sempre de pé e a saída liberada pela TI do cliente. *Por que:* a ligação só pede o mAIg instalado; a instância é definida em outra mf, mas a ligação não depende de haver várias organizações (MF-107). *Alternativa:* declarar dependência de Organizações e instâncias (MF-107). *Reabrir se:* a ligação passar a ser aberta por organização, e não por instância.
- **Decisão:** ler "guardar o que estava em andamento" só como "o trabalho não se perde na queda" e deixar em aberto o resto. *Por que:* a decisão 6 não diz mais do que isso, e qualquer regra a mais seria uma promessa à pessoa que usa o app. *Alternativa:* o PO propor uma regra, como "a resposta chega quando a ligação volta, se voltar em pouco tempo". *Reabrir se:* o arquiteto do mAIg mostrar que guardar tem um custo que muda o desenho. Foi decidido depois: o pedido em andamento fica guardado por um tempo curto, como 15 minutos, e depois é descartado (decisão 69).
- **Decisão:** deixar claro que, na hospedagem da Maind, o "sem porta de entrada" fala da ligação do mAIg, e não do caminho até o banco. *Por que:* evita prometer à TI do cliente mais do que a hospedagem na Maind entrega (decisão 9). *Alternativa:* não tratar a hospedagem da Maind nesta mf. *Reabrir se:* o ponto sobre o alcance do banco for fechado (MF-105). Foi decidido depois: na hospedagem da Maind, o banco aceita conexão só do endereço fixo da Maind (decisão 91).
- **Decisão:** a prova de valor é feita pela própria TI do cliente, com as ferramentas dela: o firewall sem porta de entrada e o corte da internet. *Por que:* é a TI do cliente quem aprova o mAIg, e uma prova que ela mesma faz convence mais do que uma demonstração da Maind. *Alternativa:* a equipe da Maind demonstrar num ambiente de teste. *Reabrir se:* o primeiro cliente não deixar cortar a internet do servidor nem num teste.
- **Decisão:** citar o gateway de dados local da Microsoft como referência de mercado, com os mesmos fatos das páginas da visão. *Por que:* é a prova mais direta de que o desenho é aceito pela TI das empresas. *Alternativa:* deixá-lo só nas páginas da visão. *Reabrir se:* o dono da Maind preferir as mfs sem referência de mercado.
- **Decisão:** pôr em "Quem ganha", de forma indireta, a equipe da Maind e a pessoa que usa o app, além da TI do cliente. *Por que:* a venda que não esbarra na porta de entrada e o trabalho que não se perde na queda são ganhos reais deles. *Alternativa:* só a TI do cliente, como no mapa. *Reabrir se:* o dono da Maind preferir "Quem ganha" só com os papéis do mapa.
- **Decisão:** usar três entradas do Horus além das listadas para esta mf: a que inverteu a ligação, a de quem é avisado da rodada pulada e a do painel que mostra o estado da peça (D-296, D-293, D-275 do Horus). *Por que:* a primeira explica por que o Horus deixou de guardar o endereço da peça e traz a condição para rever a escolha; a segunda completa a da rodada que espera uma hora (D-285 do Horus); a terceira diz quem vê o estado e quem é avisado quando a peça para. *Alternativa:* ficar só nas entradas listadas. *Reabrir se:* o dono da Maind quiser o ponto de partida só com as entradas do mapa.
- **Decisão:** a ligação é da instância, e não de cada organização: todas as organizações de uma instância dependem da mesma ligação, e o estado dela faz parte do estado da instância que o administrador da instância vê (decisão 12). *Por que:* quem abre a ligação é o mAIg, e cada instância é um mAIg instalado. *Alternativa:* uma ligação por organização, com o estado de cada uma à parte, como o painel do Horus mostrava a peça de cada organização (D-275 do Horus). *Reabrir se:* o arquiteto do mAIg separar a ligação por organização.
- **Decisão:** além do que conta como "em andamento" e de a quem cabem a luz e a página de status, quatro pontos novos foram abertos aqui: quem é avisado quando a ligação não volta sozinha, o compromisso de disponibilidade do ponto de conexão e o que se oferece a quem não libera nem a saída, com o dono da Maind; e o endereço exato que a TI do cliente libera, com o arquiteto do mAIg. *Por que:* nenhuma decisão os responde, e os três primeiros mudam o que a Maind promete à TI do cliente. *Alternativa:* deixar todos para o arquiteto do mAIg. *Reabrir se:* o arquiteto do mAIg mostrar que algum deles é só técnico. Foi decidido depois: a luz e a página são do mAIg (decisão 70), quem é avisado quando a ligação não volta está decidido (decisão 71), e a primeira versão não tem modo sem ligação (decisão 122). Seguem abertos o compromisso de disponibilidade do ponto de conexão, com o dono da Maind, e o que conta como "em andamento", com o arquiteto do mAIg. O endereço exato foi decidido depois: um nome só da Maind, com IP fixo, na porta 443 (decisão 149).
- **Decidido pelo dono da Maind em 09/11/2026:** o pedido à IA sai direto para o provedor, e a TI do cliente libera uma saída para cada provedor, além da saída para a Maind (decisão 19). Esta mf foi ajustada, e o texto de "só a saída para a Maind" deixou de valer.
- **Decidido pelo dono da Maind em 10/11/2026:** a nuvem dos apps fala com o mAIg só pela ligação que o mAIg abre, a mesma para todas as pessoas, cada pedido com o passe de quem pediu, e essa ligação é feita pela própria Maind, sem serviço de outra empresa no caminho (decisões 33 e 38). Esta mf ganhou os tópicos da ligação para todas as pessoas e de quem faz a ligação, e um ponto em aberto.
- **Decidido pelo dono da Maind em 11/11/2026:** um pedido em andamento quando a ligação cai fica guardado por um tempo curto, como 15 minutos; depois, é descartado, e a pessoa refaz a pergunta (decisão 69). O ponto em aberto passou ao arquiteto do mAIg, só com o que conta como "em andamento" e como guardar.
- **Decidido pelo dono da Maind em 11/11/2026:** a luz de estado e a página de status são do mAIg, iguais para todos os apps, e uma página do mAIg mostra o estado da ligação e de todos os apps instalados (decisão 70). O ponto em aberto saiu desta mf, e a decisão do PO acima que deixava a luz e a página com cada app vale hoje só para o resto da tela do app durante a queda.
- **Decidido pelo dono da Maind em 11/11/2026:** quando a ligação não volta depois de alguns minutos, como 5, são avisados quem cuida da instância e a Maind, no console e por e-mail (decisão 71). O ponto em aberto saiu desta mf.
- **Decidido pelo dono da Maind em 11/11/2026:** a lista de saídas passa a incluir o Google e o servidor de e-mail da própria empresa, por onde saem os avisos; na hospedagem da Maind, o e-mail sai pelo serviço de e-mail da Maind (decisão 90).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão sai em duas ondas, a 1.0 e a 1.1, e a segunda versão vem depois; cada capacidade desta mf tem a onda marcada no tópico "O que entra em cada onda". A regra que resume o recorte: a onda 1.0 liga e para; a onda 1.1 desfaz e encerra (decisão 95).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão tem dois jeitos de entrar, usuário e senha e conta Google, os dois na onda 1.0; cada organização nasce só com usuário e senha ligados, e o owner da organização liga o Google se quiser. Com o Google fora do ar, quem entra por ele não começa sessão nova, e quem já entrou segue (decisão 98).
- **Decidido por delegação do dono da Maind em 11/11/2026:** no registro, desde a onda 1.0, e na consulta devolvida à tela, na onda 1.1, o valor de um filtro aparece mascarado quando o filtro toca uma coluna sensível; os outros valores, como o período e a cidade, aparecem (decisão 103).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a regra de versão única é por prazo, para o mAIg e para o módulo de cada app: a TI do cliente adia a versão nova dentro do prazo e, vencido o prazo, o que ficou velho deixa de atender, com o aviso "Atualização necessária". Com o mAIg vencido, todos os apps recusam a conversa; com o módulo de um app vencido, só aquele app para. A contagem de versões que convivem saiu do texto. Entra na onda 1.0 (decisão 109).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a luz de estado, igual em todos os apps, entra na onda 1.0, com três cores e sempre com texto, e aparece também na tela de entrada, antes do login; com a ligação fora ou a versão vencida, a pessoa vê um aviso próprio, e não um erro. A página de status chega na onda 1.1, com o login do mAIg, só de dentro da rede ou pela VPN, e mostra a cada pessoa o estado da ligação e dos apps da organização dela e as quedas passadas, sem nome de pessoa nem de banco (decisão 121).
- **Decidido por delegação do dono da Maind em 11/11/2026:** a primeira versão não tem modo sem ligação: a empresa que não libera a saída da rede até a Maind não usa o mAIg na própria rede. A capacidade não entra (decisão 122).
- **Decidido por delegação do dono da Maind em 11/11/2026:** além do que os apps precisam para funcionar, a instância manda à Maind só o mínimo de operação: a versão do mAIg e a dos módulos, o estado da ligação e o estado da licença de cada app. Nunca vai dado, nome de pessoa, consulta nem mensagem de erro com valores, e a lista fica à vista da TI do cliente no painel da instância. Entra na onda 1.0 (decisão 123).
- **Decidido por delegação do dono da Maind em 11/11/2026:** na onda 1.0, cada aviso tem destinatário fixo, aparece sempre no console e vai por e-mail, sem dado nenhum. Os avisos de segurança vão aos owners da organização e ao auditor; a queda de um banco e de uma IA, o limite de gasto, a tarefa marcada que parou e o fim do contrato vão aos owners da organização; o certificado da organização perto de vencer vai aos owners da organização e aos administradores da instância; e os avisos da instância vão a todos os administradores da instância. A lista "o que a organização permite" e as preferências de aviso chegam na onda 1.1 (decisão 126).
- **Decidido pelo dono da Maind em 12/11/2026:** a chave temporária que vem no PDF da Maind faz o papel do código de ativação: vale uma vez só, vence em pouco tempo e só é gasta quando a Maind entrega a organização; a primeira conexão do setup, feita com ela, é a única sem o certificado da instância e só serve para pedir o certificado e o arquivo da organização (decisão 133). Esta mf ganhou o parágrafo da primeira conexão do setup.
- **Decidido pelo dono da Maind em 12/11/2026:** cada app tem duas identidades atestadas pela Maind, a do módulo, com a chave criada no mAIg, e a da parte de fora, com a chave na nuvem da Maind, que o núcleo confere a cada conversa pela ligação (decisão 139). O tópico do certificado dentro da ligação passou a falar da identidade da parte de fora, e o kit deixou de ser um arquivo (decisão 138).
- **Decidido pelo dono da Maind em 12/11/2026:** a primeira versão fala com cinco provedores de IA, sempre com a chave da empresa, e a TI do cliente libera a saída só dos que a organização escolher (decisão 141). A lista de saídas desta mf passou a citar os cinco.
- **Decidido pelo dono da Maind em 12/11/2026:** o ponto de conexão e as outras peças do lado da Maind ficam num ambiente próprio, separado da nuvem dos apps e das instâncias hospedadas pela Maind (decisão 146).
- **Decidido pelo dono da Maind em 12/11/2026:** a saída para a Maind é um nome de internet só, com IP fixo reservado, na porta 443, atrás do qual ficam a ligação e o lugar de onde vêm as versões novas; o IP só muda por decisão da Maind, com aviso (decisão 149). O ponto do arquiteto do mAIg sobre o endereço exato saiu desta mf.
- **Decidido pelo dono da Maind em 12/11/2026:** a ligação tem dois caminhos já na onda 1.0, o principal e o alternativo por WebSocket, e o mAIg troca sozinho para o alternativo quando o intermediário da empresa não deixa o principal passar; os dois são feitos pela Maind, contra a recomendação do arquiteto do mAIg, para nenhuma empresa ficar de fora (decisão 154). Esta mf ganhou o parágrafo dos dois caminhos, e o ponto do arquiteto do mAIg ficou só com a carga e a queda de um servidor da Maind.
